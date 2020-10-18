import { DefineDocumentModel, DocumentView } from "./ModelGenerator"

/**
 * Datos almacenados de los productos
 */
export type ProductData = {
  name: string
  imageURL: string
  brand: string
  category: string
  rating: number
  stock: number
  price: number
  reviewsQuantity: number
}
export type ProductView = DocumentView<ProductData>
export const ProductModel = DefineDocumentModel<ProductData>("products")
