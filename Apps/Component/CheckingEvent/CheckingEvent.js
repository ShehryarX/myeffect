import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux'; // New code

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        // backgroundColor:'#EDF1F5',
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
      arrowbtnContainer:{
        position:'relative',
        paddingLeft:10,
        width:250,
        flexDirection: 'row',
      },
      content:{
        marginTop:0,
        backgroundColor:'#EDF1F5',
        width:500,
        // height:750,
        position:'relative',
       flex:1,
    //    width: 400,
       paddingTop:10,
       paddingLeft:38,
       },
       firsttext:{
           paddingTop:10,
           paddingLeft:40,
           color:'#9EA0A1'
       },
       secondtext:{
         color:'#ACAEAE',
         paddingTop:30,
         paddingLeft:30
       },
       mindright:{
           width:45,
           height:45,
           marginLeft:30,
           marginTop:6,
           borderRadius:100,
       },
       container1:{
           width:325,
           marginTop:10,
           marginLeft:-20,
           backgroundColor:'#FFFFFF',
           height:60,
           shadowOffset: {width: 0, height: 5}, 
           shadowOpacity: 0.5,
           shadowRadius: 4,
           // android (Android +5.0)
           elevation: 5,
               // margin: 10
            borderRadius:10,
            // marginBottom:10,
       },
       containertext1:{
           color:'#1B499B',
           marginTop:-47,
           marginLeft:100,
       },
       containertext2:{
        color:'#1B499B',
        marginTop:-41,
        marginLeft:100,
    },
    containertext3:{
        color:'#1B499B',
        marginTop:-41,
        marginLeft:100,
    },
       greentick:{
           width:35,
           height:35,
           marginLeft:270,
          marginTop:-43
       },
       greentick2:{
        width:35,
        height:35,
        marginLeft:270,
       marginTop:-33
    },
    greentick3:{
        width:35,
        height:35,
        marginLeft:270,
       marginTop:-33
    },
    checkbtn:{
        color:'#ffffff',
        fontSize:13
    },
    lasttxt:{
        color:'#9EA0A1',
        marginTop:50,
        marginLeft:62
    },
    skipbtn:{
        color:'#ffffff',
    },
    })

class CheckingEvent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            // <ScrollView>
            <View style={styles.container}>
            <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.student()}
                    style={{color:'#FCDC28'}}>
                  <Image source={require('./img/arrow.png')} style={{width:30,height:20,marginLeft:15}}/>
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:70,marginTop:15}} />
                  </View>
                  <View style={styles.content}>
                  <Text style={styles.firsttext}>Are you Checking into an event?</Text>
                  <Text style={styles.secondtext}>Quick check in for actions near you</Text>
                  <View style={styles.container1}>
                      <View>
                      <Image source={require('./img/mindright.png')} style={styles.mindright}/>
                      <Text style={styles.containertext1}>Virtual Volunteering{"\n"}with MindRight{"\n"}<Text style={{color:'#00B0F5'}}>3:00 PM-5:00 PM</Text></Text>
                      <Image source={require('./img/greentick.png')} style={styles.greentick}/>
                      </View>
                  </View>
                  <View style={styles.container1}>
                      <View>
                      <Image source={require('./img/mindright.png')} style={styles.mindright}/>
                      <Text style={styles.containertext2}>Love your Park Day{"\n"}<Text style={{color:'#00B0F5'}}>12:00 PM-3:00 PM</Text></Text>
                      <Image source={require('./img/tick.png')} style={styles.greentick2}/>
                      </View>
                  </View>
                  <View style={styles.container1}>
                      <View>
                      <Image source={require('./img/parkday.png')} style={styles.mindright}/>
                      <Text style={styles.containertext3}>Mitzwag Food Project{"\n"}<Text style={{color:'#00B0F5'}}>5:00 PM-7:00 PM</Text></Text>
                      <Image source={require('./img/tick.png')} style={styles.greentick3}/>
                      </View>
                  </View>
                  <Button containerStyle={{padding:10, width:120, marginTop:20, marginLeft:78, overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.checkbtn}>
                    Check-In-Now
                  </Button>
                  <Text style={styles.lasttxt}>Not part of these actions?</Text>
                  <Button containerStyle={{padding:10, width:120, marginTop:20, marginLeft:78, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.skipbtn} onPress={() => Actions.newsfeed()}>
                    Skip
                  </Button>
                  </View>
            </View>
            // </ScrollView>
        )
    }
}
export default CheckingEvent;