import { Input } from "@/components/ui/input"
import { Page } from "./style"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default ()=>{
    return <Page >
        <form className="box-login border-red-700 rounded">
            <h2 className="text-3xl font-bold mb-3">Entrar</h2>
            <p>Preencha os campos para entrar</p>
            <div className="inputs">
            <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">Email</label>
                        <Input className="rounded border-gray-400 focus:border-[#500073;] "  type="email" placeholder="Digite seu email" />
                    </div>
                    <div className="cx-input mt-6">
                        <label className="text-center font-bold"  htmlFor="">Senha</label>
                        <Input className="rounded border-gray-300 focus:border-[#500073;]" type="password" placeholder="Digite sua senha" />
                    </div>
            </div>
            <div className="mt-4   flex flex-col items-center ">
                    <Button className="bg-blue-400 m-6 text-white w-40 rounded mt-6 align-super hover:bg-blue-600"  type="submit">Enviar</Button>
                <p className="text-gray-500">Não tem uma conta?<Link className=" transition-all hover:text-blue-600 hover:underline" to={'/cadastrar'}>clique aqui</Link></p>
                <p  className="text-gray-500">Esqueceu  senha?<Link to='/esqueci-senha' Name=" transition-all hover:text-blue-600 hover:underline">clique aqui</Link></p>
            </div>
        </form>
   
    </Page>
}