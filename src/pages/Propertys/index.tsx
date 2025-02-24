import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
import { ContainerPropertys, Page, SliderBox } from "./style"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { PropertysList } from "@/data/property"
import CardProperty from "@/components/CardProperty"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@radix-ui/react-alert-dialog"

// eslint-disable-next-line react-refresh/only-export-components
export default ()=>{
    const [imgsSlide,setImgsSlide]=useState(['./casa-1.png','casa-2.png','casa-3.png'])
    const [propertysList,setPropertList]=useState(PropertysList)
    const [citys,setCity]=useState(['SP','RJ','BH'])
    const [states,setState]=useState(['SP','RJ','BH'])



    return <Page>
        <SliderBox className='bg-pink-500 text-center'>
        <Carousel>
            <CarouselContent className="-ml-4">
               {
                imgsSlide.map(img=><CarouselItem className="pl-4">
                    <div>{img}</div>
                </CarouselItem>)
               }
            </CarouselContent>
            </Carousel>

        </SliderBox>
        <ContainerPropertys className=" p-10">
            <h2 className="text-3xl m-3 font-bold text-gray-700">Imóveis disponiveis</h2>
            <div className="filters m-17">
                <p className="text-md text-gray-700">Faça uma busca por uma casa do jeito que deseja:</p>
                <form className="grid grid-cols-4 gap-4 mt-5 mb-32">
                <Select>
                    <SelectTrigger className="rounded border-gray-300 ">
                        <SelectValue placeholder="Select a cidade" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-100 rounded m-0">
                        <SelectGroup >
                        <SelectLabel className="bg-[#500073;] font-bold text-[#118B50]">Cidades</SelectLabel>
                        {citys.map((c,k)=><SelectItem className="focus:bg-[#118B50] focus:text-white"  key={k} value={c} >{c}</SelectItem>)}
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                    <Select>
                    <SelectTrigger className="rounded border-gray-300  ">
                        <SelectValue placeholder="Select o Estado" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-100 rounded p-none">
                        <SelectGroup className="m-0">
                        <SelectLabel className="bg-[#500073;] font-bold text-[#118B50]">Estados</SelectLabel>
                        {states.map((c,k)=><SelectItem className="focus:bg-[#118B50] focus:text-white"  key={k} value={c} >{c}</SelectItem>)}
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                    <Select>
                    <SelectTrigger className="rounded border-gray-300  ">
                        <SelectValue placeholder="Select o Estado" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-100 rounded p-none">
                        <SelectGroup className="m-0">
                        <SelectLabel className="bg-[#500073;] font-bold text-[#118B50]">Estados</SelectLabel>
                        {states.map((c,k)=><SelectItem className="focus:bg-[#118B50] focus:text-white"  key={k} value={c} >{c}</SelectItem>)}
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                    <Button className="text-white bg-blue-500 hover:bg-blue-700 rounded rounded-8">filtrar</Button>
                    <Button variant={'link'} className="text-blue-500">Limpar filtros</Button>
                </form>
            </div>
            <p className="text-gray-500"><span className="text-gray-900 font-bold mr-3">Resultado:</span>1.564 imóveis encontrados</p>
            <div className="cards-propertys grid grid-cols-3 gap-3 m-7 ">
               {propertysList.map((p,k)=><CardProperty  property={p} />)}
            </div>
     
        </ContainerPropertys>
    
    </Page>
}