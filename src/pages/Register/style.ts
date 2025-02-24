import { styled } from "styled-components";


export const Page=styled.div`
display: flex;
.container{
    display:flex;
    height: 100%;
}
.left-form{
    width: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    form{
        width: 90%;
        height: fit-content;
        padding: 22px 12px;
        border: 1px solid grey;
    }

}

.right-img{
    flex: 1;
    height: initial;
    background-image: url(./casal-feliz-chaves.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    padding: 50px;
    
}


@media screen and (max-width:950px) {
    .container{
        flex-direction: column;
       
    }
    .left-form{
        width: auto;
        height:fit-content;
    }
    .right-img{
        display: none;
        
    }
}
`