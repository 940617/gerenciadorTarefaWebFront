
import styled from "styled-components";

export const CONTAINER = styled.div`
        width:150px;
        height:50px;
        background:#00FF00;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        
        display:flex;
       
        justify-content: space-around;
   
        span{
                font-weight: bold;
                align-self: flex-end;
                font-size: 18px;
        }

        &:hover{
                background: #008000;
        }


`