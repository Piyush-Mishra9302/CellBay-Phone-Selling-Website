

import { Outlet } from "react-router-dom"
import TopHeader from "./components/TopHeader"
import TopMenu from "./components/TopMenu"

const Layout = () => {
  return (
    <>
        <TopHeader/>
        <TopMenu/>
        <hr/> <hr/>

        <Outlet />
    </>
  )
}

export default Layout