

import { Outlet } from "react-router-dom"
import TopHeader from "./components/TopHeader"
import TopMenu from "./components/TopMenu"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
        <TopHeader/>
        <TopMenu/>
        <hr/> <hr/>

        <Outlet />

       

        <Footer/>
    </>
  )
}

export default Layout