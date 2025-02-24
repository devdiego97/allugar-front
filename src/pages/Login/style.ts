import { styled } from "styled-components";


export const Page=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
.box-login{
    border: 1px solid #ddd;
    width: 50%;
    height:auto;
    padding: 20px 12px;
}

@media screen and (max-width:950px){
    .box-login{
      width: 80%;
    }
}
`