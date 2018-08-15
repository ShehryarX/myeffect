import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor:'#EDF1F5'
       },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        width: wp('100%'),
        height:wp('30%'),
      },
      loginbtnContainer:{
        flex: 1,
        position: 'absolute',
        marginLeft: moderateScale(40),
      },
      content:{
        backgroundColor:'#EDF1F5',
        paddingTop:wp("5%"),
        paddingLeft:wp("10%"),
        flex:1,
        marginTop:wp("25%"),
        width:wp("100%"),
     //    height:wp("100%"),
        position:'relative',
        overflow:'hidden',
       },
       firsttext:{
           paddingTop:wp("2%"),
           paddingLeft:wp("12%"),
           fontSize:wp("4%"),
           color:'#9EA0A1'
       },
       secondtext:{
         color:'#ACAEAE',
         fontSize:wp("4%"),
         paddingTop:wp("8%"),
         paddingLeft:wp("10%")
       },
       mindright:{
           width:wp('14%'),
           height:wp("14%"),
           marginLeft:wp("10%"),
           marginTop:wp("1%"),
           borderRadius:100,
       },
       container1:{
           width:wp("90%"),
           marginTop:wp("1.8%"),
           marginLeft:wp("-4%"),
           backgroundColor:'#FFFFFF',
           height:wp("17%"),
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
           marginTop:wp("-14%"),
           marginLeft:wp("27%"),
           fontSize:wp("4%")
       },
       containertext2:{
        color:'#1B499B',
        marginTop:wp("-14%"),
        marginLeft:wp("27%"),
        fontSize:wp("4%")
    },
    containertext3:{
        color:'#1B499B',
        marginTop:wp("-14%"),
        marginLeft:wp("27%"),
        fontSize:wp("4%")
    },
       greentick:{
           width:wp("10%"),
           height:wp("10%"),
           marginLeft:wp("75%"),
          marginTop:wp("-12.5%")
       },
       greentick2:{
        width:wp("10%"),
        height:wp("10%"),
        marginLeft:wp("75%"),
       marginTop:wp("-8%")
    },
    greentick3:{
        width:wp("10%"),
        height:wp("10%"),
        marginLeft:wp("75%"),
       marginTop:wp("-8%")
    },
    checkbtn:{
        color:'#ffffff',
        fontSize:wp("3.5%"),
        marginTop:wp("3%"),
        marginLeft:wp("7.5%")
    },
    lasttxt:{
        color:'#9EA0A1',
        marginTop:wp("13%"),
        fontSize:wp("4%"),
        marginLeft:wp("20%")
    },
    skipbtn:{
        color:'#ffffff',
        fontSize:wp("5%"),
        marginTop:wp("2%"),
        marginLeft:wp("13%")
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
            <View style={styles.container}>
            <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.loginbtnContainer}>
                <View style={{marginLeft:wp('-10%')}}>
                  <Button containerStyle={{paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent'}} onPress={() => Actions.grouplist()}
                    style={{color: '#FCDC28',fontSize:wp("5%"),width:wp("20%")}}>
                  <Image source={require('./img/arrow.png')} style={{width:wp("5%"),height:wp("5%"),marginLeft:wp("4%"),marginTop:wp("-1%")}}/>
                  </Button>
                  </View>
                  <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
                  <Image source={require('./img/logo.png')} style={{width: wp('15%'),flex:1, marginTop: wp('-10%')}} />
                  </View>
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
                  <Button containerStyle={{marginTop:wp("4%"), marginLeft:wp("23%"), height:wp('11%'), width:wp("36%"), overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.checkbtn}>
                    <Text style={styles.checkbtn}>Check-In-Now</Text>
                  </Button>
                  <Text style={styles.lasttxt}>Not part of these actions?</Text>
                  <Button containerStyle={{marginTop:wp("4%"), marginLeft:wp("23%"), height:wp('11%'), width:wp("36%"), marginBottom:wp("5%"), overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.skipbtn} onPress={() => Actions.newsfeed()}>
                    <Text style={styles.skipbtn}>Skip</Text>
                  </Button>
                  </View>
            </View>
            </View>
            // </ScrollView>
        )
    }
}
export default CheckingEvent;