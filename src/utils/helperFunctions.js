import {showMessage} from 'react-native-flash-message';
import {Linking, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,                   
        };
        resolve(cords);
      },
      (error) => {
        reject(error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });

const showError = (message) => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};

const showSuccess = (message) => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};

export function otpTimerCounter(seconds) {
  // alert(seconds)
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return `${m}:${s}`;
}

export function getRandomColor(){
  const w = Math.floor(Math.random() * 256);
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = 0.3
  const rgbaColor = "rgba(" + w + "," + x + "," + y + "," + z + ")";
  return rgbaColor;
}
export {showError, showSuccess};