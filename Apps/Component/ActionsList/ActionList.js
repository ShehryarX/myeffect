import React,{Component} from 'react';
import { StyleSheet,Modal, Text, View, Alert, Animated, Image,ScrollView, TouchableHighlight,TouchableOpacity,Dimensions, KeyboardAvoidingView,TextInput,TouchableWithoutFeedback} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row'; 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button' // Radio Button
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

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
        fontSize:wp("5%"),
        color:'#00B0F5',
        marginTop:wp("-1%"),
        marginLeft:wp("13%"),
    },
    line:{
        color:'#00B0F5',
        fontSize:20,
        marginTop:0,
        marginLeft:15
      },
      challenges:{
        fontSize:wp("5%"),
        color:'#1B499B',
        marginTop:wp("-17"),
        marginLeft:wp("40%")
      },
      groups:{
        fontSize:wp("5%"),
        color:'#1B499B',
        marginTop:wp("-17%"),
        marginLeft:wp("74%")
      },
      line2:{
        color:'#EDF1F5',
        marginTop:wp("-6%"),
        fontSize:wp("3%")
      },
      line3:{
        color:'#EDF1F5',
        marginTop:wp("0.1%"),
        fontSize:wp("3%")
      },
      SectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        // height: 40,
        borderRadius: 10,
        marginTop:wp("1%"),
        width:wp("93%"),
        marginLeft:17,
    // borderRadius:100,
    shadowOffset: {width: 0, height: 5}, 
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // android (Android +5.0)
    elevation: 5,
        margin: wp("1%")
    },
    ImageStyle: {
        marginLeft: wp("2%"),
        marginTop:wp('2%'),
        height: wp("6%"),
        width: wp("6%"),
        resizeMode : 'stretch',
    },
    ImageStyle2: {
        height: wp("8%"),
        width: wp("8%"),
        // resizeMode : 'stretch',
    },
    filterbtn:{
        marginTop:4,
        marginLeft:wp("29%"),
    },
    input:{
        width:150,
        height: 35,
        marginLeft:10,
        backgroundColor:'#FFFFFF'
      },
      middletxt:{
        color:'#1B499B',
        marginTop:wp("-16"),
        fontSize:wp("4%"),
        marginLeft:wp("22%")
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
    modalContainer:{
        backgroundColor:'#EDF1F5',
        position: 'relative',
        marginTop: wp("32%"),
        marginLeft:wp("4%"),
        width:wp("94%"),
        // opacity:0.7,
        height:300,
        borderRadius:10,
        shadowOffset: {width: 0, height: 13}, 
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 5,
    },
    filterActions:{
        color:'#235CA5',
        fontSize:wp("5%"),
        marginTop:wp("2%"),
        marginLeft:wp("30%")
    },
    filterimg:{
        height: wp("8%"),
        width: wp("8%"),
    },
    filterimgcontainer:{
        marginTop:wp("-8"),
        marginLeft:wp("84%")
    },
    categoryText:{
        color:"#235CA5",
        fontSize:wp('4%'),
        marginLeft:wp("10%")
    },
    arrowdownCategory:{
        width:wp("7%"),
        height:wp("7%")
    },
    arrowdownCategoryContainer:{
        marginTop:wp("-5%"),
        marginLeft:wp("30%"),
    },
    filledCircleImg:{
        marginLeft:wp("10%"),
        marginTop:wp("2%"),
        width:wp("5%"),
        height:wp("5%")
    },
    categoryAllText:{
        color:'#235CA5',
        marginLeft:wp("20%"),
        marginTop:wp("-5%"),
        fontSize:wp("4%")
    },
    actionTypeText:{
        color:"#235CA5",
        marginTop:wp('14%'),
        fontSize:wp('4%'),
        marginLeft:wp("10%")
    },
    arrowdownActionType:{
        width:wp("7%"),
        height:wp("7%")
    },
    actionarrowdowncontainer:{
        marginTop:wp("-5%"),
        marginLeft:wp("33%"),
    },
    ActionTypeAllText:{
        color:'#235CA5',
        marginLeft:wp("20%"),
        marginTop:wp("-5%"),
        fontSize:wp("4%")
    },
    findActionbtn:{
        color:'#235CA5',
    },
    radioGroup:{
        marginLeft:wp("6%"),
        marginTop:wp("-1%")
    },
    CategoryRadioBtn:{
        marginTop:wp("0.1%"),
        marginBottom:wp('-1%')
    },
    categoryRadioBtnText:{
        color:"#235CA5",
        fontSize:14
    }
    })

