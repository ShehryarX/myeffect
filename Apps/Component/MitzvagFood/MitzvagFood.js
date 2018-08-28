import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView, Modal, Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
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
        height:wp("100%",)
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
            marginLeft:wp("24%")
        },
        ptext:{
            color:'#424242',
            marginLeft:wp("7%"),
            fontSize:wp("4%")
        },
        sttxt:{
            color:'#696969',
            fontSize:13,
            marginTop:5,
            marginLeft:47
        },
        insideContainer:{
            backgroundColor:'#EDF1F5',
            marginTop:wp("1%"),
            height:wp("34%"),
        },
        insideContainertxt:{
            color:'#1B499B',
            fontSize:wp("3.5%"),
            marginTop:wp("1.5%"),
            marginLeft:wp("33%")
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
            fontSize:wp("3.5%")
        },
        SectionStyle: {
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderColor: '#000',
            borderRadius: 20 ,
            marginTop:wp("5%"),
            width:wp("53%"),
            marginLeft:wp("22%"),
        },
        ImageStyle: {
            marginLeft: 7,
            // paddingLeft:10,
            marginTop:7,
            height: 20,
            width: 28,
            resizeMode : 'stretch',
            // alignItems: 'center'
        },
        input:{
            // margin: 15,
            width:50,
            height: 35,
            // borderRadius:50,
            // marginLeft:10,
            // paddingLeft:50,
            backgroundColor:'#FFFFFF'
          },    
          $5:{
            backgroundColor:'#FFFFFF',
            position: 'absolute',
            marginTop: wp("1.5%"),
            marginLeft:wp("24%"),
            width:wp("12%"),
            height:25,
            borderRadius:50,
            shadowOffset: {width: 0, height: 13}, 
            shadowOpacity: 0.5,
            shadowRadius: 6,
            // android (Android +5.0)
            elevation: 5,
          },
          $25:{
            backgroundColor:'#FFFFFF',
            position: 'absolute',
            marginTop: wp("1.5%"),
            marginLeft:wp("38.5%"),
            width:wp("14%"),
            height:25,
            borderRadius:50,
            shadowOffset: {width: 0, height: 13}, 
            shadowOpacity: 0.5,
            shadowRadius: 6,
            // android (Android +5.0)
            elevation: 5,
          },
          $50:{
            backgroundColor:'#FFFFFF',
            position: 'absolute',
            marginTop: wp("1.5%"),
            marginLeft:wp("55%"),
            width:wp("14%"),
            height:25,
            borderRadius:50,
            shadowOffset: {width: 0, height: 13}, 
            shadowOpacity: 0.5,
            shadowRadius: 6,
            // android (Android +5.0)
            elevation: 5,
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
        }
          
    })

class MitzvagComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            donationValue:0,
            modalVisible: false,
        }
    }
$5func = ()=>{
  this.setState({donationValue:5})

}
$25func = ()=>{
    this.setState({donationValue:25})
  }
$50func = ()=>{
    this.setState({donationValue:50})
  }
  setModalVisible = ()=>{
    this.setState({modalVisible: true});
  }
  setModalHide = ()=>{
    this.setState({modalVisible: false});
  }
    render(){
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
                  <Image source={require('./img/mitzvag.png')} style={{width:wp("21%"),marginTop:wp("7%"),height:wp("21%"),marginLeft:wp("40%"),borderColor:'#00B0F5',borderWidth:3, borderRadius:100}}/>
                  <View style={styles.Conatiner2}>
                  <View>
                  <Image source={require('./img/person.png')} style={{width:wp("8%"),marginTop:wp("4%"),height:wp("8%"),marginLeft:wp("4%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("6.7%"),marginTop:wp("-6.8%"),height:wp("6.7%"),marginLeft:wp("7%")}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  <Image source={require('./img/coin.png')} style={{width:wp("10%"),marginTop:wp("-12%"),height:wp("10%"),marginLeft:wp("82%")}}/>
                  <Text style={styles.cointtxt}>5</Text>
                  <Text style={styles.volunteer}>Donation</Text>
                  <Text style={styles.middletxt}>Mitzvag Food Project</Text>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('./img/cup.png')} style={{width:wp("7%"),marginTop:wp("-0.1%"),height:wp("6%"),marginLeft:wp("37.5%")}}/>
                  <Image source={require('./img/building.png')} style={{width:wp("8%"),marginTop:wp("-0.1%"),height:wp("7%"),marginLeft:wp("0.5%")}}/>
                  </View>
                  <Text style={styles.ptext}>Join us at Lardner's Point Park  for a riverside{'\n'}    park and trail cleanup. We'll be doing trail{'\n'}  maintenance, trash collection, planting and{'\n'}                                     more! </Text>
                  <View style={styles.insideContainer}>
                   <Text style={styles.insideContainertxt}>I would like to donate</Text>
                   <View style={styles.SectionStyle}>
                       <Image source={require('./img/dollar.png')} style={styles.ImageStyle} />
                       <TextInput  style={styles.input}  underlineColorAndroid = "transparent" placeholderTextColor = "#CDCDCD"  onChangeText={(donationValue) => this.setState({donationValue})}  value={this.state.donationValue} />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View style={styles.$5}>
                    <Button onPress={this.$5func}>
                        $5
                    </Button>
                    </View>
                    <View style={styles.$25}>
                    <Button onPress={this.$25func}>
                        $25
                    </Button>
                    </View>
                    <View style={styles.$50}>
                    <Button onPress={this.$50func}>
                        $50
                    </Button>
                    </View>
                  </View>
                  </View>
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
                  {/* <Image source={require('./img/share.png')} style={{width:25,marginTop:-32,height:25,marginLeft:300}}/> */}
                  <Button containerStyle={{padding:wp("2%"), width:wp("35%"), marginTop:wp("93%"), marginLeft:wp("33%"), position:'absolute', overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.takeaction} onPress={() => Actions.thankyou()}>
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
export default MitzvagComponent;