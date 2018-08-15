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
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor:'#EDF1F5'
       },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        width: wp('100%'),
        height:wp('50%'),
      },
      loginbtnContainer:{
        flex: 1,
        position: 'absolute',
        marginLeft: moderateScale(40),
      },
      textView: {
        // paddingTop: 80,
        // width: 100,
        // height: 100,
        // backgroundColor: '#ffffff',
        // marginTop:wp("40%")
      },
      text:{
        marginTop:wp("25%"),
        marginLeft:wp('22%'),
        width: wp('100%'),
        fontSize:wp("5%"),
        color: '#ffffff',
       },
       text2:{
        marginTop:wp("-2%"),
        marginLeft:wp('38%'),
        width: wp('100%'),
        fontSize:wp("5%"),
        color: '#ffffff',
       },
       bg:{
        marginTop:50,
        backgroundColor:'#EDF1F5',
        width:500,
        height:800,
        position:'relative',
        // overflow:'hidden',

       },      
       content:{
        backgroundColor:'#EDF1F5',
        paddingTop:wp("5%"),
        paddingLeft:wp("10%"),
        flex:1,
        marginTop:wp("10%"),
        width:wp("100%"),
     //    height:wp("100%"),
        position:'relative',
        overflow:'hidden',
        },
        contentText:{
            fontSize:wp("3.3"),
            color:'#777777',
            marginLeft:wp("-5%")
        },
       mainContainer:{
        marginLeft:wp("11%")
       },
       
       mainContainer2:{
        marginLeft:wp("13%")
    },
       rowConatiner:{
           backgroundColor:'#FFFFFF',
           position: 'absolute',
           marginTop: wp("5%"),
           width:wp("20%"),
           height:wp("20%"),
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
        marginTop: wp("5%"),
        width:wp("20%"),
        height:wp("20%"),
        borderRadius:100,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
    },
    rowConatiner3:{
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        marginTop: wp("5%"),
        width:wp("20%"),
        height:wp("20%"),
        marginLeft:wp("-4%"),
        borderRadius:100,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
 },
 rowConatiner4:{
    backgroundColor:'#FFFFFF',
    position: 'absolute',
    marginTop: wp("5%"),
    width:wp("20%"),
    height:wp("20%"),
    borderRadius:100,
    shadowOffset: {width: 0, height: 13}, 
    shadowOpacity: 0.5,
    shadowRadius: 6,
    // android (Android +5.0)
    elevation: 5,
},
rowimg:{
    flex:1,
    position:'absolute',
    width:100,
    //    height:50
    },
imgtext:{
    color:'#215BA4',
    fontSize:12,
    marginTop:83,
    marginLeft:9
    },
    nextBtn:{
        color:'#ffffff',
        fontSize:wp("5%"),
        marginTop:wp("0.6%"),
        marginLeft:wp("12%")
      },
      input:{
        // margin: 15,
        width:200,
        height: 35,
        // borderRadius:50,
        marginLeft:10,
        // paddingLeft:50,
        backgroundColor:'#FFFFFF'
      },
    SectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        // height: 40,
        borderRadius: 50 ,
        marginTop:wp("2%"),
        width:wp("90%"),
        marginLeft:wp("-5.5%"),
    // borderRadius:100,
    shadowOffset: {width: 0, height: 5}, 
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // android (Android +5.0)
    elevation: 5,
        // margin: 10
    },
     
    ImageStyle: {
        marginLeft: 7,
        // paddingLeft:10,
        marginTop:9,
        height: 18,
        width: 28,
        resizeMode : 'stretch',
        // alignItems: 'center'
    },
  });


class GroupListComponents extends Component{
    constructor(props){
        super(props)
        this.state={
            search:'',
        }
    }
    render(){
        return(
             <ScrollView  style={styles.container}>
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.loginbtnContainer}>
                <View style={{marginLeft:wp('-10%')}}>
                  <Button containerStyle={{paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent'}} onPress={() => Actions.signup()}
                    style={{color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"),}}>
                  <Image source={require('./img/arrow.png')} style={{width:wp("5%"),height:wp("5%"),marginLeft:wp("4%"),marginTop:wp("-1%")}}/>
                  </Button>
                  </View>
                  <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
                  <Image source={require('./img/logo.png')} style={{width: wp('15%'),flex:1, marginTop: wp('-10%')}} />
                  </View>
                  </View>
                  <View styles={styles.textView}>
                     <Text style={styles.text}>How do you want to make{"\n"}</Text>
                     <Text style={styles.text2}>an Impact?</Text>
                  </View>
                {/* <View style={styles.bg}> */}
                    <View style={styles.content}>
                       <Text style={styles.contentText}>Join groups that share your community passions and goals.</Text>
                       <View style={styles.SectionStyle}>
                       <Image source={require('./img/search.png')} style={styles.ImageStyle} />
                       <TextInput  style={styles.input}  underlineColorAndroid = "transparent" placeholder = "Search your Favorite Group" placeholderTextColor = "#CDCDCD" onChangeText={(search) => this.setState({search})}
                        value={this.state.search}
                        />
                       </View>
                         <Row dial={0} flex>
                        <View>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/team.png')} style={{width:wp('19%'),height:wp("19.5%"),marginTop:wp("0.5%"),marginLeft:wp("0.7%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("5.1%")}}>   Team {"\n"}MyEffect   </Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/support.png')} style={{width:wp('20%'),height:wp("19%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("5.5%")}}>Myffect{"\n"}Support    </Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/social.png')} style={{width:wp('20%'),height:wp("19%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Social Works</Text>
                        </View>
                       </Row>
                       {/* Second row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/happy.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Happy Hippie</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/youth.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Youth Council</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/wish.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Make-A-Wish{"\n"}  Minnesota</Text>
                        </View>
                       </Row>
                       {/* Third row */}
                       <Row dial={2} flex>
                        <View>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/oceans.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("0.5%")}}>Save the     {"\n"} Oceans</Text>
                        </View>
                        <View style={styles.mainContainer2}>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/effect.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}> YOU{"\n"}Effect       </Text>
                        </View>
                        <View style={styles.mainContainer2}>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/calgary.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("0.5%")}}>Ecclesiastical{"\n"}   Calgary</Text>
                        </View>
                       </Row>
                       {/* Row 4 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/change.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Triathlon for {"\n"}   Change</Text>
                        </View>
                        <View style={styles.mainContainer2}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/tdsb.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>TDSB    </Text>
                        </View>
                        <View style={styles.mainContainer2}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/country.png')} style={{width:wp('20%'),height:wp("20%"),marginTop:wp("0.1%"),marginLeft:wp("0.1%"),borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>  Sleep{"\n"}Country</Text>
                        </View>
                       </Row>
                       <View>
                  <Button containerStyle={{marginTop:wp("6%"), marginLeft:wp("21%"), height:wp('9%'), width:wp("35%"), marginBottom:wp("5%"), overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.nextBtn} onPress={() => Actions.student()}>
                  <Text style={styles.nextBtn}>Next</Text>
                  </Button>
                       </View>
                    </View>
                {/* </View> */}
             </ScrollView>
        )
    }
}

export default GroupListComponents;
