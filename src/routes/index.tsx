import { LinksRoutes } from "@/lib/linksroutes"
import {Routes,Route } from "react-router-dom"




export const  Routers=()=>{

    return <Routes>
        {LinksRoutes.map(l=><Route Component={l.element} path={l.path}  />)}
    </Routes>
}