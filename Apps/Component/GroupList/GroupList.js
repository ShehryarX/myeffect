import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,ScrollView,  Dimensions, KeyboardAvoidingView,TextInput} from 'react-native';
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
      arrowbtnContainer:{
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
           marginLeft:-15
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
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        // height: 40,
        borderRadius: 50 ,
        marginTop:10,
        width:325,
        marginLeft:-20,
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
             <ScrollView >
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.arrowbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.globalgoals()}
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
                       <Text style={styles.contentText}>Join groups that share your community passions and goals.</Text>
                       <View style={styles.SectionStyle}>
                       <Image source={require('./img/search.png')} style={styles.ImageStyle} />
                       <TextInput  style={styles.input}  underlineColorAndroid = "transparent" placeholder = "Search your Favorite Group" placeholderTextColor = "#CDCDCD" onChangeText={(search) => this.setState({search})}
        value={this.state.search}
      />
      </View>
                         <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/team.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,marginLeft:5}}>   Team {"\n"}MyEffect   </Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/support.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,paddingLeft:15}}>Myffect{"\n"}Support    </Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/social.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,paddingLeft:0}}>Social Works</Text>
                        </View>
                       </Row>
                       {/* Second row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/happy.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:78,marginLeft:1}}>Happy Hippie</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/youth.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:78,marginLeft:-3}}>Youth Council</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner2}>
                        <Image source={require('./img/wish.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:78,marginLeft:1}}>Make-A-Wish{"\n"}  Minnesota</Text>
                        </View>
                       </Row>
                       {/* Third row */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/oceans.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,marginLeft:5}}>Save the     {"\n"} Oceans</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/effect.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,paddingLeft:15}}> YOU{"\n"}Effect       </Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/calgary.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,marginLeft:0}}>Ecclesiastical{"\n"}   Calgary</Text>
                        </View>
                       </Row>
                       {/* Row 4 */}
                       <Row dial={1} flex>
                        <View>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/change.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,marginLeft:5}}>Triathlon for {"\n"}   Change</Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/tdsb.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,paddingLeft:20}}>TDSB    </Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View style={styles.rowConatiner4}>
                        <Image source={require('./img/country.png')} style={{width:65,height:65,marginTop:0,marginLeft:0,borderRadius:150}}/>
                        </View>
                        <Text style={{color:'#215BA4',fontSize:12,marginTop:85,paddingLeft:10}}>  Sleep{"\n"}Country</Text>
                        </View>
                       </Row>
                       <View>
                  <Button containerStyle={{padding:10, width:120, marginTop:30, marginBottom:30, marginLeft:80, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.nextBtn} onPress={() => Actions.student()}>
                    Next
                  </Button>
                       </View>
                    </View>
                {/* </View> */}
             </ScrollView>
        )
    }
}

export default GroupListComponents;
