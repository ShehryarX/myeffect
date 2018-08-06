import React,{Component} from 'react';
import { StyleSheet,Modal, Text, View, Alert, Animated, Image,ScrollView,  TouchableHighlight,Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
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
        insideContainer2:{
            backgroundColor:'#EDF1F5',
            marginTop:4,
            marginLeft:0,
            height:205,
            },
            insideContainertxt2:{
                color:'#1B499B',
                marginTop:3,
                marginLeft:125
            },
        insidedate:{
            marginTop:5,
            marginLeft:20,
            width:140,
            height:25,
            marginBottom:15,
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
            marginTop:-40,
            marginLeft:180,
            width:140,
            height:25,
            marginBottom:15,
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
            fontSize:12
        },
        multipleshifttxt:{
            color:'#696969',
            fontSize:12,
            marginLeft:105
        },
        insideContainerShift:{
            backgroundColor:'#EDF1F5',
            marginTop:4,
            marginLeft:0,
            height:200,
        },
        insideContainertxt2:{
            color:'#1B499B',
            marginTop:3,
            marginLeft:125
        },
        shifttxt:{
            fontSize:12,
            color:'#959595',
            marginLeft:130,
            marginTop:10
        },
        datetxt3:{
            fontSize:12,
            color:'#959595',
            marginLeft:15,
            marginTop:3
        },
        datetxt4:{
            fontSize:12,
            color:'#1B499B',
            marginLeft:20,
            marginTop:3
        },
        selectShifttxtbtn:{
            fontSize:13,
            color:'#1B499B',
            marginLeft:35,
            marginTop:2,
            height:30
        },
        selectTimebtn:{
            fontSize:13,
            color:'#1B499B',
            marginLeft:20,
            marginTop:2,
            height:30
        },
        insidedatashift:{
            marginTop:0,
            marginLeft:100,
            width:140,
            height:25,
            marginBottom:15,
            backgroundColor:'#FFFFFF',
            borderRadius:20
        },
        modalContainer:{
            backgroundColor:'#EDF1F5',
            position: 'absolute',
            marginTop: 470,
            marginLeft:10,
            width:339,
            // opacity:0.7,
            height:110,
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
                  <Button containerStyle={{marginLeft:-5, paddingTop:30, width:80, marginTop:5, position:'relative', borderRadius:4, backgroundColor: 'transparent'}}  onPress={() => Actions.parkday()}
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
                  <Button onPress={this.signupedListShow}>
                  <View>
                  <Image source={require('./img/person.png')} style={{width:28,marginTop:10,height:28,marginLeft:15}}/>
                  <Image source={require('./img/person.png')} style={{width:25,marginTop:-25,height:23,marginLeft:26}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  </View>
                  </Button>
                  <Image source={require('./img/coin.png')} style={{width:35,marginTop:-35,height:35,marginLeft:290}}/>
                  <Text style={styles.cointtxt}>5</Text>
                  <Text style={styles.volunteer}>Volunteer</Text>
                  <Text style={styles.middletxt}>Love your Park Day - Lardner's{'\n'}          Point Park (Tacony)</Text>
                  {
                      (shiftShow)?
                      <View style={styles.insideContainerShift}>
                      <Text style={styles.insideContainertxt2}>May 19, 2018</Text>
                      <View style={{marginTop:-18,marginLeft:295}}>
                      <Button onPress={this.hideShift}>
                      <Image source={require('./img/arrowdown.png')} style={{width:30,height:18}}/>
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
                                    <Image source={require('./img/user3.png')} style={{width:40,height:40,marginTop:5,marginLeft:10,borderRadius:100}}/>
                                    <Text style={{color:'#535454',fontSize:14,marginTop:-30,marginLeft:60}}>Anne Rose</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/jason.png')} style={{width:40,height:40,marginLeft:180,borderRadius:100,marginTop:-28}}/>
                                    <Text style={{color:'#535454',fontSize:14,marginTop:-32,marginLeft:230}}>Jason Peterson</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/tiana.png')} style={{width:40,height:40,marginTop:30,marginLeft:10,borderRadius:100}}/>
                                    <Text style={{color:'#535454',fontSize:14,marginTop:-30,marginLeft:60}}>Tiana O'Neill</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/user3.png')} style={{width:40,height:40,marginLeft:180,borderRadius:100,marginTop:-28}}/>
                                    <Text style={{color:'#535454',fontSize:14,marginTop:-32,marginLeft:230}}>Anne Rose</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/peter.png')} style={{width:40,height:40,marginTop:30,marginLeft:10,borderRadius:100}}/>
                                    <Text style={{color:'#535454',fontSize:14,marginTop:-30,marginLeft:60}}>Peter Lou</Text>
                                    </View>
                                    <View>
                                    <Image source={require('./img/Mohammad.png')} style={{width:40,height:40,marginLeft:180,borderRadius:100,marginTop:-28}}/>
                                    <Text style={{color:'#535454',fontSize:14,marginTop:-32,marginLeft:230}}>Mohammad M.</Text>
                                    </View>
                                </View>
                              </View>
                              :
                              <View>
                              <Image source={require('./img/heart.png')} style={{width:20,marginTop:-0,height:20,marginLeft:120}}/>
                              <Image source={require('./img/eye.png')} style={{width:30,marginTop:-18,height:18,marginLeft:150}}/>
                              <Image source={require('./img/tree.png')} style={{width:20,marginTop:-20,height:20,marginLeft:190}}/>
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

                  <Image source={require('./img/bookmark.png')} style={{width:35,marginTop:20,height:35,marginLeft:10}}/>
                  <Modal
          animationType="slide"
          transparent={true}
          style={styles.modal}
          visible={this.state.modalVisible}
         >
          <View style={styles.modalContainer}>
          <Image source={require('./img/facebook.png')} style={{width:45,marginTop:30,height:45,marginLeft:110}}/>
          <Image source={require('./img/twitter.png')} style={{width:40,marginTop:-43,height:40,marginLeft:160}}/>
          <Image source={require('./img/linkedin.png')} style={{width:48,marginTop:-44,height:48,marginLeft:203}}/>
          <Image source={require('./img/mail.png')} style={{width:40,marginTop:-44,height:40,marginLeft:253}}/>
          <View style={{marginLeft:300,marginTop:-34}}> 
          <Button style={{width:25,height:25,marginTop:-34}} onPress={this.setModalHide}>
              <Image source={require('./img/share.png')}/>   
            </Button>
            </View>
          </View>
          </Modal>
          <View style={{marginTop:-27}}>
              <Button onPress={this.setModalVisible}>
                  <Image source={require('./img/share.png')} style={{width:25,marginTop:0,height:25,marginLeft:300}}/> 
                </Button>
                    </View>
                  <Button containerStyle={{padding:10, width:125, marginTop:330, marginLeft:108, position:'absolute', overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.takeaction}  onPress={() => Actions.thankyou()}>
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