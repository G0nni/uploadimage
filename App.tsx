import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import selectImage from './src/components/imagepicker';
import {requestGalleryPermission} from './src/components/requestpermissions';

const App = () => {
  console.log('Return value:', selectImage());

  return (
    <SafeAreaView>
      <Button title="Select Image" onPress={selectImage} />
    </SafeAreaView>
  );
};

export default App;
