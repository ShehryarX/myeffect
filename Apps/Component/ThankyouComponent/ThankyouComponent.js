import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
import Button from 'react-native-button';


const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        // backgroundColor:'#EDF1F5',
        // marginTop:-250,
        // width:360,
        // justifyContent:'center',
       },
       arrowbtnContainer:{
        position:'relative',
        paddingLeft:10,
        flexDirection: 'row',
        
      },
      profiletxt:{
        fontSize:12,
        color:'#00B0F5',
        marginTop:-25,
        marginLeft:50,
    },
    actions:{
        fontSize:18,
        color:'#00B0F5',
        marginTop:-15,
        marginLeft:45,
    },
    line:{
        color:'#00B0F5',
        fontSize:45,
        marginTop:-24,
        marginLeft:45
      },
      challenges:{
        fontSize:18,
        color:'#1B499B',
        marginTop:-59,
        marginLeft:140
      },
      groups:{
        fontSize:18,
        color:'#1B499B',
        marginTop:-24,
        marginLeft:260
      },
      backgroundImage: {
        marginTop:18,
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
      position:'absolute',
      height:750,
      // justifyContent: 'flex-end',
      width:370,
    },
    Conatiner2:{
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        marginTop: 105,
        marginLeft:27,
        width:300,
        height:270,
        borderRadius:10,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
    },
    insideContainertxt:{
        color:'#1B499B',
        marginTop:20,
        fontSize:25,
        marginLeft:85
    },
    insideContainertxt2:{
        color:'#1B499B',
        marginTop:0,
        fontSize:15,
        marginLeft:73
    },
    takeaction:{
        color:'#FFFFFF',
        fontSize:14
    },
    })

class ThankyouComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                   <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => {Alert.alert('You tapped the button!');}}
                    style={{color:'#FCDC28'}}>
                    <View>
                  <Image source={require('./img/profileimg.png')} style={{width:30,marginTop:4,height:30,marginLeft:15,borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                      <Text style={styles.profiletxt}>2400</Text>
                  </View>
                  </Button>
                  <Image source={require('./img/coin.png')} style={{width:13,height:13,marginTop:42}}/>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:60,marginTop:15}} />
                  <Image source={require('./img/bell.png')} style={{width:30,height:30,marginLeft:90,marginTop:33}} />
                  </View>
                  <View>
                     <Text style={styles.actions}>Actions</Text>
                     <Text style={styles.line}>──</Text>
                     <Text style={styles.challenges}>Challenges</Text>
                     <Text style={styles.groups}>Groups</Text>                  
                  </View>
                  <View>
                  <Image source={require('./img/map.png')} style={styles.backgroundImage} />
                  <View style={styles.Conatiner2}>
                  <View>
                     <Text style={styles.insideContainertxt}>Thank you!</Text>
                     <Text style={styles.insideContainertxt2}>Your action is added to{'\n'}        your calendar</Text>
                     <Image source={require('./img/calendar.png')} style={{width:45,height:45,marginLeft:129,marginTop:20}} />
                     <Button containerStyle={{padding:10, width:130, marginTop:10, marginLeft:87, overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.takeaction}>
                    Check Calendar
                  </Button>
                  <Button containerStyle={{padding:10, width:130, marginTop:20, marginLeft:90, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.takeaction}>
                    Back
                  </Button>
                   </View>
                   </View>
                  </View>
            </View>
        )
    }
}
export default ThankyouComponent;