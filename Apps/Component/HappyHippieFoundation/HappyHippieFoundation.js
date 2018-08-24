import React,{Component} from 'react';
import { StyleSheet,Modal, Text, View, Alert, Animated, Image,ScrollView, TouchableHighlight,TouchableOpacity,Dimensions, KeyboardAvoidingView,TextInput,TouchableWithoutFeedback} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button' // Radio Button
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'
import {ImageGallery} from '@nlabs/react-native-image-gallery';
import PhotoGrid from 'react-native-thumbnail-grid'

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
        marginTop:wp('-3%'),
        fontSize:wp("5%"),
        color:'#00B0F5',
    },
    actions2:{
        fontSize:wp("5%"),
        color:'#1B499B',
    },
    actions3:{
        fontSize:wp("5%"),
        color:'#1B499B',
    },
    actionsBtn:{
        marginLeft:wp("12.6%")
    },
    actionsBtn2:{
        marginLeft:wp("12.6%")
    },
    actionsBtn3:{
        marginLeft:wp("12.6%")
    },
    line:{
        color:'#00B0F5',
        fontSize:wp("8.5%"),
        marginTop:wp("-4.8%"),
        marginLeft:wp("12.6%")
      },
      lineChalenges:{
        color:'#00B0F5',
        fontSize:wp("12.3%"),
        marginTop:wp("-7%"),
        marginLeft:wp("0.6%")
      },
      linegroup:{
        color:'#00B0F5',
        fontSize:wp("10.3%"),
        marginTop:wp("-7%"),
        marginLeft:wp("0.6%")
      },
      line2:{
        color:'#EDF1F5',
        marginTop:wp("-6%"),
        fontSize:wp("3%"),
      },
      groups:{
        fontSize:wp("5%"),
        color:'#1B499B',
      },
      groups2:{
        fontSize:wp("5%"),
        color:'#1B499B',
      },
      groups3:{
        fontSize:wp('5%'),
        color:'#00B0F5',
      },
      groupsBtn:{
        marginTop:wp("-6.8%"),
        marginLeft:wp("73%")
      },
      groupsBtn2:{
        marginTop:wp("-1%"),
        marginLeft:wp("11%")
      },
      groupsBtn3:{
        marginTop:wp("-0.5%"),
        marginLeft:wp("11%")
      },
      middletxt:{
        color:'#1B499B',
        marginTop:wp("-16"),
        fontSize:wp("4.4%"),
        marginLeft:wp("26%")
    },
    person1:{
        marginTop:wp("-4.5%"),
        marginLeft:wp("27%")
    },
    persontxt1:{
        color:'#00B0F5',
        fontSize:wp("3%"),
        marginLeft:wp("2%"),
        marginTop:wp("-1%")
    },
    nopoverty:{
        marginTop:wp("-8%"),
        marginLeft:wp("42%")
    },
    nopovertytxt:{
        color:'#FE001C',
        fontSize:wp('3%'),
        marginTop:('-2%'),
        marginLeft:wp("-1.5%"),
        marginBottom:wp("2.3%")
    },
    share:{
        marginTop:wp("-11%"),
        marginLeft:wp("88%")
    },
    upcomingactions:{
        marginTop:wp("4%"),
        backgroundColor:'#F8F8F8',
        height:wp("40%")
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
    challenges:{
        fontSize:wp("5%"),
        color:'#1B499B',
      },
      challenges2:{
        fontSize:wp("5%"),
        color:'#00B0F5',
      },
      challenges3:{
        fontSize:wp("5%"),
        color:'#1B499B',
      },
      challengesContainer:{
        marginTop:wp("-13%"),
        marginLeft:wp("36%")
      },
      challengesContainer2:{
        marginTop:wp("-1%"),
        marginLeft:wp("11%")
      },
      challengesContainer3:{
        marginTop:wp("0.5%"),
        marginLeft:wp("11%")
      },
      menusbtn:{
          flex:1,
         marginTop:wp("3%")
      },
      menusbtnMemories:{
        flex:1,
        flexDirection:'row',
       marginTop:wp("3%")
    },
      commentcontainer:{
          flex:1,
          flexDirection:'row',
          marginTop:wp("2%")
      },
      input:{
        width:wp("75%"),
        height: wp("10%"),
        marginLeft:wp("3%"),
        marginTop:wp("4%"),
        borderRadius:wp("2%"),
        backgroundColor:'#EDF1F5',
        paddingLeft:wp("2%")
      },
      commentscontainer:{
        flex:1,
        flexDirection:'row'
      },
      commentscontainertxt:{
          fontSize:wp("3%"),
          marginTop:wp("-8.5%"),
          marginLeft:wp("14%"),
          color:'#4F4F4F',
      },
      liketxt:{
          fontSize:wp("2%"), 
          marginLeft:wp("14%"),
          color:"#4F4F4F"
      },
      commenttxt:{
        fontSize:wp("2%"), 
        marginLeft:wp("24%"),
        marginTop:wp("-1%"),
        color:"#4F4F4F"
      },
      replyContainer:{
          flex:1,
          flexDirection:'row'
      },
      inputReply:{
        width:wp("65%"),
        height: wp("6%"),
        marginLeft:wp("2%"),
        marginTop:wp("3%"),
        borderRadius:wp("3%"),
        backgroundColor:'#EDF1F5',
        paddingLeft:wp("2%")
      },
      viewAllComments:{
        marginLeft:wp("21%")
      },
      viewAllCommentsTxt:{
          fontSize:wp("3%"),
          color:'#CDCDCD'
      },
      person:{
        marginTop:wp("-2%"),
        marginLeft:wp("15%")
    },
    persontxt:{
        color:'#00B0F5',
        fontSize:wp("3%"),
        marginLeft:wp("1.5%")
    },
    line3:{
        color:'#EDF1F5',
        marginTop:wp("0.1%"),
        fontSize:wp("3%")
      },
    })

