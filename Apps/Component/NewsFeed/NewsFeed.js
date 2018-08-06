import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
import PageControl from 'react-native-page-control'; //This library provide dots fro navigation
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
      profiletxt:{
          fontSize:12,
          color:'#00B0F5',
          marginTop:-25,
          marginLeft:50,
      },
      line:{
         color:'#EDF1F5',
         marginTop:-25
      },
      line2:{
        color:'#EDF1F5',
        marginTop:0
      },
      suggestedtxt:{
          color:'#205BA3',
          paddingLeft:20,
          marginTop:-10
      },
      seemore:{
          color:'#205BA3',
          paddingLeft:280,
          marginTop:-19
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
    marginTop:-37,
    marginLeft:90
},
feedcaption:{
    color:'#777778',
    fontSize:12,
    marginTop:0,
    marginLeft:90
},
feedTime:{
    color:'#777778',
    marginTop:-8,
    marginLeft:290
},
feedpost:{
    fontSize:14,
    marginLeft:36
},
feedpic: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position:'absolute',
    marginTop:80,
    height:230,
    // justifyContent: 'flex-end',
    width:370,
  },
  liketxt:{
      color:'#777778',
      marginLeft:23
  },
  commenttxt:{
    color:'#777778',
    marginTop:-20,
    marginLeft:70
  },
  commentuser:{
      color:'#00B0F5',
      marginLeft:20,
      marginTop:6 
                     
    },
    inputcomment:{
        marginTop:-30,
        marginLeft:55
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
            <ScrollView>
            <View style={styles.conatiner}>
                <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => {Alert.alert('You tapped the button!');}}
                    style={{color:'#FCDC28'}}>
                    <View>
                  <Image source={require('./img/profileimg.png')} style={{width:30,marginTop:4,height:30,marginLeft:15,borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                      <Text style={styles.profiletxt}>2400</Text>
                  </View>
                  </Button>
                  <Image source={require('./img/coin.png')} style={{width:13,height:13,marginTop:42}}/>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:60,marginTop:15}} />
                  <Image source={require('./img/bell.png')} style={{width:30,height:30,marginLeft:90,marginTop:33}} />
                  </View>
                  <Text style={styles.line}>────────────────────────────────────</Text>
                  <View>
                  <Text style={styles.suggestedtxt}>Suggested Actions</Text>
                  <Text style={styles.seemore}>See More</Text>
                  {/* <Row dial={1} flex> */}
                        <View >
                        <TouchableOpacity onPress={() => Actions.shiftcomponent()}>
                        <Image source={require('./img/parkday.png')} style={{width:55,marginTop:6,height:55,marginLeft:19, borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:25,height:25,marginTop:-25,marginLeft:55}}/>
                        <Text style={{color:'#1D54A0',marginTop:-22,marginLeft:65}}>5</Text>
                        <Text style={{fontSize:11,color:'#797979',marginLeft:23,marginTop:5}}>Love your{'\n'}Park Day</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Image source={require('./img/LGBTQ.png')} style={{width:55,marginTop:-85,height:55,marginLeft:100, borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:25,height:25,marginTop:-25,marginLeft:135}}/>
                        <Text style={{color:'#1D54A0',marginTop:-22,marginLeft:145}}>2</Text>
                        <Text style={{fontSize:11,color:'#797979',marginLeft:97,marginTop:5}}>Happy Hippie{'\n'}  LGBTQ run</Text>
                        </View>
                        <View>
                        <Image source={require('./img/code.png')} style={{width:55,marginTop:-85,height:55,marginLeft:190, borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:25,height:25,marginTop:-25,marginLeft:228}}/>
                        <Text style={{color:'#1D54A0',marginTop:-22,marginLeft:238}}>5</Text>
                        <Text style={{fontSize:11,color:'#797979',marginLeft:180,marginTop:5}}>Code Workshop{'\n'}    Volunteer</Text>
                        </View>
                        <View>
                        <Image source={require('./img/dog.png')} style={{width:55,marginTop:-85,height:55,marginLeft:280, borderRadius:100}}/>
                        <Image source={require('./img/coin.png')} style={{width:25,height:25,marginTop:-25,marginLeft:318}}/>
                        <Text style={{color:'#1D54A0',marginTop:-22,marginLeft:327}}>5</Text>
                        <Text style={{fontSize:11,color:'#797979',marginLeft:280,marginTop:5}}>Dog Rescue &{'\n'}Rehabbilitation</Text>
                        <Text style={styles.line2}>────────────────────────────────────</Text>
                        </View>
                        <View>
                        <Image source={require('./img/happyhippie.png')} style={{width:40,marginTop:-0,height:40,marginLeft:30, borderRadius:100}}/>
                        <Text style={styles.feedtxt}>Happy Hippie</Text>
                        <Image source={require('./img/profiletick.png')} style={{width:15,marginTop:-15,height:15,marginLeft:177, borderRadius:100}}/>
                        <Text style={styles.feedcaption}>New York, New York</Text>
                        <Text style={styles.feedTime}>April 16</Text>
                        <Text style={styles.feedpost}>Happy Hippie Holiday 2017</Text>
                        <Image source={require('./img/feedpic.png')} style={styles.feedpic}/>
                        <Image source={require('./img/heart.png')} style={{width:30,height:30,marginTop:250,marginLeft:20}}/>
                        <Image source={require('./img/comment.png')} style={{width:30,height:30,marginTop:-30,marginLeft:63}}/>
                        <Text style={styles.liketxt}>406</Text>
                        <Text style={styles.commenttxt}>10</Text>
                        <View>
                        <Image source={require('./img/share.png')} style={{width:20,height:20,marginTop:-40,marginLeft:313}}/>
                        </View>
                        <View>
                            <Text style={styles.commentuser}>@Sample_User <Text style={{color:'#444444'}}>Love this!</Text></Text>
                        </View>
                        <View>
                        <Image source={require('./img/profileimg.png')} style={{width:30,marginTop:14,height:30,marginLeft:15,borderColor:'#00B0F5',borderWidth:2, borderRadius:100}}/>
                        <TextInput  style={styles.inputcomment}  underlineColorAndroid = "transparent" placeholder = "Add a comment..." placeholderTextColor = "#CDCDCD" onChangeText={(comment) => this.setState({comment})}
        value={this.state.comment}
      />
                        </View>
                        </View>
                       {/* </Row> */}
                  </View>
            </View>
            </ScrollView>
        )
    }
}
export default NewsFeed;