
import React from 'react';
import * as  Styled from './styles';
import Img from '../../Imgs/filter.png';

function Filter({title}){
   return (
   <Styled.CONTAINER>
       <img src={Img} alt="FILTRO"/>
       <span> {title} </span>
   </Styled.CONTAINER>
   )

} 

export default Filter;