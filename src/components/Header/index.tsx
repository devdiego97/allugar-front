import { Link } from "react-router-dom"
import { HeaderBox } from "./styled"
import { LinksRoutes } from "@/lib/linksroutes"
import { useContextUI } from "@/context/contextUI"
import Menuicon from "../svgs/menuicon"
import Closemenu from "../svgs/closemenu"


export const Header=()=>{
    const {onMenuMobile,setOnMenuMobile}=useContextUI()




    return <HeaderBox stateMenu={onMenuMobile} >
       <div className="left-header p-10" >
       </div>
       <div className="cx-btn-open">
            <button onClick={()=>setOnMenuMobile(true)}><Menuicon /></button>
        </div>
       <div className="right-header">
        <div className="cx-btn-close">
            <button onClick={()=>setOnMenuMobile(false)}><Closemenu/></button>
        </div>
        <nav >
            <ul className="flex">
               {LinksRoutes.filter(l=>l.nav).map(l=>
                    <li onClick={()=>setOnMenuMobile(false)}
                       className="text-sm text-white m-5 cursor-pointer hover:bg-[#118B50] p-3 hover:rounded rounded-md">
                            <Link  to={l.path}>{l.name}</Link>
                    </li>
               )}
            </ul>
        </nav>
       </div>
    </HeaderBox>
}