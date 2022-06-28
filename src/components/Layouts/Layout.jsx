import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({children}) => (
      <>
        <Header />
          <main className="container">
            {children}
          </main>
        <Footer />
      </>
)

export default Layout;