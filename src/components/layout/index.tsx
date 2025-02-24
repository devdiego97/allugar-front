import { ReactNode } from "react"
import { FooterBox } from "../Footer/style"
import { Header } from "../Header"
import { BoxLayout, Main } from "./style"


type Props={
    children:ReactNode
}


export const Layout=({children}:Props)=>{
    return <BoxLayout>
     <Header/>
        <Main>
            <div className="content">
                {children}
            </div>
        </Main>
    <FooterBox/>
    </BoxLayout>
}
