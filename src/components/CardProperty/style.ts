import styled from "styled-components";

type Props={
    cover:string
}

export const CardBox=styled.div<Props>`
border: 1px solid #eee;
border-radius: 8px;

.top-card{
    background-image:url(${props=>props.cover ? props.cover :''});
    height: 250px;
    background-repeat:no-repeat;
    background-position: contain;
}
.bottom-card{
 h2{
    border-bottom: 1px solid #eee;
 }
 svg{
    margin: 12px 0;
    height: 25px;
 }
}

&:hover{
    transition: all ease-in-out .3s;
    box-shadow: 0 0 13px #222;
}

`