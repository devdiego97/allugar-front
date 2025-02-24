import styled from "styled-components";



export const BoxLayout=styled.div`
height: 100vh;

`

export const Main=styled.main`
display: flex;
justify-content: center;

.content{
    padding:0 15px;
    width: 85%;
    height: initial;
    
}

@media screen and (max-width:950px){
 
    .content{
        width: 100%;
        height: fit-content;
    }
}
`