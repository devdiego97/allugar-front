import { About, Benefits, Depoiments, Page, Questions } from "./style"



export default ()=>{
    return <Page>
        <About className='bg-red-800'>
           sobre 
        </About>
        <Benefits className='bg-blue-800'>
            beneficos
        </Benefits>
        <Depoiments className='bg-green-800'>
        deopimentos
        </Depoiments>
        <Questions className='bg-orange-800'>
            perguntas frequentes
        </Questions>

    </Page>
}