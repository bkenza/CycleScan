
import { Camera } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ScannerScreen() {

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [loading, setLoading] = React.useState(false);
  let camera: Camera | null;

  /**
    * Asynchronous method that takes a picture when the user presses the capture button
    */
  const takePicture = async () => {
    if (camera) {
      // Pause the camera's preview
      camera.pausePreview();

      // Set the activity indicator
      setLoading(true);

      // Set options
      const options = {
        base64: true,
      };

      let photo = await camera.takePictureAsync(options);

      setLoading(false);

      camera.resumePreview();

      // Get the identified image (after integrating the vision API)
      // identifyImage(photo.base64);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>CycleScan does not have permission to access the camera.</Text>;
  }

  return (
    <Camera style={{ flex: 1 }} type={type} ref={(r) => {
      camera = r
    }}>
      {/* <ActivityIndicator
        size="large"
        style={styles.loadingIndicator}
        color="#fff"
        animating={loading}
      /> */}
      <TouchableOpacity
        style={styles.flipIconContainer}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <MaterialIcons name="flip-camera-ios" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={takePicture}
        style={styles.captureButton} disabled={loading}>
        <Button
          color={'white'}
          onPress={takePicture}
          disabled={loading}
          title=""
          accessibilityLabel="Learn more about this button"
        />
      </TouchableOpacity>
    </Camera>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  loadingIndicator: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipIconContainer: {
    // flex: 100,
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 5
  },
  captureButton: {
    marginTop: '140%',
    width: 60,
    height: 60,
    borderRadius: 50,
    // borderColor: 'black',
    backgroundColor: 'white',
    left: '42%',
  },
});

