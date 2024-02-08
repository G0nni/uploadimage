import {Alert} from 'react-native';
import {
  launchImageLibrary,
  Asset,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {uploadImage} from './api';

const selectImage = () => {
  launchImageLibrary({mediaType: 'photo'}, (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const firstAsset: Asset = response.assets[0];
      const source = {uri: firstAsset.uri};
      // traiter l'Image

      try {
        uploadImage(source.uri as string).then(link => {
          console.log('Image uploaded: ', link);
        });
      } catch (error) {
        Alert.alert('Error', 'Error uploading image');
      }
      return source.uri;
    }
  });
};

export default selectImage;
