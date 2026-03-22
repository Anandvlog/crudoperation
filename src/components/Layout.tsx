import Header from './Header'
import Footer from './Footer'
import * as React from "react";

export interface LayoutProps  { 
   children: React.ReactNode
}

const Layout = (props:LayoutProps) => {
  return (
    <>
    <Header/>
    <main>{props.children}</main>
    <Footer />
    </>
  )
}

export default Layout