class ActionsList extends Component{
    constructor(props){
        super(props)
        this.state={
            search:'',
            modalVisible: false,
            categorybtn:'',
            actionTypebtn:'',
            categoryAll:false,
            ActionTypeAll:false
        }
    }
    setModalVisible = ()=>{
        this.setState({modalVisible: true});
      }
      setModalHide = ()=>{
        this.setState({modalVisible: false});
      }
    //   Category radio show
     categoryradioshow = ()=>{
        this.setState({categoryAll: true});
     }
    //  Category radio hide
    cateogryradiohide = ()=>{
        this.setState({categoryAll: false});
    }
    // Action radio show
    actionradioshow= ()=>{
        this.setState({ActionTypeAll: true});
    }
    // Action radio hide
    actionradiohide = ()=>{
        this.setState({ActionTypeAll: false});
    }
    render(){
        const {modalVisible,categorybtn,actionTypebtn,categoryAll,ActionTypeAll} = this.state
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
                  <View>
                     <Text style={styles.actions}>Actions</Text>
                     <Text style={{marginLeft:wp("12.5%"),color:'#00B0F5',fontSize:wp("12.5%"),marginTop:wp('-6.5%')}}>──</Text>
                     <View>
                     <Text style={styles.challenges}>Challenges</Text>
                     </View>
                     <View>
                     <Text style={styles.groups}>Groups</Text>
                     </View>  
                     <Text style={styles.line2}>────────────────────────────────────────────────</Text>                
                  </View>
                  <View style={styles.SectionStyle}>
                       <Image source={require('./img/search.png')} style={styles.ImageStyle} />
                       <TextInput  style={styles.input}  underlineColorAndroid = "transparent"  placeholderTextColor = "#CDCDCD" onChangeText={(search) => this.setState({search})} value={this.state.search} />
                  <View style={styles.filterbtn}>
                  <Button  onPress={this.setModalVisible}>
                     <Image source={require('./img/filter.png')} style={styles.ImageStyle2} />
                     </Button>
                  </View>
                  </View>

                   {
                       (modalVisible)?
                       <Modal           animationType="fade"
                       transparent={true}
                       style={styles.modal}
                       visible={this.state.modalVisible}>
                  <View style={styles.modalContainer}>
                  <ScrollView>
                    <Text style={styles.filterActions}>Filter Actions</Text> 
                    <View style={styles.filterimgcontainer}> 
                        <Button onPress={this.setModalHide}>
                            <Image source={require('./img/filter.png')} style={styles.filterimg} />     
                        </Button>
                    </View> 
                     {/* List */}
                     {
                         (categoryAll)?
                         <View>
                         <Text style={styles.categoryText}>Category</Text>
                         <View style={styles.arrowdownCategoryContainer}>
                        <Button onPress={this.cateogryradiohide}>
                         <Image source={require('./img/arrowup.png')} style={styles.arrowdownCategory} />
                         </Button>
                         </View>
                         <Image source={require('./img/filled-circle.png')} style={styles.filledCircleImg} />
                         <Text style={styles.categoryAllText}>All</Text>   
                         <RadioGroup onSelect={(indexedDB,value)=>this.setState({categorybtn:value})} size={17} style={styles.radioGroup}> 
                         <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'genral'} >
                             <Text style={styles.categoryRadioBtnText}>General</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'wildlife'} >
                             <Text style={styles.categoryRadioBtnText}>Animals & Wildlife</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Arts'} >
                             <Text style={styles.categoryRadioBtnText}>Arts & Culture</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Bussiness'} >
                             <Text style={styles.categoryRadioBtnText}>Bussiness &Entreprenuership</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Animals'} >
                             <Text style={styles.categoryRadioBtnText}>Animals & Wildlife</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Children'} >
                             <Text style={styles.categoryRadioBtnText}>Children & Youth</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Education'} >
                             <Text style={styles.categoryRadioBtnText}>Education & Research</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Environment'} >
                             <Text style={styles.categoryRadioBtnText}>Environment</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Health'} >
                             <Text style={styles.categoryRadioBtnText}>Health & Wellness</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Medicine'} >
                             <Text style={styles.categoryRadioBtnText}>Medicine & Research</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Human'} >
                             <Text style={styles.categoryRadioBtnText}>Human Rights & Advocacy</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'International'} >
                             <Text style={styles.categoryRadioBtnText}>International Relief & Development</Text>
                          </RadioButton>
                          <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Rights'} >
                             <Text style={styles.categoryRadioBtnText}>Human Rights & Advocacy</Text>
                          </RadioButton>
                         </RadioGroup> 
                         </View>
                         :
                         <View>
                 <Text style={styles.categoryText}>Category</Text>
                    <View style={styles.arrowdownCategoryContainer}>
                        <Button onPress={this.categoryradioshow}>
                             <Image source={require('./img/arrowdown.png')} style={styles.arrowdownCategory} />
                        </Button>                    
                    </View>
                    <Image source={require('./img/filled-circle.png')} style={styles.filledCircleImg} />
                    <Text style={styles.categoryAllText}>All</Text> 
                    </View>
                     }
                    {
                        (ActionTypeAll)?
                        <View>
                        <Text style={styles.actionTypeText}>Action Type</Text>
                        <View style={styles.actionarrowdowncontainer}>
                        <Button onPress={this.actionradiohide}>
                    <Image source={require('./img/arrowup.png')} style={styles.arrowdownActionType} />
                    </Button>
                    </View>
                    <Image source={require('./img/filled-circle.png')} style={styles.filledCircleImg} />
                    <Text style={styles.ActionTypeAllText}>All</Text>  
                    <RadioGroup onSelect={(indexedDB,value)=>this.setState({actionTypebtn:value})} size={17} style={styles.radioGroup}> 
                    <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Volunteer'} >
                        <Text style={styles.categoryRadioBtnText}>Volunteer</Text>
                     </RadioButton>
                     <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Donation'} >
                        <Text style={styles.categoryRadioBtnText}>Donation</Text>
                     </RadioButton>
                     <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Training'} >
                        <Text style={styles.categoryRadioBtnText}>Training</Text>
                     </RadioButton>
                     <RadioButton style={styles.CategoryRadioBtn} color="#00B0F5" value={'Participation'} >
                        <Text style={styles.categoryRadioBtnText}>Participation</Text>
                     </RadioButton>
                     </RadioGroup>
                     </View>
                        :
                        <View>
                        <Text style={styles.actionTypeText}>Action Type</Text>
                        <View style={styles.actionarrowdowncontainer}>
                        <Button onPress={this.actionradioshow}>
                        <Image source={require('./img/arrowdown.png')} style={styles.arrowdownActionType} />
                        </Button>
                        </View>
                        <Image source={require('./img/filled-circle.png')} style={styles.filledCircleImg} />
                        <Text style={styles.ActionTypeAllText}>All</Text>  
                        </View>
                    }
                     <Button containerStyle={{padding:wp("2%"), width:wp("35%"), marginTop:wp("15%"), marginBottom:wp("8%"), marginLeft:wp("30%"), overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.findActionbtn} onPress={() => Actions.actionlist()}>
                    Find Action
                  </Button>
                  </ScrollView>
                    </View> 
                   </Modal>
                       :
                      this.state.modalVisible = false
                   }

                  <View>
                      {/* <Button onPress={() => Actions.globalgoals()}> */}
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
                  {/* </Button> */}
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
            {/* </View> */}
             </ScrollView>
        )
    }
}
export default ActionsList;