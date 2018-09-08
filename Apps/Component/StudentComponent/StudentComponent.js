import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
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
           color:'#737373',
           fontSize:wp("4%"),
           paddingLeft:wp("5%"),
       },
       secondtext:{
        color:'#737373',
        fontSize:wp("4%"),
        paddingTop:wp("5%"),
        paddingLeft:wp("30%")
       },
       studenttxt:{
           color:'#1D529F',
           fontSize:wp("4%"),
           paddingTop:wp("1%"),
           paddingLeft:wp("30%"),
       },
       dot:{
           marginLeft:wp("10%"),
       },
       thirdtxt:{
           color:'#959595',
           paddingLeft:wp("36%"),
           paddingTop:wp("4.5%"),
           paddingBottom:wp("1%")
       },
       schooltxt:{
           color:'#1D529F',
        //    paddingLeft:40,
        paddingTop:wp("1.5%"),
        fontSize:wp("4%"),
        justifyContent:'center',
        textAlign:'center'

       },
       school:{
           backgroundColor:'#FFFFFF',
           width:wp("40%"),
           marginLeft:wp("21%"),
           height:wp("9%"),
           borderRadius:30,
           shadowOffset: {width: 0, height: 5}, 
           shadowOpacity: 0.5,
           shadowRadius: 4,
           // android (Android +5.0)
           elevation: 5,
               // margin: 10
               marginBottom:10,
       },
       donebtn:{
        color:'#ffffff',
        fontSize:wp("5%"),
        marginTop:wp("0.6%"),
        marginLeft:wp("12%")
       }
    })

class StudentComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView style={styles.container}>
            {/* <View style={styles.container}> */}
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
                    <Text style={styles.firsttext}>We would Like to get to know you better{'\n'}in order to give you the best experience</Text>
                     <Text style={styles.secondtext}>I am a(n)</Text>
                    <Text style={styles.studenttxt}>Student</Text>
                    <Row style={{marginLeft:wp("-10%")}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                        <Image source={require('./img/student1.png')} style={{width:wp("50%"),height:wp("50%"),marginTop:wp("1%"),marginLeft:wp("-0.1%"),borderRadius:150}}/>
                        <Image source={require('./img/tick.png')} style={{width:wp("10%"),height:wp("10%"),marginTop:wp("-10%"),marginLeft:wp("38%"),borderRadius:150}}/>
                        </View>
                        <View>
                        <Image source={require('./img/student2.png')} style={{width:wp("50%"),height:wp("50%"),marginTop:wp("1%"),marginLeft:wp("6%"),borderRadius:150}}/>    
                        <Image source={require('./img/greentick.png')} style={{width:wp("10%"),height:wp("10%"),marginTop:wp("-10%"),marginLeft:wp("45%"),borderRadius:150}}/>
                        </View>
                        <View>
                        <Image source={require('./img/student3.png')} style={{width:wp("50%"),height:wp("50%"),marginTop:wp("1%"),marginLeft:wp("8%"),borderRadius:150}}/>
                        <Image source={require('./img/tick.png')} style={{width:wp("10%"),height:wp("10%"),marginTop:wp("-10%"),marginLeft:wp("46%"),borderRadius:150}}/>    
                        </View>
                        </ScrollView>
                    </Row>
                    <View style={{marginTop:wp("2%"),marginLeft:wp("-17%")}}>
                    <PageControl numberOfPages={4} currentPage={0} style={styles.dot} pageIndicatorTintColor='white'currentPageIndicatorTintColor='#959595' indicatorStyle={{borderRadius: 5}}currentIndicatorStyle={{borderRadius: 5}}
                   indicatorSize={{width:8, height:8}}/>
                    </View>
                    <Text style={styles.thirdtxt}>Status</Text>
                    <View style={styles.school}>
                        <Text style={styles.schooltxt}>High School</Text>
                    </View>
                    <View style={styles.school}>
                        <Text style={styles.schooltxt}>University</Text>
                    </View>
                    <View style={styles.school}>
                        <Text style={styles.schooltxt}>Grad School</Text>
                    </View>
                    <View style={styles.school}>
                        <Text style={styles.schooltxt}>Other</Text>
                    </View>
                    <Button containerStyle={{marginTop:wp("6%"), marginLeft:wp("24%"), height:wp('9%'), width:wp("35%"), marginBottom:wp("5%"), overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.donebtn} onPress={() => Actions.checkingevent()}>
                    <Text style={styles.donebtn}>Done</Text>
                  </Button>
                  </View>
                  {/* </View> */}
            </ScrollView>
        )
    }
}
export default StudentComponent;