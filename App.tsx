//Toda interface no react começa com uma importação do react

import React from 'react';
import { Welcome } from './src/pages/Welcome';



export default function App(){
  return (
     
     <Welcome />
  )
    
}



/* - Essa é a base de uma interface react native 
   - É regra do react retornar apenas um elemento, como alternativa temos o "Fragment"
    <> </>  ou usa uma view. 
*/