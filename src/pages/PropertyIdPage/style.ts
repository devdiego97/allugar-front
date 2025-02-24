import styled from "styled-components";


export const Page=styled.div`
min-height: 900px;
display: flex;
padding: 150px 20px;

.left-top{
        flex: 1;
        display: flex;
        flex-direction: column;

        section{
           padding:0;
        }
        .top{
        display: flex;
        justify-content: start;
        align-items: center;
      
    }
}

.right-bottom{
  width: 50%;
}
`