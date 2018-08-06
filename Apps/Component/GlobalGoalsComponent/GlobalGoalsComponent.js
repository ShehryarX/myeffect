import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView} from 'react-native';
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
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        // marginTop:10,
        height:300,
        // justifyContent: 'flex-end',
        // width:370,
      },
      loginbtnContainer:{
        position:'relative',
        paddingLeft:10,
        width:250,
        flexDirection: 'row',
      },
      text:{
        marginTop:10,
        marginLeft:65,
        fontSize:21,
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

        marginTop:50,
        backgroundColor:'#EDF1F5',
        width:500,
        // height:750,
        position:'relative',
       flex:1,
    //    width: 400,
       paddingTop:10,
       paddingLeft:38,
       },
       contentText:{
           fontSize:12,
           color:'#777777',
       },
       mainContainer:{
           marginLeft:43
       },
       mainContainer2:{
        marginLeft:43,
        marginTop:1
    },
       rowConatiner:{
           backgroundColor:'#FFFFFF',
           position: 'absolute',
           marginTop: 18,
           width:65,
           height:65,
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
        marginTop: 10,
        width:65,
        height:65,
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
     marginTop: 15,
     width:65,
     height:65,
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
    marginTop: 15,
    width:65,
    height:65,
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
   marginTop: 15,
   width:65,
   height:65,
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
   marginTop: 15,
   width:65,
   height:65,
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
    fontSize:12,
    marginTop:83,
    marginLeft:5
    },
    nextBtn:{
        color:'#ffffff',
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
             <ScrollView >
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.loginbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.signup()}
                    style={{color:'#FCDC28'}}>
                  <Image source={require('./img/arrow.png')} style={{width:30,height:20,marginLeft:15}}/>
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:70,marginTop:15}} />
                  </View>
                  <View>
                     <Text style={styles.text}>How do you want to make{"\n"}             <Text style={styles.otherText}>an impact?</Text></Text>
                  </View>
                {/* <View style={styles.bg}> */}
                    <View style={styles.content}>
                       <Text style={styles.contentText}>Select Global Goals that you are intrested in helping</Text>
                       <Row dial={1} flex>
                       <View>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/noPoverty.png')} style={{width:55,height:25,marginTop:20,marginLeft:5}}/>
                        </View>
                        <Text style={styles.imgtext}>No Poverty</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/zeroHunger.png')} style={{width:50,height:40,marginTop:10,marginLeft:7}}/>
                        </View>
                        <Text style={{color:'#D5A600',fontSize:12,marginTop:83,marginLeft:1}}>Zero Hunger</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner}>
                        <Image source={require('./img/goodHealth.png')} style={{width:50,height:40,marginTop:10,marginLeft:7}}/>
                        </View>
                        <Text style={{color:'#00A94A',fontSize:12,marginTop:83,marginLeft:1}}>Good Health{"\n"}& Well-being</Text>
                        </View>
                       </Row>
                       {/* Second row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/education.png')} style={{width:40,height:40,marginTop:8,marginLeft:14}}/>
                        </View>
                        <Text style={{color:'#D20024',fontSize:12,marginTop:78,marginLeft:1}}>     Quality {"\n"}   Education</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/gender.png')} style={{width:33,height:45,marginTop:10,marginLeft:18}}/>
                        </View>
                        <Text style={{color:'#FF0000',fontSize:12,marginTop:78,marginLeft:-8}}>Gender Equality</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/cleanWater.png')} style={{width:28,height:40,marginTop:15,marginLeft:19}}/>
                        </View>
                        <Text style={{color:'#00A9DC',fontSize:12,marginTop:78,marginLeft:1}}>Clean Water {"\n"}& Sanitation</Text>
                        </View>
                       </Row>
                       {/* Third row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/cleanEnergy.png')} style={{width:45,height:40,marginTop:12,marginLeft:11}}/>
                        </View>
                        <Text style={{color:'#FFBE00',fontSize:12,marginTop:85,marginLeft:1}}>Affordable &{"\n"}Clean Energy</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/decentWork.png')} style={{width:34,height:38,marginTop:10,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#9A0034',fontSize:12,marginTop:85,marginLeft:2}}>Decent Work{"\n"}& Economic{"\n"}    Growth</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner3}>
                        <Image source={require('./img/industry.png')} style={{width:35,height:37,marginTop:12,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#FF6000',fontSize:12,marginTop:85,marginLeft:5}}>   Industry,{"\n"}Innovation &{"\n"}Infrastructure</Text>
                        </View>
                       </Row>
                       {/* Row 4 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/reduce.png')} style={{width:45,height:40,marginTop:12,marginLeft:11}}/>
                        </View>
                        <Text style={{color:'#F6007E',fontSize:12,marginTop:85,marginLeft:5}}>   Reduce {"\n"}Inequalities</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/community.png')} style={{width:34,height:38,marginTop:10,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#FF9E00',fontSize:12,marginTop:85,marginLeft:2}}>Sustainable{"\n"}    Cities &{"\n"}Community</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/responsible.png')} style={{width:35,height:37,marginTop:12,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#D49000',fontSize:12,marginTop:85,marginLeft:5}}>Responsible,{"\n"}Consumption{"\n"}& Production</Text>
                        </View>
                       </Row>
                       {/* Row 5 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner5}>
                        <Image source={require('./img/climate.png')} style={{width:45,height:25,marginTop:20,marginLeft:11}}/>
                        </View>
                        <Text style={{color:'#30803F',fontSize:12,marginTop:85,marginLeft:5}}>   Reduce {"\n"}Inequalities</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner5}>
                        <Image source={require('./img/life.png')} style={{width:34,height:30,marginTop:18,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#0070BE',fontSize:12,marginTop:85,marginLeft:2}}>Sustainable{"\n"}    Cities &{"\n"}Community</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner5}>
                        <Image source={require('./img/lifeonland.png')} style={{width:35,height:37,marginTop:12,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#00C04A',fontSize:12,marginTop:85,marginLeft:5}}>Responsible,{"\n"}Consumption{"\n"}& Production</Text>
                        </View>
                       </Row>
                       {/* Row6 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner6}>
                        <Image source={require('./img/peace.png')} style={{width:45,height:25,marginTop:20,marginLeft:11}}/>
                        </View>
                        <Text style={{color:'#0F4A8C',fontSize:12,marginTop:80,marginLeft:0}}>Peace, Justice{"\n"}    & Strong{"\n"}   Instituions</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner6}>
                        <Image source={require('./img/partnership.png')} style={{width:34,height:30,marginTop:18,marginLeft:16}}/>
                        </View>
                        <Text style={{color:'#292F6D',fontSize:12,marginTop:80,marginLeft:2}}>Partnerships{"\n"}for the Goals</Text>
                        </View>
                       </Row>
                       <View>
                  <Button containerStyle={{padding:10, width:120, marginTop:30, marginBottom:30, marginLeft:80, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.nextBtn} onPress={() => Actions.grouplist()}>
                    Next
                  </Button>
                       </View>
                    </View>
                {/* </View> */}
             </ScrollView>
        )
    }
}

export default GlobalGoalsComponents;
