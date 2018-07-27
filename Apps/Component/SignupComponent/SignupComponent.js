import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,  Dimensions, ScrollView} from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        backgroundColor:'#EDF1F5',
        // marginTop:-250,
        // width:360,
        // justifyContent:'center',
       },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        // marginTop:10,
        height:300,
        // justifyContent: 'flex-end',
        // width:370,
      },
      loginbtnContainer:{
        position:'relative',
        paddingLeft:10,
        width:250,
        flexDirection: 'row',
      },
      textView: {
        // paddingTop: 80,
        // width: 100,
        // height: 100,
        // backgroundColor: '#ffffff',
      },
       text:{
        marginTop:50,
        marginLeft:60,
        fontSize:16,
        color: '#ffffff',
       }
  });

export default class SignupComponent extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.loginbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => {Alert.alert('You tapped the button!');}}
                    style={{color:'#FCDC28'}}>
                    Login
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:70,marginTop:15}} />
                  </View>
                  <View styles={styles.textView}>
                     <Text style={styles.text}>Join MyEffect to discover, track{"\n"}and share your effect in the world</Text>
                  </View>
            </View>
        )
    }
}