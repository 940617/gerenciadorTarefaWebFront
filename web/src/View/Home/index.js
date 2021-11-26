import React from 'react';
import * as  Styled from './styles';
import Header from '../../Componetes/Header'
import Footer from '../../Componetes/Footer'
import Filter from '../../Componetes/Filter'

 function Home () {
  return (
    <Styled.CONTAINER>
    <Header />
    <Styled.CONTAINERFilter>
    <Filter title="Todos"/>
    <Filter title="Hoje"/>
    <Filter title="Semana"/>
    <Filter title="Mês"/>
    </Styled.CONTAINERFilter>

   
    <Footer/>
   
</Styled.CONTAINER>
  )
}

export default Home;
