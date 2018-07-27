import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeComponent from './Apps/Component/HomeComponent/HomeComponent' 
import SignupComponent from './Apps/Component/SignupComponent/SignupComponent'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <SignupComponent /> */}
        <HomeComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
