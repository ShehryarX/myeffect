import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
import Button from 'react-native-button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        width:wp("100%"),
        height:wp("100%",)
       },
       arrowbtnContainer:{
        position:'relative',
        paddingLeft:wp("2%"),
        flexDirection: 'row',
      },
      profiletxt:{
        fontSize:12,
        color:'#00B0F5',
        marginTop:-25,
        marginLeft:50,
    },
    actions:{
        fontSize:wp("5%"),
        color:'#00B0F5',
        marginTop:wp("-4%"),
        marginLeft:wp("13%"),
    },
    line:{
        color:'#00B0F5',
        fontSize:wp("12.3%"),
        marginTop:wp("-6.5%"),
        marginLeft:wp("13%")
      },
      challenges:{
        fontSize:wp("5%"),
        color:'#1B499B',
        marginTop:wp("-16%"),
        marginLeft:wp("39%")
      },
      groups:{
        fontSize:wp("5%"),
        color:'#1B499B',
      },
      groupsBtn:{
        marginTop:wp("-7.1%"),
        marginLeft:wp("73%")
      },
      backgroundImage: {
        marginTop:wp("6%"),
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        height:wp("140%"),
        // justifyContent: 'flex-end',
        width:wp("100%"),
    },
    Conatiner2:{
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        marginTop: wp("30%"),
        marginLeft:wp("8%"),
        width:wp("85%"),
        height:wp("75%"),
        borderRadius:10,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
    },
    insideContainertxt:{
        color:'#1B499B',
        marginTop:wp("4%"),
        fontSize:wp("7%"),
        marginLeft:wp("25%")
    },
    insideContainertxt2:{
        color:'#1B499B',
        fontSize:wp("5%"),
        marginLeft:wp("18%")
    },
    takeaction:{
        color:'white',
        fontSize:wp("4.1%")
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
                  <Button containerStyle={{marginLeft:wp("-1%"), paddingTop:wp("8%"), width:wp("22%"), position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => {Alert.alert('You tapped the button!');}}
                    style={{color:'#FCDC28'}}>
                    <View>
                  <Image source={require('./img/profileimg.png')} style={{width:wp("8%"),marginTop:wp("1%"),height:wp("8%"),marginLeft:wp("4%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                      <Text style={styles.profiletxt}>2400</Text>
                  </View>
                  </Button>
                  <Image source={require('./img/coin.png')} style={{width:wp("4%"),height:wp("4%"),marginTop:wp("11%")}}/>
                  <Image source={require('./img/logo.png')} style={{width:wp("18.5%"),height:wp("18.5%"),marginLeft:wp("18%"),marginTop:wp("5%")}} />
                  <Image source={require('./img/bell.png')} style={{width:wp("9%"),height:wp("9%"),marginLeft:wp("25%"),marginTop:wp("8%")}} />
                  </View>
                  <View>
                     <Text style={styles.actions}>Actions</Text>
                     <Text style={styles.line}>──</Text>
                     <Text style={styles.challenges}>Challenges</Text>
                     <View style={styles.groupsBtn} >
                         <Button onPress={() => Actions.groupslist()}>
                            <Text style={styles.groups}>Groups</Text>
                         </Button>
                     </View>                  
                  </View>
                  <View>
                  <Image source={require('./img/map.png')} style={styles.backgroundImage} />
                  <View style={styles.Conatiner2}>
                  <View>
                     <Text style={styles.insideContainertxt}>Thank you!</Text>
                     <Text style={styles.insideContainertxt2}>Your action is added to{'\n'}        your calendar</Text>
                     <Image source={require('./img/calendar.png')} style={{width:wp("12%"),height:wp("12%"),marginLeft:wp("36%"),marginTop:20}} />
                     <Button containerStyle={{padding:wp("2%"), width:wp("35%"), marginTop:wp("5%"), marginLeft:wp("25%"), overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.takeaction}>
                    Check Calendar
                  </Button>
                  <Button containerStyle={{padding:wp("2%"), width:wp("35%"), marginTop:wp("4%"), marginLeft:wp("25%%"), overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.takeaction}>
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