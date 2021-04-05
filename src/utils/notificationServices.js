import messaging from '@react-native-firebase/messaging';


export default async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }


// export   const getFcmToken=async()=>{
//       const fcmToken =await messaging().getToken();
//       if(fcmToken){
//           console.log(fcmToken)
//       }
//       else{
//           console.log("erroer in gatting fcm Token")
//       }
//   }