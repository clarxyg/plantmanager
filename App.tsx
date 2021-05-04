//Toda interface no react começa com uma importação do react

import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';

import { 
     useFonts,
     Jost_400Regular,
     Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';

useEffect(() => {
  const subscription = Notifications.addNotificationReceivedListener(
    async notification => {
      const data = notification.request.content.data.plant as PlantProps;
    }
  );
  return () => subscription.remove();

//async function notifications() {
 // await Notifications.cancelAllScheduledNotificationsAsync()
 // const data = await Notifications.getAllScheduledNotificationsAsync();
 // console.log(data);
//}

//notifications();

}, [])



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