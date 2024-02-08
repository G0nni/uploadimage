import {Alert} from 'react-native';
import {
  launchImageLibrary,
  Asset,
  ImagePickerResponse,
} from 'react-native-image-picker';

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

      console.log(source);
      return source.uri;
    }
  });
};

export default selectImage;
