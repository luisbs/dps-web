import React from "react"
import { Typography } from "@material-ui/core"

export default function Footer() {
  return (
    <footer className="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright &copy;, All right reserved
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </footer>
  )
}
