import styled from "styled-components";

type Props={
    stateMenu:boolean
}
export const HeaderBox=styled.header<Props>`
background-color: #500073;
display: flex;
padding:12px;
align-items: center;
box-shadow: 0 0 12px #222;
height: 90px;
justify-content: space-around;
.left-header{
    display: flex;
    height: 100%;
    width: 170px;
    background-repeat:no-repeat;
    background-size: contain;
    background-image: url(./logo.png);
    padding:32px;
}

button{
    display: none;
    height: 45px;
    width: 45px;
    padding: 5px;
    border-radius: 8px;
     background-color: #118B50;
}

.right-header{
height: initial;
display: flex;
align-items: center;
width: 40%;
justify-content: center;
nav{
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
}
@media screen and (max-width:950px){
    justify-content:space-between;
    .left-header{
        height: auto;
    }

    .cx-btn-open{
            display: ${props=>!props.stateMenu ? 'flex' : 'none'};
            button{
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }


    .right-header{
        position: fixed;
        height: 100vh;
        z-index: 1;
        top: 0;
        transition: all ease 0.3s;
        display: ${props=>!props.stateMenu ? 'hidden' : 'flex'};
        width: ${props=>props.stateMenu ? '60vw' : '0'};
        justify-content:start;
        flex-direction: column;
        right: 0;
        background-color:#500073;
        box-shadow: 0 0 18px #222;
       ul{
            margin-top: 80px;
            width: ${props=>props.stateMenu ? '60vw' : '0'};
            display: initial;
            flex-direction: column;
           
            
           li{
            width: ${props=>props.stateMenu ? '60vw' : '0'};
            font-size: 16px;
            margin: 12px 0;
            text-align: center;
            border-radius: 0;
           }
            a{
                width: 100%;
            }
        }

    
        .cx-btn-close {
            background-color: white;
            width: 100%;
            padding: 8px;
            display: ${props=>!props.stateMenu ? 'none' : 'flex'};
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                svg{
                    fill: white;
                }
            }
        }
    }
}
`