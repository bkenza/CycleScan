
import { Camera } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function ScannerScreen() {

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [loading, setLoading] = useState(false);
  const [imagePrediction, setImagePrediction] = useState('');
  const GOOGLE_CLOUD_VISION_API_KEY = process.env.GOOGLE_CLOUD_VISION_API_KEY; // get api key from env file
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

      // Get the identified image
      let response: any = await identifyImage(photo.base64);

      // display the result
      if (response) {
        setLoading(false);
        displayResult(response.labelAnnotations);
      } else {
        Alert.alert('Sorry, something went wrong!')
      }
    }
  };

  const identifyImage = async (image: string | undefined) => {
    try {
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 2 },
              // { type: "LANDMARK_DETECTION", maxResults: 5 },
              // { type: "FACE_DETECTION", maxResults: 5 },
              // { type: "LOGO_DETECTION", maxResults: 5 },
              // { type: "TEXT_DETECTION", maxResults: 5 },
              // { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
              // { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
              // { type: "IMAGE_PROPERTIES", maxResults: 5 },
              // { type: "CROP_HINTS", maxResults: 5 },
              // { type: "WEB_DETECTION", maxResults: 5 }
            ],
            image: {
              content: image
            },
          }
        ]
      });

      let response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_CLOUD_VISION_API_KEY}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: body
        }
      );
      let responseJson = await response.json();
      let extractedResponse = responseJson.responses[0];
      return extractedResponse; // return array of predictions
    }
    catch (e) {
      console.log('An error has occurred!')
      Alert.alert('Sorry, an error has occurred. Please try again later!')
      console.log(e)
    }
  }

  /**
   * Function that displays the most accurate result on the screen after filtering out the response array
   * @param results 
   */
  const displayResult = (results: []) => {
    let predictions: string[] = [];
    results.map((result: any) => {
      console.log(result.description);
      predictions.push(result.description);
      return predictions;
    })
    setImagePrediction(predictions[0]);
    actionTaken(predictions[0]);
  }
  
  function actionTaken(obj) {
    obj = obj.toLowerCase();
    var apiURL = "http://127.0.0.1:5000/api/search/object?obj=" + obj;

    var request = new XMLHttpRequest();
    request.open('GET', apiURL, true);
    request.onload = function () {
      var data = this.response;
    }
    request.send();

    Alert.alert(obj + ' is ' + data + '.');
    } 
  
  /**
   * Function that allows users to retake a picture
   */
  const retakePhoto = async () => {
    await camera?.resumePreview();
  }

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
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}
        ref={ref => { camera = ref; }}
      >
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
        <TouchableOpacity
          style={styles.retakeContainer}
          onPress={retakePhoto}
        >
          <MaterialCommunityIcons name="camera-retake-outline" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.scanContainer}
          onPress={retakePhoto}
        >
          <AntDesign name="scan1" size={40} color="white" />
        </TouchableOpacity>
        <ActivityIndicator
          size="large"
          style={styles.loadingIndicator}
          color="#fff"
          animating={loading}
        />
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

    </View>
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
    marginVertical: '30%',
    paddingBottom: '30%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipIconContainer: {
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 5
  },
  retakeContainer: {
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5
  },
  scanContainer: {
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5
  },
  captureButton: {
    marginBottom: '5%',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    left: '42%',
  },
});

