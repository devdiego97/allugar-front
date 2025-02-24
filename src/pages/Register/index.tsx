import { Input } from "@/components/ui/input"
import { Page } from "./style"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default ()=>{
    return <Page>
       <div className="container">
        <section className="left-form mt-36">
               <form action="" className=" rounded  border-x-gray-500">
                    <h2 className="text-center text-3xl  font-bold" >Crie sua conta</h2>
                    <p>Preencha os campos para criar a sua conta e começar a ver imóveis</p>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">Nome</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;]"  type="text" placeholder="Digite seu nome" />
                    </div>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">Sobrenome</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;]" type="email" placeholder="Digite seu sobrenome" />
                    </div>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">Email</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;]" type="email" placeholder="Digite seu Email" />
                    </div>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">Telefone</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;]" type="email" placeholder="Digite seu telefone" />
                    </div>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">RG</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;] " type="text"  placeholder="Digite seu RG" />
                    </div>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">CPF</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;]" type="text" placeholder="Digite seu CPF" />
                    </div>
                    <div className="mt-4   flex flex-col items-center ">
                        <Button className="bg-blue-400 m-6 text-white w-40 rounded mt-6 align-super hover:bg-blue-600"  type="submit">Enviar</Button>
                        <p className="text-gray-500">Já tem uma conta?<Link className=" transition-all hover:text-blue-600 hover:underline" to={'/entrar'}>clique aqui</Link></p>
                    </div>
                 
               </form>
      </section>
      <div className="right-img">

      </div>
       </div>
    </Page>
}