class HappyHippieFoundation extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:'',
            reply:'Awesome!',
            posts:true,
            ourActions:false,
            memories:false,
            images:[
                {
                    url:'https://lh5.googleusercontent.com/xGDWXQQQRDzTSigdkaFPH63A40OL7DJII76ocIRIQb4CMW1YjvYPjRZk8CPpJAx1yEj26TrJmnzF3dQwv1jV=w1062-h907-rw',
                    title:'Happy Hippie',
                    id:1,
                    description:'Happy Hippie Foundation'

                },
                {
                    url:'https://lh5.googleusercontent.com/zHpjivGyASDvW274u06pzYnJHdki0hSVoolSDEE6K66YHNPNDg5ir18HLSpzhT-tdW8LxPybk5nZv3mItwQ2=w1881-h907-rw',
                    title:'Happy Hippie',
                    id:2,
                    description:'Happy Hippie Foundation'
                },
                {
                    url:'https://lh5.googleusercontent.com/zHpjivGyASDvW274u06pzYnJHdki0hSVoolSDEE6K66YHNPNDg5ir18HLSpzhT-tdW8LxPybk5nZv3mItwQ2=w1881-h907-rw',
                    title:'Happy Hippie',
                    id:3,
                    description:'Happy Hippie Foundation'
                },
                {
                    url:'https://lh5.googleusercontent.com/zHpjivGyASDvW274u06pzYnJHdki0hSVoolSDEE6K66YHNPNDg5ir18HLSpzhT-tdW8LxPybk5nZv3mItwQ2=w1881-h907-rw',
                    title:'Happy Hippie',
                    id:4,
                    description:'Happy Hippie Foundation'
                },
                {
                    url:'https://lh5.googleusercontent.com/xGDWXQQQRDzTSigdkaFPH63A40OL7DJII76ocIRIQb4CMW1YjvYPjRZk8CPpJAx1yEj26TrJmnzF3dQwv1jV=w1062-h907-rw',
                    title:'Happy Hippie',
                    id:5,
                    description:'Happy Hippie Foundation'
                },
                {
                    url:'https://lh5.googleusercontent.com/xGDWXQQQRDzTSigdkaFPH63A40OL7DJII76ocIRIQb4CMW1YjvYPjRZk8CPpJAx1yEj26TrJmnzF3dQwv1jV=w1062-h907-rw',
                    title:'Happy Hippie',
                    id:6,
                    description:'Happy Hippie Foundation'
                }
            ],
        }
    }

    postShow = ()=>{
        this.setState({
            posts:true,
            ourActions:false,
            memories:false
        })
    }
    ouractionsShow = ()=>{
        this.setState({
            posts:false,
            ourActions:true,
            memories:false
        })
    }
    memoriesShow = ()=>{
        this.setState({
            posts:false,
            ourActions:false,
            memories:true
        })
    }
    render(){
        const {posts, ourActions, memories,images} =this.state
        // console.log('My id',this.state.images)
        var mapping = this.state.images.map((img)=>{
            console.log('My id',img.url)
        })
        const imageUrls = images.map((img) => ({
            url: img.url,
            id: img.id,
            title: img.title,
            description: img.description
          }))
        return(
            <ScrollView style={styles.container}>
            {/* <View style={styles.container}> */}
            <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:wp("-1%"), paddingTop:wp("8%"), width:wp("22%"), position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => {Alert.alert('You tapped the button!');}}
                    style={{color:'#FCDC28'}}>
                    <View>
                  <Image source={require('./img/arrow.png')} style={{width:wp("8%"),marginTop:wp("1%"),height:wp("8%"),marginLeft:wp("4%"),borderColor:'#00B0F5'}}/>
                  </View>
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:wp("18.5%"),height:wp("18.5%"),marginLeft:wp("18%"),marginTop:wp("5%")}} />
                  <Image source={require('./img/bell.png')} style={{width:wp("9%"),height:wp("9%"),marginLeft:wp("25%"),marginTop:wp("8%")}} /> 
                  </View> 
                  <Text style={styles.line2}>───────────────────────────────────────────────</Text>
                  <View>
                  <Image source={require('./img/happyhippie.png')}  style={{width:wp("20%"),marginTop:wp("5%"),height:wp("20%"),marginLeft:wp("3%"), borderRadius:100}}/>
                  <View>
                  <View style={{flexDirection:'row'}}>
                  <Text style={styles.middletxt}>Happy Hippie Foundation</Text>
                  <Image source={require('./img/profiletick.png')}  style={{width:wp("4.5%"),marginTop:wp("-14.7%"),height:wp("4.5%"),marginLeft:wp("2.5%"), borderRadius:100}}/>
                  <Image source={require('./img/morevertical.png')}  style={{width:wp("7%"),marginTop:wp("-15.8%"),height:wp("7%"),marginLeft:wp("8.4%")}}/>
                  </View>
                  <Text style={{color:'#696969',marginTop:wp("-10%"),marginLeft:wp("26%"),fontSize:wp("3.4%")}}>Founded by Miley Cyrus</Text>
                  <Image source={require('./img/happyhippieprofile.png')}  style={{width:wp("6.5%"),marginTop:wp("-2%"),height:wp("6.5%"),marginLeft:wp("19%"),borderColor:'#00B0F5', borderRadius:100}}/> 
                  <View style={styles.person1}>
                  <Image source={require('./img/person.png')} style={{width:wp("5.5%"),marginTop:wp("1.2%"),height:wp("5.5%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("5%"),marginTop:wp("-4.5%"),height:wp("3.8%"),marginLeft:wp("3.7%")}}/>
                  <Text style={styles.persontxt1}>110K</Text>
                  </View>
                  <View style={styles.nopoverty}>
                  <Image source={require('./img/noPoverty.png')} style={{width:wp("12%"),marginTop:wp("1%"),marginBottom:wp("1%") ,height:wp('4%')}}/>
                  <Text style={styles.nopovertytxt}>No poverty</Text>
                  </View>
                  <View style={styles.share}>
                  <Image source={require('./img/share.png')} style={{width:wp("6%"),marginTop:wp("1%"),marginBottom:wp("1%") ,height:wp('6%')}}/>
                  </View>
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
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("6%"),marginTop:wp("1%")}}>volounteering{'\n'}  200hrs</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Image source={require('./img/orginization.png')} style={{width:wp("15%"),height:wp("15%"),marginTop:wp("2%"),marginLeft:wp("6.5%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("5%"),marginTop:wp("1%")}}>Organization{'\n'}   43hrs</Text>
                        </View>
                        <View>
                        <Image source={require('./img/fundraising.png')} style={{width:wp("15%"),height:wp("15%"),marginLeft:wp("6.5%"),marginTop:wp("2%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("5%"),marginTop:wp("1%")}}>Fund Raising{'\n'}    43hrs</Text>
                        </View>
                        <View>
                        <Image source={require('./img/donation.png')} style={{width:wp("15%"),marginTop:wp("2%"),height:wp("15%"),marginLeft:wp("6%"), borderRadius:100}}/>
                        <Text style={{fontSize:wp("3.3%"),color:'#797979',marginLeft:wp("5%"),marginTop:wp("1%")}}>Donation &{'\n'}  43hrs</Text>
                        </View>
                        </View>
                  </View> 
                   {
                       (ourActions)?
                <View>
                  <View style={styles.menusbtnMemories}>
                  <View style={styles.actionsBtn2}>
                  <Button onPress={() => this.postShow()}>
                     <Text style={styles.actions2}>Posts</Text>
                     </Button>
                     </View>
                     <View style={styles.challengesContainer2}>
                     <Button onPress={() => this.ouractionsShow()}>
                     <Text style={styles.challenges2}>Our Actions</Text>
                     </Button>
                     <Text style={styles.lineChalenges}>───</Text>
                     </View>
                     <View style={styles.groupsBtn2} >
                         <Button onPress={() => this.memoriesShow()}>
                            <Text style={styles.groups2}>Memories</Text>
                         </Button>
                     </View>                  
                  </View>
                  <View>
                       <View>
                       <TouchableOpacity onPress={() => Actions.shiftcomponent()}>
                  <Image source={require('./img/parkday.png')}  style={{width:wp("17%"),marginTop:wp("5%"),height:wp("17%"),marginLeft:wp("3%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                  <View>
                  <Text style={styles.middletxt}>Love your Park Day - Lardner's{'\n'}Point Park (Tacony)</Text>
                  <Image source={require('./img/coin.png')}  style={{width:wp("6%"),marginTop:wp("-12%"),height:wp("6%"),marginLeft:wp("90%"), borderRadius:100}}/>
                  <Text style={{marginTop:wp("-6%"),fontSize:wp("4%"),marginLeft:wp("92%"),color:'#1B499B',}}>5</Text>
                  <Text style={{color:'#696969',marginTop:wp("7.7%"),marginLeft:wp("22%"),fontSize:wp("3.4%")}}>May 19,2018</Text>
                  <Text style={{color:'#00B0F5',marginTop:wp("-6%"),fontSize:wp("4%") ,marginLeft:wp("78%")}}>Volunteer</Text>
                  <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:wp("5.5%"),marginTop:wp("1.2%"),height:wp("5.5%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("5%"),marginTop:wp("-4.5%"),height:wp("3.8%"),marginLeft:wp("3.7%")}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  </View>
                  <View>
                  <Image source={require('./img/heart.png')} style={{width:wp("8%"),marginTop:wp("-6%"),height:wp("6%"),marginLeft:wp("70%")}}/>
                  <Image source={require('./img/eye.png')} style={{width:wp("8.3%"),marginTop:wp("-5%"),height:wp("5%"),marginLeft:wp("79.8%")}}/>
                  <Image source={require('./img/tree.png')} style={{width:wp("6%"),marginTop:wp("-6.8%"),height:wp('6%'),marginLeft:wp("90%")}}/>
                  </View>
                  <Text style={styles.line3}>────────────────────────────────────────────────</Text>
                  </View>
                 </TouchableOpacity>
                  </View> 
                  <View>
                  <TouchableOpacity onPress={() => Actions.mitzvagComponent()}>
                  <Image source={require('./img/mitzvag.png')}  style={{width:wp("17%"),marginTop:wp("5%"),height:wp("17%"),marginLeft:wp("3%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                  <View>
                  <Text style={styles.middletxt}>Mitzvag Food Project</Text>
                  <Image source={require('./img/coin.png')}  style={{width:wp("6%"),marginTop:wp("-8.5%"),height:wp("6%"),marginLeft:wp("90%"), borderRadius:100}}/>
                  <Text style={{marginTop:wp("-6%"),fontSize:wp("4%"),marginLeft:wp("92%"),color:'#1B499B',}}>6</Text>
                  <Text style={{color:'#696969',marginTop:wp("5.7%"),marginLeft:wp("22%"),fontSize:wp("3.4%")}}>Sep 7, 2017 - Sep 2, 2018</Text>
                  <Text style={{color:'#00B0F5',marginTop:wp("-6%"),fontSize:wp("4%") ,marginLeft:wp("80%")}}>Donation</Text>
                  <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:wp("5.5%"),marginTop:wp("1.2%"),height:wp("5.5%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("5%"),marginTop:wp("-4.5%"),height:wp("3.8%"),marginLeft:wp("3.7%")}}/>
                  <Text style={styles.persontxt}> 5/30</Text>
                  </View>
                  <View>
                  <Image source={require('./img/zeroHunger.png')} style={{width:wp("6.3%"),marginTop:wp("-5%"),height:wp("5%"),marginLeft:wp("80%")}}/>
                  <Image source={require('./img/community.png')} style={{width:wp("6%"),marginTop:wp("-6.8%"),height:wp('6%'),marginLeft:wp("90%")}}/>
                  </View>
                  <Text style={styles.line3}>────────────────────────────────────────────────</Text>
                  </View>
                  </TouchableOpacity>
                  </View>
                  </View>
                  <View>
                  <Image source={require('./img/Mohammad.png')}  style={{width:wp("17%"),marginTop:wp("5%"),height:wp("17%"),marginLeft:wp("3%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                  <View>
                  <Text style={styles.middletxt}>Virtual Volunteering with{'\n'}MindRight</Text>
                  <Image source={require('./img/coin.png')}  style={{width:wp("6%"),marginTop:wp("-12%"),height:wp("6%"),marginLeft:wp("90%"), borderRadius:100}}/>
                  <Text style={{marginTop:wp("-6%"),fontSize:wp("4%"),marginLeft:wp("92%"),color:'#1B499B',}}>4</Text>
                  <Text style={{color:'#696969',marginTop:wp("7.7%"),marginLeft:wp("22%"),fontSize:wp("3.4%")}}>Mar 27, 2017 - Mar 7, 2021</Text>
                  <Text style={{color:'#00B0F5',marginTop:wp("-6%"),fontSize:wp("4%") ,marginLeft:wp("78%")}}>Volunteer</Text>
                  <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:wp("5.5%"),marginTop:wp("1.2%"),height:wp("5.5%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("5%"),marginTop:wp("-4.5%"),height:wp("3.8%"),marginLeft:wp("3.7%")}}/>
                  <Text style={styles.persontxt}>38/50</Text>
                  </View>
                  <View>
                  <Image source={require('./img/industry.png')} style={{width:wp("6%"),marginTop:wp("-6.8%"),height:wp('6%'),marginLeft:wp("90%")}}/>
                  </View>
                  <Text style={styles.line3}>────────────────────────────────────────────────</Text>
                  </View>
                  </View>
                  <View>
                  <Image source={require('./img/anne.png')}  style={{width:wp("17%"),marginTop:wp("5%"),height:wp("17%"),marginLeft:wp("3%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                  <View>
                  <Text style={styles.middletxt}>Elementary School Library{'\n'}Team Member</Text>
                  <Image source={require('./img/coin.png')}  style={{width:wp("6%"),marginTop:wp("-12%"),height:wp("6%"),marginLeft:wp("90%"), borderRadius:100}}/>
                  <Text style={{marginTop:wp("-6%"),fontSize:wp("4%"),marginLeft:wp("92%"),color:'#1B499B',}}>4</Text>
                  <Text style={{color:'#696969',marginTop:wp("7.7%"),marginLeft:wp("22%"),fontSize:wp("3.4%")}}>Sep 7, 2017 - Sep 2, 2018</Text>
                  <Text style={{color:'#00B0F5',marginTop:wp("-6%"),fontSize:wp("4%") ,marginLeft:wp("78%")}}>Volunteer</Text>
                  <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:wp("5.5%"),marginTop:wp("1.2%"),height:wp("5.5%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("5%"),marginTop:wp("-4.5%"),height:wp("3.8%"),marginLeft:wp("3.7%")}}/>
                  <Text style={styles.persontxt}>24/50</Text>
                  </View>
                  <View>
                  <Image source={require('./img/education.png')} style={{width:wp("6%"),marginTop:wp("-6.8%"),height:wp('6%'),marginLeft:wp("90%")}}/>
                  </View>
                  <Text style={styles.line3}>────────────────────────────────────────────────</Text>
                  </View>
                  </View>
                  <View>
                  <Image source={require('./img/mindright.png')}  style={{width:wp("17%"),marginTop:wp("5%"),height:wp("17%"),marginLeft:wp("3%"),borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                  <View>
                  <Text style={styles.middletxt}>Cleaner Parks Volunteering</Text>
                  <Image source={require('./img/coin.png')}  style={{width:wp("6%"),marginTop:wp("-8.5%"),height:wp("6%"),marginLeft:wp("90%"), borderRadius:100}}/>
                  <Text style={{marginTop:wp("-6%"),fontSize:wp("4%"),marginLeft:wp("92%"),color:'#1B499B',}}>6</Text>
                  <Text style={{color:'#696969',marginTop:wp("5.7%"),marginLeft:wp("22%"),fontSize:wp("3.4%")}}>May 19,2018</Text>
                  <Text style={{color:'#00B0F5',marginTop:wp("-6%"),fontSize:wp("4%") ,marginLeft:wp("80%")}}>Donation</Text>
                  <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:wp("5.5%"),marginTop:wp("1.2%"),height:wp("5.5%"),marginLeft:wp("1.6%")}}/>
                  <Image source={require('./img/person.png')} style={{width:wp("5%"),marginTop:wp("-4.5%"),height:wp("3.8%"),marginLeft:wp("3.7%")}}/>
                  <Text style={styles.persontxt}> 5/30</Text>
                  </View>
                  <View>
                  <Image source={require('./img/zeroHunger.png')} style={{width:wp("6.3%"),marginTop:wp("-5%"),height:wp("5%"),marginLeft:wp("80%")}}/>
                  <Image source={require('./img/community.png')} style={{width:wp("6%"),marginTop:wp("-6.8%"),height:wp('6%'),marginLeft:wp("90%")}}/>
                  </View>
                  <Text style={styles.line3}>────────────────────────────────────────────────</Text>
                  </View>
                  </View>
                  </View>
                  :

                  (memories)?

                  <View>
                  <View style={styles.menusbtnMemories}>
                  <View style={styles.actionsBtn3}>
                  <Button onPress={() => this.postShow()}>
                     <Text style={styles.actions3}>Posts</Text>
                     </Button>
                     </View>
                     <View style={styles.challengesContainer3}>
                     <Button onPress={() => this.ouractionsShow()}>
                     <Text style={styles.challenges3}>Our Actions</Text>
                     </Button>
                     </View>
                     <View style={styles.groupsBtn3} >
                         <Button onPress={() => this.memoriesShow()}>
                            <Text style={styles.groups3}>Memories</Text>
                         </Button>
                         <Text style={styles.linegroup}>───</Text>
                     </View>                  
                  </View>
                  <ImageGallery images={imageUrls}/>
                   </View>
                    :
                  <View>
                  <View style={styles.menusbtn}>
                  <View style={styles.actionsBtn}>
                     <Text style={styles.actions}>Posts</Text>
                     </View>
                     <Text style={styles.line}>──</Text>
                     <View style={styles.challengesContainer}>
                     <Button onPress={() => this.ouractionsShow()}>
                     <Text style={styles.challenges}>Our Actions</Text>
                     </Button>
                     </View>
                     <View style={styles.groupsBtn} >
                         <Button onPress={() => this.memoriesShow()}>
                            <Text style={styles.groups}>Memories</Text>
                         </Button>
                     </View>                  
                  </View>
                  <View style={styles.commentcontainer}>
                  <Image source={require('./img/profileimg.png')}  style={{width:wp("13%"),marginTop:wp("2%"),height:wp("13%"),marginLeft:wp("3%"), borderRadius:100}}/>
                  <TextInput  style={styles.input}  underlineColorAndroid = "transparent" placeholder="Any questions about our group?" placeholderTextColor = "#CDCDCD" onChangeText={(comment) => this.setState({comment})} value={this.state.comment} />
                  </View>   
                  <View styles={styles.commentscontainer}>
                  <Image source={require('./img/happyhippieprofile.png')}  style={{width:wp("7.5%"),marginTop:wp("5%"),marginBottom:wp("4%"),height:wp("7.5%"),marginLeft:wp("3%"),borderColor:'#00B0F5', borderRadius:100}}/>
                  </View>
                  <Text style={styles.commentscontainertxt}>We added some more fun Actions this week!</Text>        
                  <Image source={require('./img/heartlike.png')}  style={{width:wp("5.5%"),marginTop:wp("2%"),height:wp("5.5%"),marginLeft:wp("13.5%")}}/>
                  <Text style={styles.liketxt}>200</Text>
                  <Image source={require('./img/comment.png')}  style={{width:wp("5.5%"),marginTop:wp("-7.6%"),height:wp("5.5%"),marginLeft:wp("21.5%")}}/>
                  <Text style={styles.commenttxt}>2</Text>
                  <View style={styles.commentcontainer}>
                  <Image source={require('./img/jason.png')}  style={{width:wp("6%"),marginTop:wp("2%"),height:wp("6%"),marginLeft:wp("13%"), borderRadius:100}}/>
                  <TextInput  style={styles.inputReply}  underlineColorAndroid = "transparent" placeholder="Any questions about our group?" placeholderTextColor = "#CDCDCD" onChangeText={(reply) => this.setState({reply})} value={this.state.reply} />
                  </View>
                  <View style={styles.viewAllComments}>
                      <Text style={styles.viewAllCommentsTxt}>View all comments</Text>
                  </View>
                  </View>
                   }


             </ScrollView>
        )
    }
}
export default HappyHippieFoundation;