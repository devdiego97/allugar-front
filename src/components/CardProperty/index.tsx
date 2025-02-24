import { IProperty } from "@/interfaces/property"
import { CardBox } from "./style"
import { IconCardType } from "../svgs/icocardtype"
import { IconCardLocation } from "../svgs/iconcarlocation"
import { Link } from "react-router-dom"




type Props={
    property:IProperty
}

export default ({property}:Props)=>{
    return <CardBox cover={property.gallery[0]} className="border-gray-600 rounded rounded-sm">
        <div className="top-card rounded"></div>
        <div className="bottom-card p-5">
            <h2 className="text-xl truncate m-4 p-3 font-bold"> {property.title}</h2>
            <div className="spans grid grid-cols-2 gap-2">
                <span className="text-gray-600 text-sm flex items-center">
                    <IconCardLocation/>
                    {property.city}-{property.state}</span>
                <span className="text-gray-600 text-sm flex items-center capitalize">  <IconCardType />{property.type}</span>
                <span  className="text-gray-600 text-sm  flex items-center ">á partir de R${property.price.toFixed(2).replace('.',',')}</span>
            </div>
            <div className=" m-7 flex items-center justify-center">
                <Link to={`/imoveis/${property.id}/${property.title}`} className="text-white max-w-screen-md px-14 py-4 rounded bg-blue-500 hover:bg-blue-700">detalhes</Link>
            </div>
        </div>
    </CardBox>
}
