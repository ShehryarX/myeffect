import React,{Component} from 'react';
import { StyleSheet,Modal, Text, View, Alert, Animated, Image,ScrollView,  TouchableHighlight,Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
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
        height:wp("100%"),
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
      },
      groupsBtn:{
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
        middletxtPointPark:{
            color:'#1B499B',
            marginTop:wp('-1%'),
            fontSize:wp("5%"),
            marginLeft:wp("27%")
        },
        ptext:{
            color:'#424242',
            marginLeft:wp("7%"),
            fontSize:wp("4%")
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
        insideContainer2:{
            backgroundColor:'#EDF1F5',
            marginTop:wp("1%"),
            marginLeft:0,
            height:wp("57%"),
            },
            insideContainertxt2:{
                color:'#1B499B',
                marginTop:3,
                marginLeft:125
            },
        insidedate:{
            marginTop:wp("1%"),
            marginLeft:wp("5%"),
            width:wp("38%"),
            height:wp("7%"),
            marginBottom:wp("5%"),
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        datetxt:{
            fontSize:11,
            color:'#959595',
            marginLeft:15,
            marginTop:3
        },
        insidedate2:{
            marginTop:wp("-11.7%"),
            marginLeft:wp("50%"),
            width:wp("38%"),
            height:wp("7%"),
            marginBottom:wp("5%"),
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        datetxt2:{
            fontSize:14,
            color:'#1B499B',
            marginLeft:40,
            marginTop:2,
            height:30
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
            fontSize:wp("3.5%")
        },
        multipleshifttxt:{
            color:'#696969',
            fontSize:wp("3.5%"),
            marginTop:wp("1.5%"),
            marginLeft:wp("31%")
        },
        insideContainerShift:{
            backgroundColor:'#EDF1F5',
            marginTop:wp("1%"),
            height:wp("58%"),
        },
        insideContainertxt2:{
            color:'#1B499B',
            marginTop:wp("1%"),
            fontSize:wp("4%"),
            textAlign:'center'
        },
        shifttxt:{
            fontSize:wp("3.5%"),
            textAlign:'center',
            color:'#959595',
            marginTop:wp("1%")
        },
        datetxt3:{
            fontSize:wp("3.5%"),
            color:'#959595',
            textAlign:'center',
            marginTop:wp("1%")
        },
        datetxt4:{
            fontSize:wp("3.5%"),
            color:'#1B499B',
            marginTop:wp("1%"),
            textAlign:'center'
        },
        selectShifttxtbtn:{
            fontSize:wp("3.5%"),
            color:'#1B499B',
            marginLeft:wp("5%"),
            marginTop:wp("-0.1%"),
            height:wp("6%")
        },
        selectTimebtn:{
            fontSize:wp("3.3%"),
            color:'#1B499B',
            marginLeft:wp("3%"),
            marginTop:wp("0.1"),
        },
        insidedatashift:{
            marginTop:0,
            marginLeft:wp("33%"),
            width:wp("33%"),
            height:wp("5%"),
            marginBottom:wp("3%"),
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        modalContainer:{
            backgroundColor:'#EDF1F5',
            position: 'absolute',
            marginTop: wp("132%"),
            marginLeft:wp("3%"),
            width:wp("95.4%"),
            // opacity:0.7,
            height:wp("30%"),
            borderRadius:10,
            // shadowOffset: {width: 0, height: 13}, 
            // shadowOpacity: 0.5,
            // shadowRadius: 6,
            // // android (Android +5.0)
            // elevation: 5,
        }
    })

class ShiftComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            shiftShow:false,
            timeShow:false,
            signuedupList:false,
            modalVisible: false,
        }
        // this.showShift=this.shiftShow.bind(this)
    }

   showShift = ()=>{
       this.setState({shiftShow:true})
   }

   hideShift = ()=>{
    this.setState({shiftShow:false})
   }

   showTime = ()=>{
       this.setState({timeShow:true,shiftShow:false})
   }

   hideTime = ()=>{
       this.setState({timeShow:false})
   }

   signupedListShow = ()=>{
       this.setState({signuedupList:true,shiftShow:false,timeShow:false})
   }
   setModalVisible = ()=>{
    this.setState({modalVisible: true});
  }
  setModalHide = ()=>{
    this.setState({modalVisible: false});
  }
    render(){
        const {shiftShow, timeShow,signuedupList,modalVisible} = this.state
        return(
            <View style={styles.container}>
                   <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:wp("-1%"), paddingTop:wp("8.5%"), width:wp("22%"), position:'relative', borderRadius:4, backgroundColor: 'transparent'}}  onPress={() => Actions.parkday()}
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
                     <View style={styles.groupsBtn} >
                         <Button onPress={() => Actions.groupslist()}>
                            <Text style={styles.groups}>Groups</Text>
                         </Button>
                     </View>                  
                  </View>
                  <View>
                  <Image source={require('./img/map.png')} style={styles.backgroundImage} />
                  <View>
                  <Image source={require('./img/parkday.png')} style={{width:wp("21%"),marginTop:wp("7%"),height:wp("21%"),marginLeft:wp("40%"),borderColor:'#00B0F5',borderWidth:3, borderRadius:100}}/>
                  <View style={styles.Conatiner2}>
                  <View>
                  <Button onPress={this.signupedListShow}>
                  <View>
                  <Image source={require('./img/person.png')} style={{width:wp("8%"),marginTop:wp("4%"),height:wp("8%"),marginLeft:wp("4%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("6.7%"),marginTop:wp("-6.8%"),height:wp("6.7%"),marginLeft:wp("7%")}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  </View>
                  </Button>
                  <Image source={require('./img/coin.png')} style={{width:wp("10%"),marginTop:wp("-12%"),height:wp("10%"),marginLeft:wp("82%")}}/>
                  <Text style={styles.cointtxt}>5</Text>
                  <Text style={styles.volunteer}>Volunteer</Text>
                  <Text style={styles.middletxt}>Love your Park Day - Lardner's{'\n'}</Text>
                  <Text style={styles.middletxtPointPark}>Point Park (Tacony)</Text>
                  {
                      (shiftShow)?
                      <View style={styles.insideContainerShift}>
                      <Text style={styles.insideContainertxt2}>May 19, 2018</Text>
                      <View style={{marginTop:wp("-5%"),marginLeft:wp("85%")}}>
                      <Button onPress={this.hideShift}>
                      <Image source={require('./img/arrowdown.png')} style={{width:wp("9%"),height:wp("6%")}}/>
                      </Button>
                      </View>
                      <Text style={styles.shifttxt}>Select a Shift</Text>
                        <View style={styles.insidedate}>
                           <Text style={styles.datetxt3}> 9:00 AM - 10:00 AM</Text>
                       </View>
                       <View style={styles.insidedate2}>
                       <Text style={styles.datetxt4}>10:00 AM - 11:00 AM</Text>
                       </View>
                       <View style={styles.insidedate}>
                           <Text style={styles.datetxt4}>11:00 AM - 12:00 PM</Text>
                       </View>
                       <View style={styles.insidedate2}>
                       <Button onPress={this.showTime}>
                       <Text style={styles.datetxt4}> 1:00 PM - 2:00 PM</Text>
                       </Button>
                       </View>
                       <View style={styles.insidedate}>
                           <Text style={styles.datetxt3}>  2:00 PM - 3:00 PM</Text>
                       </View>
                       <View style={styles.insidedate2}>
                       <Text style={styles.datetxt4}>  3:00 PM - 4:00 PM</Text>
                       </View>
                      </View>
                      :
                      <View>
                          {
                              (signuedupList)?
                              <View style={styles.insideContainer2}>
                              <Text style={styles.insideContainertxt}>Signed Up List</Text>
                                <View>
                                    <View>
                                    <Image source={require('./img/user3.png')} style={{width:wp("11%"),height:wp("11%"),marginTop:wp("1%"),marginLeft:wp("3%"),borderRadius:100}}/>
                                    <Text style={{color:'#535454',fontSize:wp("4%"),marginTop:wp("-8%"),marginLeft:wp("16%")}}>Anne Rose</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/jason.png')} style={{width:wp("11%"),height:wp("11%"),marginLeft:wp("50%"),borderRadius:100,marginTop:wp("-7.5%")}}/>
                                    <Text style={{color:'#535454',fontSize:wp("4%"),marginTop:wp("-8%"),marginLeft:wp("63%")}}>Jason Peterson</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/tiana.png')} style={{width:wp("11%"),height:wp("11%"),marginTop:wp("7%"),marginLeft:wp("3%"),borderRadius:100}}/>
                                    <Text style={{color:'#535454',fontSize:wp("4%"),marginTop:wp("-8%"),marginLeft:wp("16%")}}>Tiana O'Neill</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/user3.png')} style={{width:wp("11%"),height:wp("11%"),marginLeft:wp("50%"),borderRadius:100,marginTop:wp("-7.5%")}}/>
                                    <Text style={{color:'#535454',fontSize:wp("4%"),marginTop:wp("-8%"),marginLeft:wp("63%")}}>Anne Rose</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/peter.png')} style={{width:wp("11%"),height:wp("11%"),marginTop:wp("7%"),marginLeft:wp("3%"),borderRadius:100}}/>
                                    <Text style={{color:'#535454',fontSize:wp("4%"),marginTop:wp("-8%"),marginLeft:wp("16%")}}>Peter Lou</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/Mohammad.png')} style={{width:wp("11%"),height:wp("11%"),marginLeft:wp("50%"),borderRadius:100,marginTop:wp("-7.5%")}}/>
                                    <Text style={{color:'#535454',fontSize:wp("4%"),marginTop:wp("-8%"),marginLeft:wp("63%")}}>Mohammad M.</Text>
                                    </View>
                                </View>
                              </View>
                              :
                              <View>
                              <View style={{flexDirection:'row'}}>
                              <Image source={require('./img/heart.png')} style={{width:wp("10%"),marginTop:wp("-0.1%"),height:wp("6%"),marginLeft:wp("35%")}}/>
                              <Image source={require('./img/eye.png')} style={{width:wp("10%"),marginTop:wp("-0.1%"),height:wp("6%"),marginLeft:wp("0.5%")}}/>
                              <Image source={require('./img/tree.png')} style={{width:wp("8%"),marginTop:wp("-0.1%"),height:wp("7%"),marginLeft:wp("0.5%")}}/>
                              </View>
                              <Text style={styles.ptext}>Join us at Lardner's Point Park  for a riverside{'\n'}    park and trail cleanup. We'll be doing trail{'\n'}  maintenance, trash collection, planting and{'\n'}                                     more! </Text>
                              <Text style={styles.sttxt}>5202 Levick St, Philadelphia, PA 19135, USA</Text>
                              <View style={styles.insideContainer}>
                               <Text style={styles.insideContainertxt}>May 19, 2018</Text>
                               <Text style={styles.multipleshifttxt}>Multiple Shifts Available</Text>
                               <View style={styles.insidedatashift}>
                               {
                                   (timeShow)?
                                   <Button onPress={this.showTime}>
                                   <Text style={styles.selectTimebtn}>1:00 PM - 2:00PM</Text>
                                   </Button>
                                   :
                                   <Button onPress={this.showShift}>
                                   <Text style={styles.selectShifttxtbtn}>Select a Shift</Text>
                                    </Button>
                               }
                               </View>
                              </View>
                              </View>
                          }
                     
                      </View>
                    // <Text style={styles.photoValidation}>Photo Validation Required</Text>
                    // <Image source={require('./img/i.png')} style={{width:17,marginTop:-16,height:17,marginLeft:235}}/>
                  }

                  <Image source={require('./img/bookmark.png')} style={{width:wp("10%"),marginTop:wp("5%"),height:wp("10%"),marginLeft:wp("2%")}}/>
                  <Modal
          animationType="slide"
          transparent={true}
          style={styles.modal}
          visible={this.state.modalVisible}
         >
          <View style={styles.modalContainer}>
          <Image source={require('./img/facebook.png')} style={{width:wp("12%"),marginTop:wp("10%"),height:wp("12%"),marginLeft:wp("30%")}}/>
          <Image source={require('./img/twitter.png')} style={{width:wp("12%"),marginTop:wp("-12%"),height:wp("12%"),marginLeft:wp("43.4%")}}/>
          <Image source={require('./img/linkedin.png')} style={{width:wp("13%"),marginTop:wp("-12%"),height:wp("13%"),marginLeft:wp("57%")}}/>
          <Image source={require('./img/mail.png')} style={{width:wp("12%"),marginTop:wp("-12%"),height:wp("12%"),marginLeft:wp("70%")}}/>
          <View style={{marginLeft:wp("85%"),marginTop:wp("-11%")}}> 
          <Button style={{width:25,height:25,marginTop:-34}} onPress={this.setModalHide}>
              <Image source={require('./img/share.png')}/>   
            </Button>
            </View>
          </View>
          </Modal>
          <View style={{marginTop:-27}}>
              <Button onPress={this.setModalVisible}>
                  <Image source={require('./img/share.png')} style={{width:wp("7%"),height:wp("6.8%"),marginLeft:wp("85%")}}/> 
                </Button>
                    </View>
                  <Button containerStyle={{padding:wp("2%"), width:wp("35%"), marginTop:wp("93%"), marginLeft:wp("33%"), position:'absolute', overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.takeaction}  onPress={() => Actions.thankyou()}>
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
export default ShiftComponent;