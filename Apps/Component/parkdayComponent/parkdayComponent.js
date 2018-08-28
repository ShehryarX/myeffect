import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        width:wp("100%"),
        height:hp("100%")
        // justifyContent:'center',
       },
       arrowbtnContainer:{
        position:'relative',
        paddingLeft:wp("2.5%"),
        flexDirection: 'row',
        
      },
      actions:{
          fontSize:wp("5%"),
          color:'#00B0F5',
          marginTop:wp("-4%"),
          marginLeft:wp("13%"),
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
        marginTop:wp("-7.1%"),
        marginLeft:wp("73%")
      },
      line:{
        color:'#00B0F5',
        fontSize:wp("12.3%"),
        marginTop:wp("-6.5%"),
        marginLeft:wp("13%")
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
        position: 'relative',
        marginTop: wp("5%"),
        marginLeft:wp("3%"),
        width:wp("95.4%"),
        height:wp("105%"),
        borderRadius:10,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
    },
    persontxt:{
        color:'#00B0F5',
        marginLeft:wp("5%"),
        fontSize:wp('3%'),
        marginTop:wp("-1%")
    },
    cointtxt:{
        color:'#1B499B',
        marginLeft:wp("85.5%"),
        fontSize:wp("5.5%"),
        marginTop:wp("-9%")
    },
    volunteer:{
        color:'#00B0F5',
        fontSize:wp("5%"),
        marginLeft:wp("36.5%"),
        marginTop:wp("-7%")

        },
        middletxt:{
            color:'#1B499B',
            marginTop:wp('3%'),
            fontSize:wp("5%"),
            marginLeft:wp("17%")
        },
        ptext:{
            color:'#424242',
            marginLeft:wp("7%"),
            fontSize:wp("4%")
        },
        middletxtPointPark:{
            color:'#1B499B',
            marginTop:wp('-1%'),
            fontSize:wp("5%"),
            marginLeft:wp("27%")
        },
        sttxt:{
            color:'#696969',
            fontSize:wp("3.5%"),
            marginTop:wp("2%"),
            marginLeft:wp("15%")
        },
        insideContainer:{
        backgroundColor:'#EDF1F5',
        marginTop:wp("1%"),
        height:wp("20%"),
        },
        insideContainertxt:{
            color:'#1B499B',
            fontSize:wp("3.5%"),
            marginTop:wp("1.5%"),
            marginLeft:wp("37%")
        },
        insidedate:{
            marginTop:wp("1.5%"),
            marginLeft:wp("5%"),
            width:wp("38%"),
            height:wp("7%"),
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        datetxt:{
            fontSize:wp("3.5%"),
            color:'#959595',
            marginLeft:wp("5%"),
            marginTop:wp("1%")
        },
        insidedate2:{
            marginTop:wp("-7%"),
            marginLeft:wp("50%"),
            width:wp("38%"),
            height:wp("7%"),
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        datetxt2:{
            fontSize:wp("3.5%"),
            color:'#1B499B',
            marginLeft:wp("5%"),
            marginTop:wp("1%")
        },
        photoValidation:{
            color:'#6C6C6C',
            marginLeft:wp("25%"),
            marginTop:wp("1%"),
            fontSize:wp("3.5%"),
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
            fontSize:wp("3.5%")
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
                  <Button containerStyle={{marginLeft:wp("-1%"), paddingTop:wp("8.5%"), width:wp("22%"), position:'relative',  borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.actionlist()}
                    style={{color:'#FCDC28'}}>
                  <Image source={require('./img/arrow.png')} style={{width:wp("6%"),height:wp("6%"),marginLeft:wp("4%")}}/>
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:wp("17%"),height:wp('17%'),marginLeft:wp("17%"),marginTop:wp("5%")}} />
                  <Image source={require('./img/bell.png')} style={{width:wp("8%"),height:wp('8%'),marginLeft:wp("30%"),marginTop:wp("8%")}} />
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
                  <Image source={require('./img/parkday.png')} style={{width:wp("21%"),marginTop:wp("7%"),height:wp("21%"),marginLeft:wp("40%"),borderColor:'#00B0F5',borderWidth:3, borderRadius:100}}/>
                  <View style={styles.Conatiner2}>
                  <View>
                  <Image source={require('./img/person.png')} style={{width:wp("8%"),marginTop:wp("4%"),height:wp("8%"),marginLeft:wp("4%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("6.7%"),marginTop:wp("-6.8%"),height:wp("6.7%"),marginLeft:wp("7%")}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  <Image source={require('./img/coin.png')} style={{width:wp("10%"),marginTop:wp("-12%"),height:wp("10%"),marginLeft:wp("82%")}}/>
                  <Text style={styles.cointtxt}>5</Text>
                  <Text style={styles.volunteer}>Volunteer</Text>
                  <Text style={styles.middletxt}>Love your Park Day - Lardner's{'\n'}</Text>
                  <Text style={styles.middletxtPointPark}>Point Park (Tacony)</Text>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('./img/heart.png')} style={{width:wp("10%"),marginTop:wp("-0.1%"),height:wp("6%"),marginLeft:wp("35%")}}/>
                  <Image source={require('./img/eye.png')} style={{width:wp("10%"),marginTop:wp("-0.1%"),height:wp("6%"),marginLeft:wp("0.5%")}}/>
                  <Image source={require('./img/tree.png')} style={{width:wp("8%"),marginTop:wp("-0.1%"),height:wp("7%"),marginLeft:wp("0.5%")}}/>
                  </View>
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
                  <Image source={require('./img/i.png')} style={{width:wp("5%"),marginTop:wp("-5%"),height:wp("5%"),marginLeft:wp("65%")}}/>
                  <Image source={require('./img/bookmark.png')} style={{width:wp("10%"),height:wp("10%"),marginLeft:wp("2%")}}/>
                  <Image source={require('./img/share.png')} style={{width:wp("7%"),marginTop:wp("-9.1%"),height:wp("6.8%"),marginLeft:wp("85%")}}/>
                  <Button containerStyle={{padding:wp("2%"), width:wp("35%"), marginTop:wp("95%"), marginLeft:wp("33%"), position:'absolute', overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.takeaction} onPress={() => Actions.thankyou()}>
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