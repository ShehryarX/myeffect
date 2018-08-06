import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
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
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        // marginTop:10,
        height:300,
        // justifyContent: 'flex-end',
        // width:370,
      },
      arrowbtnContainer:{
        position:'relative',
        paddingLeft:10,
        width:250,
        flexDirection: 'row',
      },
      content:{
        marginTop:0,
        backgroundColor:'#EDF1F5',
        width:500,
        // height:750,
        position:'relative',
       flex:1,
    //    width: 400,
       paddingTop:10,
       paddingLeft:38,
       },
       firsttext:{
           color:'#737373',
           paddingLeft:17,
       },
       secondtext:{
        color:'#737373',
        paddingTop:25,
        paddingLeft:110
       },
       studenttxt:{
           color:'#1D529F',
           paddingTop:5,
           paddingLeft:114,
       },
       dot:{
           marginLeft:35,
       },
       thirdtxt:{
           color:'#959595',
           paddingLeft:130,
           paddingTop:10,
       },
       schooltxt:{
           color:'#1D529F',
        //    paddingLeft:40,
           paddingTop:5,
        justifyContent:'center',
        textAlign:'center'

       },
       school:{
           backgroundColor:'#FFFFFF',
           width:150,
           marginLeft:75,
           height:30,
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
       }
    })

class StudentComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.grouplist()}
                    style={{color:'#FCDC28'}}>
                  <Image source={require('./img/arrow.png')} style={{width:30,height:20,marginLeft:15}}/>
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:70,marginTop:15}} />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.firsttext}>We would Like to get to know you better{'\n'}in order to give you the best experience</Text>
                    <Text style={styles.secondtext}>I am a(n)</Text>
                    <Text style={styles.studenttxt}>Student</Text>
                    <Row>
                        <View>
                        <Image source={require('./img/student1.png')} style={{width:170,height:170,marginTop:5,marginLeft:-137,borderRadius:150}}/>
                        <Image source={require('./img/tick.png')} style={{width:38,height:38,marginTop:-40,marginLeft:-5,borderRadius:150}}/>
                        </View>
                        <View>
                        <Image source={require('./img/student2.png')} style={{width:170,height:170,marginTop:5,marginLeft:25,borderRadius:150}}/>    
                        <Image source={require('./img/greentick.png')} style={{width:38,height:38,marginTop:-40,marginLeft:160,borderRadius:150}}/>
                        <PageControl numberOfPages={4} currentPage={0} style={styles.dot} pageIndicatorTintColor='white'currentPageIndicatorTintColor='#959595' indicatorStyle={{borderRadius: 5}}currentIndicatorStyle={{borderRadius: 5}}
                   indicatorSize={{width:8, height:8}}/>
                        </View>
                        <View>
                        <Image source={require('./img/student3.png')} style={{width:170,height:170,marginTop:5,marginLeft:25,borderRadius:150}}/>    
                        </View>
                    </Row>
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
                    <Button containerStyle={{padding:10, width:120, marginTop:30, marginBottom:40, marginLeft:90, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.donebtn} onPress={() => Actions.checkingevent()}>
                    Done
                  </Button>
                  </View>
            </View>
            </ScrollView>
        )
    }
}
export default StudentComponent;