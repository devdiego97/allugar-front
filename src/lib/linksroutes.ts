
import ErrorPage from "@/pages/ErrorPage"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Propertys from "@/pages/Propertys"
import Register from "@/pages/Register"
import PropertyIdPage from "@/pages/PropertyIdPage"



type TLinkRoute={
    name:string
    path:string,
    element:()=>JSX.Element,
    isUser:boolean,
    nav:boolean
}
export const LinksRoutes:TLinkRoute[]=[
    {name:'Inicio',path:'/',element:Home,isUser:false,nav:true},
    {name:'Imóveis',path:'/imoveis',element:Propertys,isUser:true,nav:true},
    {name:'Quero Alugar',path:'/cadastrar',element:Register,isUser:false,nav:true},
    {name:'Entrar',path:'/entrar',element:Login,isUser:false,nav:true},
    {name:'Not Page',path:'*',element:ErrorPage,isUser:false,nav:false},
    {name:'property id',path:'/imoveis/:id/:title',element:PropertyIdPage,isUser:false,nav:false}

]