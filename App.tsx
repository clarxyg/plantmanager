//Toda interface no react começa com uma importação do react

import React from 'react';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import { 
     useFonts,
     Jost_400Regular,
     Jost_600SemiBold
} from '@expo-google-fonts/jost';



export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if(!fontsLoaded)
  return <AppLoading />

  return (
     
     <Routes />
  )
    
}



/* - Essa é a base de uma interface react native 
   - É regra do react retornar apenas um elemento, como alternativa temos o "Fragment"
    <> </>  ou usa uma view. 
*/