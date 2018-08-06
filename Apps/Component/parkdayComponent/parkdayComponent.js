import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
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
       arrowbtnContainer:{
        position:'relative',
        paddingLeft:10,
        flexDirection: 'row',
        
      },
      actions:{
          fontSize:18,
          color:'#00B0F5',
          marginTop:-15,
          marginLeft:45,
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
      line:{
        color:'#00B0F5',
        fontSize:45,
        marginTop:-24,
        marginLeft:45
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
        marginLeft:10,
        width:339,
        height:380,
        borderRadius:10,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
    },
    persontxt:{
        color:'#00B0F5',
        marginLeft:18,
        fontSize:12,
        marginTop:-5
    },
    cointtxt:{
        color:'#1B499B',
        marginLeft:302,
        fontSize:22,
        marginTop:-35
    },
    volunteer:{
        color:'#00B0F5',
        fontSize:17,
        marginLeft:130,
        marginTop:-25

        },
        middletxt:{
            color:'#1B499B',
            marginTop:20,
            fontSize:16,
            marginLeft:60
        },
        ptext:{
            color:'#424242',
            marginLeft:38,
            fontSize:13
        },
        sttxt:{
            color:'#696969',
            fontSize:13,
            marginTop:5,
            marginLeft:47
        },
        insideContainer:{
        backgroundColor:'#EDF1F5',
        marginTop:4,
        marginLeft:0,
        height:80,
        },
        insideContainertxt:{
            color:'#1B499B',
            marginTop:3,
            marginLeft:125
        },
        insidedate:{
            marginTop:5,
            marginLeft:20,
            width:140,
            height:25,
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        datetxt:{
            fontSize:12,
            color:'#959595',
            marginLeft:15,
            marginTop:3
        },
        insidedate2:{
            marginTop:-25,
            marginLeft:180,
            width:140,
            height:25,
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        datetxt2:{
            fontSize:12,
            color:'#1B499B',
            marginLeft:20,
            marginTop:3
        },
        photoValidation:{
            color:'#6C6C6C',
            marginLeft:96,
            marginTop:5,
            fontSize:12,
        },
        i:{
            color:'#FFFFFF',
            width:20,
            height:20,
            backgroundColor:'#C6C6C6',
            borderRadius:100
        },
        takeaction:{
            color:'#1B499B',
            fontSize:12
        },
    })

class ParkdayComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedTab:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                   <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:-5, paddingTop:30, width:80, marginTop:5, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => {Alert.alert('You tapped the button!');}}
                    style={{color:'#FCDC28'}}>
                  <Image source={require('./img/arrow.png')} style={{width:20,height:26,marginLeft:15}}/>
                  </Button>
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
                  <View>
                  <Image source={require('./img/parkday.png')} style={{width:75,marginTop:23,height:75,marginLeft:135,borderColor:'#00B0F5',borderWidth:3, borderRadius:100}}/>
                  <View style={styles.Conatiner2}>
                  <View>
                  <Image source={require('./img/person.png')} style={{width:28,marginTop:10,height:28,marginLeft:15}}/>
                  <Image source={require('./img/person.png')} style={{width:25,marginTop:-25,height:23,marginLeft:26}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  <Image source={require('./img/coin.png')} style={{width:35,marginTop:-35,height:35,marginLeft:290}}/>
                  <Text style={styles.cointtxt}>5</Text>
                  <Text style={styles.volunteer}>Volunteer</Text>
                  <Text style={styles.middletxt}>Love your Park Day - Lardner's{'\n'}          Point Park (Tacony)</Text>
                  <Image source={require('./img/heart.png')} style={{width:20,marginTop:-0,height:20,marginLeft:120}}/>
                  <Image source={require('./img/eye.png')} style={{width:30,marginTop:-18,height:18,marginLeft:150}}/>
                  <Image source={require('./img/tree.png')} style={{width:20,marginTop:-20,height:20,marginLeft:190}}/>
                  <Text style={styles.ptext}>Join us at Lardner's Point Park  for a riverside{'\n'}    park and trail cleanup. We'll be doing trail{'\n'}  maintenance, trash collection, planting and{'\n'}                                     more! </Text>
                  <Text style={styles.sttxt}>5202 Levick St, Philadelphia, PA 19135, USA</Text>
                  <View style={styles.insideContainer}>
                   <Text style={styles.insideContainertxt}>May 19, 2018</Text>
                   <View style={styles.insidedate}>
                       <Text style={styles.datetxt}>12:00 PM - 3:00 PM</Text>
                   </View>
                   <View style={styles.insidedate2}>
                   <Text style={styles.datetxt2}>3:00 PM - 6:00 PM</Text>
                   </View>
                  </View>
                  <Text style={styles.photoValidation}>Photo Validation Required</Text>
                  <Image source={require('./img/i.png')} style={{width:17,marginTop:-16,height:17,marginLeft:235}}/>
                  <Image source={require('./img/bookmark.png')} style={{width:35,marginTop:0,height:35,marginLeft:10}}/>
                  <Image source={require('./img/share.png')} style={{width:25,marginTop:-32,height:25,marginLeft:300}}/>
                  <Button containerStyle={{padding:10, width:125, marginTop:330, marginLeft:110, position:'absolute', overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.takeaction} onPress={() => Actions.thankyou()}>
                    Take Action
                  </Button>
                  </View>
                  </View>
                  
                  </View>
                  </View>
            </View>
        )
    }
}
export default ParkdayComponent;