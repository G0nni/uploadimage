import {PermissionsAndroid, Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const requestGalleryPermission = async () => {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Gallery Permission granted');
      return true;
    } else {
      console.log('Gallery Permission denied');
      return false;
    }
  }
};

export {requestGalleryPermission};
