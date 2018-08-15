import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView} from 'react-native';
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
       },
       mainContainer:{
           marginLeft:wp("10%")
       },
       mainContainer2:{
        marginLeft:43,
        marginTop:1
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
rowConatiner5:{
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
rowConatiner6:{
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
    color:'red',
    fontSize:wp("3%"),
    marginTop:wp("25%"),
    marginLeft:wp("2.5%")
    },
    nextBtn:{
        color:'#ffffff',
        fontSize:wp("5%"),
        marginTop:wp("0.6%"),
        marginLeft:wp("12%")
      },
  });


class GlobalGoalsComponents extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        const {firstName, lastName, emailorPhone, password, confirmPassword, radioValue} = this.state
        var radio_props = [
            {label: 'param1', value: 0 },
          ];
        return(
             <ScrollView style={styles.container}>
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
                       <Text style={styles.contentText}>Select Global Goals that you are intrested in helping</Text>
                       <Row dial={1} flex>
                       <View>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/noPoverty.png')} style={{width:wp('18%'),height:wp("8%"),marginTop:wp("5.5%"),marginLeft:wp("1%")}}/>
                        </View>
                        <Text style={styles.imgtext}>No Poverty</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/zeroHunger.png')} style={{width:wp('15%'),height:wp("12%"),marginTop:wp("3.5%"),marginLeft:wp("2.7%")}}/>
                        </View>
                        <Text style={{color:'#D5A600',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Zero Hunger</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/goodHealth.png')} style={{width:wp('15%'),height:wp("12%"),marginTop:wp("3.5%"),marginLeft:wp("2.7%")}}/>
                        </View>
                        <Text style={{color:'#00A94A',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Good Health{"\n"}& Well-being</Text>
                        </View>
                       </Row>
                       {/* Second row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/education.png')} style={{width:wp('15%'),height:wp("15%"),marginTop:wp("0.5%"),marginLeft:wp("2.7%")}}/>
                        </View>
                        <Text style={{color:'#D20024',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>     Quality {"\n"}   Education</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/gender.png')} style={{width:wp('11%'),height:wp("13.5%"),marginTop:wp("3.5%"),marginLeft:wp("4.5%")}}/>
                        </View>
                        <Text style={{color:'#FF0000',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Gender Equality</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/cleanWater.png')} style={{width:wp('10%'),height:wp("13.4%"),marginTop:wp("3.8%"),marginLeft:wp("4.9%")}}/>
                        </View>
                        <Text style={{color:'#00A9DC',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Clean Water {"\n"}& Sanitation</Text>
                        </View>
                       </Row>
                       {/* Third row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/cleanEnergy.png')} style={{width:wp('15%'),height:wp("13%"),marginTop:wp("3.5%"),marginLeft:wp("2.3%")}}/>
                        </View>
                        <Text style={{color:'#FFBE00',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Affordable &{"\n"}Clean Energy</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/decentWork.png')} style={{width:wp('12.5%'),height:wp("12%"),marginTop:wp("2.5%"),marginLeft:wp("3.4%")}}/>
                        </View>
                        <Text style={{color:'#9A0034',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Decent Work{"\n"}& Economic{"\n"}    Growth</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/industry.png')} style={{width:wp('12.8%'),height:wp("14%"),marginTop:wp("2.5%"),marginLeft:wp("3.5%")}}/>
                        </View>
                        <Text style={{color:'#FF6000',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>   Industry,{"\n"}Innovation &{"\n"}Infrastructure</Text>
                        </View>
                       </Row>
                       {/* Row 4 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/reduce.png')} style={{width:wp('15%'),height:wp("13%"),marginTop:wp("2.8%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#F6007E',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>   Reduce {"\n"}Inequalities</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/community.png')} style={{width:wp('15%'),height:wp("13%"),marginTop:wp("2.8%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#FF9E00',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Sustainable{"\n"}    Cities &{"\n"}Community</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/responsible.png')} style={{width:wp('12%'),height:wp("13%"),marginTop:wp("3%"),marginLeft:wp("4.5%")}}/>
                        </View>
                        <Text style={{color:'#D49000',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Responsible,{"\n"}Consumption{"\n"}& Production</Text>
                        </View>
                       </Row>
                       {/* Row 5 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner5}>
                        <Image source={require('./img/climate.png')} style={{width:wp('15%'),height:wp("8%"),marginTop:wp("5.5%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#30803F',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>   Reduce {"\n"}Inequalities</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner5}>
                        <Image source={require('./img/life.png')} style={{width:wp('15%'),height:wp("13%"),marginTop:wp("2.8%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#0070BE',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Sustainable{"\n"}    Cities &{"\n"}Community</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner5}>
                        <Image source={require('./img/lifeonland.png')} style={{width:wp('15%'),height:wp("13%"),marginTop:wp("2.8%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#00C04A',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Responsible,{"\n"}Consumption{"\n"}& Production</Text>
                        </View>
                       </Row>
                       {/* Row6 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner6}>
                        <Image source={require('./img/peace.png')} style={{width:wp('15%'),height:wp("13%"),marginTop:wp("2.8%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#0F4A8C',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Peace, Justice{"\n"}    & Strong{"\n"}   Instituions</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner6}>
                        <Image source={require('./img/partnership.png')} style={{width:wp('15%'),height:wp("14%"),marginTop:wp("2.8%"),marginLeft:wp("2.5%")}}/>
                        </View>
                        <Text style={{color:'#292F6D',fontSize:wp("3%"),marginTop:wp("25%"),marginLeft:wp("2.5%")}}>Partnerships{"\n"}for the Goals</Text>
                        </View>
                       </Row>
                       <View>
                  <Button containerStyle={{marginTop:wp("6%"), marginLeft:wp("21%"), height:wp('9%'), width:wp("35%"), marginBottom:wp("5%"), overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.nextBtn} onPress={() => Actions.grouplist()}>
                    <Text style={styles.nextBtn}>Next</Text>
                  </Button>
                       </View>
                    </View>
                {/* </View> */}
             </ScrollView>
        )
    }
}

export default GlobalGoalsComponents;
