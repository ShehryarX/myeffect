import React,{Component} from 'react';
import { StyleSheet,Modal, Text, View, Alert, Animated, Image,ScrollView, TouchableHighlight,TouchableOpacity,Dimensions, KeyboardAvoidingView,TextInput,TouchableWithoutFeedback} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button' // Radio Button
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor:"white",
       },
       arrowbtnContainer:{
        position:'relative',
        paddingLeft:wp("2%"),
        flexDirection: 'row',
        
      },
      profiletxt:{
        fontSize:wp("3%"),
        color:'#00B0F5',
        marginTop:wp("-6%"),
        marginLeft:wp("14%"),
      },
      actions:{
        fontSize:wp("5%"),
        color:'#1B499B',
    },
    actionsBtn:{
        marginTop:wp("-1%"),
        marginLeft:wp("13%"),
    },
    line:{
        color:'#00B0F5',
        fontSize:20,
        marginTop:0,
        marginLeft:15
      },
      challenges:{
        fontSize:wp("5%"),
        color:'#1B499B',
        marginTop:wp("-7"),
        marginLeft:wp("40%")
      },
      groups:{
        fontSize:wp("5%"),
        color:'#00B0F5',
        marginTop:wp("-7%"),
        marginLeft:wp("74%")
      },
      line2:{
        color:'#EDF1F5',
        marginTop:wp("-6%"),
        fontSize:wp("3%")
      },
      person:{
        marginTop:wp("10%"),
        marginLeft:wp("3%"),
        marginBottom:wp("1.5%")
    },
    persontxt:{
        color:'#00B0F5',
        fontSize:wp("4.3%"),
        marginLeft:wp("1.7%")
    },
    nopoverty:{
        marginLeft:wp("17.4%"),
        marginTop:wp("10%")
    },
    nopovertytxt:{
        color:'#FE001C',
        fontSize:wp("3.3%"),
        marginLeft:wp("1.7%")
    },
    profileheading:{
        fontSize:wp("5%"),
        color:'#1B499B',
        marginTop:wp("2%"),
        marginLeft:wp("21%")
    },
    groupsFounder:{
        color:'#696969',
        marginTop:wp("0.2%"),
        marginLeft:wp("29%"),
        fontSize:wp("4.1%")
    },
    ourmission:{
        marginTop:wp("3.2%"),
        marginLeft:wp("11.5%"),
        fontSize:wp("4.1%")
    },
    injusticefacing:{
        marginTop:wp("0.2%"),
        marginLeft:wp("13%"),
        fontSize:wp("4.1%")
    },
    youthother:{
        marginTop:wp("0.2%"),
        marginLeft:wp("15%"),
        fontSize:wp("4.1%")
    },
    linktxt:{
        color:'#00B0F5',
        marginTop:wp("0.2%"),
        marginLeft:wp("29%"),
        fontSize:wp("4.1%")
    },
    nextBtn:{
        color:'#1B499B',
        fontSize:wp("5%"),
        marginTop:wp("0.6%"),
        marginLeft:wp("12%")
      },
      upcomingactions:{
          backgroundColor:'#F8F8F8'
      },
      suggestedtxt:{
        color:'#205BA3',
        paddingLeft:wp("5%"),
        marginTop:wp("2%"),
        fontSize:wp("4%")
    },
    seemore:{
        color:'#205BA3',
        fontSize:wp("4%")
    },
    touchableseemore:{
      paddingLeft:wp("80%"),
      marginTop:wp("-5.5%"),
    },
    })

class JoinHappyHippieGroup extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){

