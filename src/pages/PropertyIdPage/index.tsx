import { PropertysList } from "@/data/property"
import { useParams } from "react-router-dom"
import { Page } from "./style"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { FaMapLocationDot as LocationIcon} from "react-icons/fa6"
  

export default ()=>{
    const {id}=useParams()
    const propertyFromId=PropertysList.find(p=>p.id === parseInt(id as string))
   
   return <Page>
       <div className="left-top ">
           <section className="top">
               <h2 className="text-gray-700  font-bold size-36 ">{propertyFromId?.title}</h2>
           </section>

           <section>
               <h3 className="text-gray-700 font-bold mb-6">Descrição</h3>
               <p className="text-gray-400">{propertyFromId?.about}</p>
           </section>

           <section>
              
              <h3 className=" font-bold mb-6 mt-6 flex justify-items-center ">
                 <LocationIcon className={`fill-bgTheme size-9 mr-5`}/> Localização
              </h3>
              <p>{propertyFromId?.city}-{propertyFromId?.state}</p>
              
           </section>
          

       <div className="right-bottom w-auto  bg-gray-800">
           ddddd
       </div>
</div>
   </Page>

}
