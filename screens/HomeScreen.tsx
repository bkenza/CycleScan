import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function HomeScreen(props: { navigation: any; }) {
  let { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CycleScan</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/environment.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.fillerText}>Need help determining if an item is recyclable?</Text>
      <TouchableOpacity>
        <View style={styles.scanButtonContainer}>
          <Button title='scan' color='black' onPress={() => navigation.navigate('Scanner')}></Button>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  scanButtonContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    width: 100,
    height: 50,
  },
  imageContainer: {
    paddingBottom: 50,
    paddingTop: 30
  },
  img: {
    resizeMode: 'cover',
    width: 350,
    height: 300,
  },
  fillerText: {
    fontSize: 19
  }
});