        return(
            <ScrollView style={styles.container}>
            {/* <View style={styles.container}> */}
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
                  <View style={styles.actionsBtn} >
                         <Button onPress={() => Actions.actionlist()}>
                            <Text style={styles.actions}>Actions</Text>
                         </Button>
                    </View>
                     <View>
                     <Text style={styles.challenges}>Challenges</Text>
                     </View>
                     <View>
                     <Text style={styles.groups}>Groups</Text>
                     <Text style={{marginLeft:wp("73.2%"),color:'#00B0F5',fontSize:wp("12.5%"),marginTop:wp('-7%')}}>──</Text>
                     </View>  
                     <Text style={styles.line2}>────────────────────────────────────────────────</Text>               
                  </View>
                  <View>
                  <View style={{flex:1,flexDirection:'row'}}>
                  <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:wp("9%"),marginTop:wp("1.2%"),height:wp("9%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("9%"),marginTop:wp("-7.2%"),height:wp("5.8%"),marginLeft:wp("3.9%")}}/>
                  <Text style={styles.persontxt}>110K</Text>
                  </View>
                  <Image source={require('./img/happyhippie.png')}  style={{width:wp("25%"),marginTop:wp("1.5%"),height:wp("25%"),marginLeft:wp("20%"),borderColor:'#00B0F5', borderRadius:100}}/> 
                  <Image source={require('./img/happyhippieprofile.png')}  style={{width:wp("8%"),marginTop:wp("16%"),height:wp("9%"),marginLeft:wp("-4.1%"),borderColor:'#00B0F5', borderRadius:100}}/> 
                  <View style={styles.nopoverty}>
                  <Image source={require('./img/noPoverty.png')} style={{width:wp("14%"),marginTop:wp("1.2%"),height:wp("6%"),marginLeft:wp("1.6%")}}/>
                  <Text style={styles.nopovertytxt}>No Poverty</Text>
                  </View>
                  </View>
                  <View style={{flex:1,flexDirection:'row'}}>
                  <Text style={styles.profileheading}>Happy Hippie Foundation</Text>
                  <Image source={require('./img/profiletick.png')}  style={{width:wp("4.5%"),marginTop:wp("3.9%"),height:wp("4.5%"),marginLeft:wp("2.5%"), borderRadius:100}}/>
                  </View>
                  <Text style={styles.groupsFounder}>Founded by Miley Cyrus</Text>
                  <Text style={styles.ourmission}>Our mission is to rally young people to fight</Text>
                  <Text style={styles.injusticefacing}>injustice facing homeless youth, LGTBTQ</Text>
                  <Text style={styles.youthother}>youth and other vulnerable population</Text>
                  <Text style={styles.linktxt}>www.happyhippie.org</Text>
                  <View>
                  <Button containerStyle={{marginTop:wp("4%"), marginLeft:wp("31%"), height:wp('9%'), width:wp("35%"), marginBottom:wp("5%"), overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.nextBtn} onPress={() => Actions.HappyHippieFoundation()}>
                    <Text style={styles.nextBtn}>Join</Text>
                  </Button>
                       </View>
                  </View>
                  <View style={styles.upcomingactions}>
                  <Text style={styles.suggestedtxt}>Upcoming Actions</Text>
                  <TouchableOpacity style={styles.touchableseemore} onPress={() => Actions.actionlist()}>
                  <Text style={styles.seemore}>See More</Text>
                  </TouchableOpacity>
                  {/* <Row dial={1} flex> */}
                        <View >
                        <TouchableOpacity onPress={() => Actions.shiftcomponent()}>
                        <Image source={require('./img/parkday.png')} style={{width:wp("15%"),marginTop:wp("2%"),height:wp("15%"),marginLeft:wp("5%"), borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:wp("6%"),height:wp("6%"),marginTop:wp("-7.5%"),marginLeft:wp("17%")}}/>
                        <Text style={{color:'#1D54A0',fontSize:wp('4%'), marginTop:wp("-6"),marginLeft:wp("19%")}}>5</Text>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("6%"),marginTop:wp("3%")}}>Love your{'\n'}Park Day</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Image source={require('./img/LGBTQ.png')} style={{width:wp("15%"),marginTop:wp("-24"),height:wp("15%"),marginLeft:wp("28%"), borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:wp("6%"),height:wp("6%"),marginTop:wp("-7.5%"),marginLeft:wp("39%")}}/>
                        <Text style={{color:'#1D54A0',marginTop:wp("-6%"),fontSize:wp('4%'),marginLeft:wp("41.3%")}}>2</Text>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("26%"),marginTop:wp("3%")}}>Happy Hippie{'\n'}  LGBTQ run</Text>
                        </View>
                        <View>
                        <Image source={require('./img/code.png')} style={{width:wp("15%"),marginTop:wp("-24.5%"),height:wp("15%"),marginLeft:wp("55%"), borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:wp("6%"),height:wp("6%"),marginTop:wp("-7%"),marginLeft:wp("66%")}}/>
                        <Text style={{color:'#1D54A0',marginTop:wp("-6%"),fontSize:wp('4%'),marginLeft:wp("68%")}}>5</Text>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("51%"),marginTop:wp("3%")}}>Code Workshop{'\n'}    Volunteer</Text>
                        </View>
                        <View>
                        <Image source={require('./img/dog.png')} style={{width:wp("15%"),marginTop:wp("-25%"),height:wp("15%"),marginLeft:wp("80%"), borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:wp("6%"),height:wp("6%"),marginTop:wp("-7%"),marginLeft:wp("90.5%")}}/>
                        <Text style={{color:'#1D54A0',marginTop:wp("-6%"),fontSize:wp('4%'),marginLeft:wp("92.5%")}}>5</Text>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("76.5%"),marginTop:wp("3%")}}>Dog Rescue &{'\n'}Rehabbilitation</Text>
                        </View>
                  </View>
                  <View style={styles.upcomingactions}>
                  <Text style={styles.suggestedtxt}>Impact</Text>
                  <TouchableOpacity style={styles.touchableseemore} onPress={() => Actions.actionlist()}>
                  <Text style={styles.seemore}>View All</Text>
                  </TouchableOpacity>
                      <View style={{flex:1,flexDirection:'row'}}>
                        <View >
                        <TouchableOpacity onPress={() => Actions.shiftcomponent()}>
                        <Image source={require('./img/volounteering.png')} style={{width:wp("15%"),marginTop:wp("2%"),height:wp("15%"),marginLeft:wp("5%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("6%"),marginTop:wp("3%")}}>volounteering{'\n'}  200hrs</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Image source={require('./img/orginization.png')} style={{width:wp("15%"),height:wp("15%"),marginTop:wp("2%"),marginLeft:wp("6.5%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("5%"),marginTop:wp("3%")}}>Organization{'\n'}   43hrs</Text>
                        </View>
                        <View>
                        <Image source={require('./img/fundraising.png')} style={{width:wp("15%"),height:wp("15%"),marginLeft:wp("6.5%"),marginTop:wp("2%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("5%"),marginTop:wp("3%")}}>Fund Raising{'\n'}    43hrs</Text>
                        </View>
                        <View>
                        <Image source={require('./img/donation.png')} style={{width:wp("15%"),marginTop:wp("2%"),height:wp("15%"),marginLeft:wp("6%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("5%"),marginTop:wp("3%")}}>Donation &{'\n'}  43hrs</Text>
                        </View>
                        </View>
                  </View>
             </ScrollView>
        )
    }
}
export default JoinHappyHippieGroup;