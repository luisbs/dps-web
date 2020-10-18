import { firestore } from "firebase"

/** Opcion de busqueda where */
export type SearchWhere = [
  string | firestore.FieldPath,
  firestore.WhereFilterOp,
  any
]

/**
 * Opciones de busqueda
 */
export type SearchOptions = {
  /** Filtro where añadido a la consulta de firestore */
  where: SearchWhere[] | SearchWhere
}

/**
 * Constructor para extender los datos de documentos
 * con campos complementarios como id's, o sub-documentos
 */
export type DocumentView<
  T extends firestore.DocumentData,
  R extends string = "id"
> = T & Record<R, string>

/**
 * Construye y configura las interacciones posibles con la coleccion en firestore
 * @param {string} collectionName Nombre de la coleccion
 */
export function DefineDocumentModel<T = firestore.DocumentData>(
  collectionName: string
) {
  return class DocumentModel {
    /**
     * Retorna el nombre de la colección
     */
    static CollectionName = collectionName

    /**
     * Retorna la colección
     */
    static get Collection() {
      return firestore().collection(
        this.CollectionName
      ) as firestore.CollectionReference<T>
    }

    /**
     * Operación generica para obtener documentos
     * @param {string} id Identificador del documento
     */
    static get(id: string) {
      return this.Collection.doc(id).get()
    }

    /**
     * Obtener un grupo de documentos
     * @param {SearchOptions} options Opciones de la busqueda (filtros, sord, etc)
     */
    static list(options?: Partial<SearchOptions>) {
      let query: firestore.CollectionReference<T> | firestore.Query<T> = this
        .Collection
      if (options?.where) {
        if (typeof options.where[1] === "string")
          query = query.where(
            options.where[0] as string,
            options.where[1],
            options.where[2]
          )
        else options.where.forEach(w => (query = query.where(w[0], w[1], w[2])))
      }
      return query.get()
    }

    /**
     * Añade un nuevo documento en la colección
     * @param {firebase.firestore.DocumentData} data Datos a ser ingresados
     */
    static push(data: T) {
      return this.Collection.add(data)
    }

    /**
     * Modifica campos en un documento existente
     * @param {string} id Identificador del documento a ser modificado
     * @param {firebase.firestore.DocumentData} data Datos a ser modificados
     */
    static put(id: string, data: Partial<T>) {
      return this.Collection.doc(id).update(data)
    }

    /**
     * Elimina un documento existente
     * @param {string} id Identificador del documento a ser eliminado
     */
    static remove(id: string) {
      return this.Collection.doc(id).delete()
    }
  }
}
