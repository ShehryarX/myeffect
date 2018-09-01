import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
import PageControl from 'react-native-page-control'; //This library provide dots fro navigation
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor:'#EDF1F5'
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
      line:{
         color:'#EDF1F5',
         marginTop:wp("-6%"),
         width:wp("100%"),
         fontSize:wp("3.9%"),
      },
      line2:{
        color:'#EDF1F5',
        marginTop:0,
        width:wp("100%"),
        fontSize:wp("3.9%"),
      },
      suggestedtxt:{
          color:'#205BA3',
          paddingLeft:wp("5%"),
          marginTop:wp("-1%"),
          fontSize:wp("4%")
      },
      seemore:{
          color:'#205BA3',
          fontSize:wp("4%")
      },
      touchableseemore:{
        paddingLeft:wp("80%"),
        marginTop:wp("-6%"),
      },
      mainContainer:{
        marginLeft:20,
        marginTop:50
    },
 rowConatiner4:{
    backgroundColor:'#FFFFFF',
    position: 'absolute',
    width:55,
    height:55,
    borderRadius:100,
    shadowOffset: {width: 0, height: 13}, 
    shadowOpacity: 0.5,
    shadowRadius: 6,
    // android (Android +5.0)
    elevation: 5,
},
rowConatiner2:{
    backgroundColor:'#FFFFFF',
    position: 'absolute',
    width:55,
    height:55,
    borderRadius:100,
    shadowOffset: {width: 0, height: 13}, 
    shadowOpacity: 0.5,
    shadowRadius: 6,
    // android (Android +5.0)
    elevation: 5,
},
feedtxt:{
    color:'#205BA3',
    marginTop:wp("-12"),
    marginLeft:wp("25%"),
    fontSize:wp("5%")
},
feedcaption:{
    color:'#777778',
    fontSize:wp("3.5%"),
    marginTop:wp("0.1%"),
    marginLeft:wp("25%")
},
feedTime:{
    color:'#777778',
    marginTop:wp("-2%"),
    marginLeft:wp("83%"),
    fontSize:wp("4%")
},
feedpost:{
    fontSize:wp("4%"),
    marginLeft:wp("10")
},
feedpic: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position:'absolute',
    marginTop:wp("22%"),
    height:wp("70%"),
    // justifyContent: 'flex-end',
    width:wp("100%"),
  },
  liketxt:{
      color:'#777778',
      marginLeft:wp("7%"),
      fontSize:wp("4%")
  },
  commenttxt:{
    color:'#777778',
    marginTop:wp("-6%"),
    marginLeft:wp("19%"),
    fontSize:wp("4%")
  },
  commentuser:{
      color:'#00B0F5',
      marginLeft:wp("6%"),
      marginTop:wp("0.1%"),
      fontSize:wp("4%")
                     
    },
    inputcomment:{
        marginTop:wp("-9%"),
        marginLeft:wp("17%")
    }
    })

class NewsFeed extends Component{
    constructor(props){
        super(props)
        this.state={
             comment:''
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
                  <Text style={styles.line}>────────────────────────────────────</Text>
                  <View>
                  <Text style={styles.suggestedtxt}>Suggested Actions</Text>
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
                        <Text style={styles.line2}>────────────────────────────────────</Text>
                        </View>
                        <View>
                        <Image source={require('./img/happyhippie.png')} style={{width:wp("12%"),marginTop:wp("-0%"),height:wp("12%"),marginLeft:("8%"), borderRadius:100}}/>
                        <Text style={styles.feedtxt}>Happy Hippie</Text>
                        <Image source={require('./img/profiletick.png')} style={{width:wp("4%"),marginTop:wp('-5%'),height:wp("4%"),marginLeft:wp("55%"), borderRadius:100}}/>
                        <Text style={styles.feedcaption}>New York, New York</Text>
                        <Text style={styles.feedTime}>April 16</Text>
                        <Text style={styles.feedpost}>Happy Hippie Holiday 2017</Text>
                        <Image source={require('./img/feedpic.png')} style={styles.feedpic}/>
                        <View style={{marginTop:wp("3%")}}>
                        <Image source={require('./img/heart.png')} style={{width:wp("8%"),height:wp("8%"),marginTop:wp("74%"),marginLeft:wp("6%")}}/>
                        <Image source={require('./img/comment.png')} style={{width:wp("8%"),height:wp("8%"),marginTop:wp("-8%"),marginLeft:wp("17.5%")}}/>
                        <Text style={styles.liketxt}>406</Text>
                        <Text style={styles.commenttxt}>10</Text>
                        </View>
                        <View>
                        <Image source={require('./img/share.png')} style={{width:wp("5%"),height:wp("5%"),marginTop:wp("-12%"),marginLeft:wp("90%")}}/>
                        </View>
                        <View>
                            <Text style={styles.commentuser}>@Sample_User <Text style={{color:'#444444'}}>Love this!</Text></Text>
                        </View>
                        <View>
                        <Image source={require('./img/profileimg.png')} style={{width:wp("8%"),marginTop:wp("1%"),height:wp("8%"),marginLeft:wp("4%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                        <TextInput  style={styles.inputcomment}  underlineColorAndroid = "transparent" placeholder = "Add a comment..." placeholderTextColor = "#CDCDCD" onChangeText={(comment) => this.setState({comment})}
                        value={this.state.comment}
                         />
                        </View>
                        </View>
                       {/* </Row> */}
                  </View>
            {/* </View> */}
            </ScrollView>
        )
    }
}
export default NewsFeed;