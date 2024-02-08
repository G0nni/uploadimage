import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import selectImage from './src/components/imagepicker';
import {requestGalleryPermission} from './src/components/requestpermissions';

const App = () => {
  requestGalleryPermission();
  return (
    <SafeAreaView>
      <Button
        title="Select Image"
        onPress={() => {
          requestGalleryPermission().then(hasPermission => {
            if (hasPermission) {
              selectImage();
            }
          });
        }}
      />
    </SafeAreaView>
  );
};

export default App;
