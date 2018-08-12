import React,{Component} from 'react';
import { StyleSheet,Modal, Text, View, Alert, Animated, Image,ScrollView, TouchableHighlight,TouchableOpacity,Dimensions, KeyboardAvoidingView,TextInput,TouchableWithoutFeedback} from 'react-native';
import Button from 'react-native-button';
import Row from 'react-native-row';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button' // Radio Button
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux'; // New code

const styles = StyleSheet.create({
    container: { flex: 1 },
    textWrapper: {
      height: hp('70%'), // 70% of height device screen
      width: wp('80%')   // 80% of width device screen
    },
    myText: {
      fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    arrowbtnContainer:{
        position:'relative',
        paddingLeft:10,
        flexDirection: 'row',
        
      },
      profiletxt:{
          fontSize:hp('2'),
          color:'#00B0F5',
          marginTop:-25,
          marginLeft:50,
      },
      actions:{
        fontSize:18,
        color:'#00B0F5',
        marginTop:-15,
        marginLeft:45,
    },
    line:{
        color:'#00B0F5',
        fontSize:20,
        marginTop:0,
        marginLeft:15
      },
      challenges:{
        fontSize:18,
        color:'#1B499B',
        marginTop:-59,
        marginLeft:140
      },
      groups:{
        fontSize:18,
        color:'#1B499B',
        marginTop:-59,
        marginLeft:260
      },
      line2:{
        color:'#EDF1F5',
        marginTop:-27
      },
      line3:{
        color:'#EDF1F5',
        marginTop:0
      },
      SectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        // height: 40,
        borderRadius: 10,
        marginTop:10,
        width:325,
        marginLeft:17,
    // borderRadius:100,
    shadowOffset: {width: 0, height: 5}, 
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // android (Android +5.0)
    elevation: 5,
        margin: 10
    },
    ImageStyle: {
        marginLeft: 7,
        marginTop:9,
        height: 18,
        width: 28,
        resizeMode : 'stretch',
    },
    ImageStyle2: {
        marginTop:4,
        height: 28,
        width: 28,
        resizeMode : 'stretch',
    },
    input:{
        width:150,
        height: 35,
        marginLeft:10,
        backgroundColor:'#FFFFFF'
      },
      middletxt:{
        color:'#1B499B',
        marginTop:-55,
        fontSize:16,
        marginLeft:90
    },
    person:{
        marginTop:-30,
        marginLeft:286
    },
    persontxt:{
        color:'#00B0F5',
        fontSize:13,
        marginTop:-15,
        marginLeft:38
    },
    modalContainer:{
        backgroundColor:'#EDF1F5',
        position: 'absolute',
        marginTop: 112,
        marginLeft:16,
        width:327,
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
        fontSize:17,
        marginTop:10,
        marginLeft:110
    },
    filterimg:{
        height: 28,
        width: 28,
    },
    filterimgcontainer:{
        marginTop:-25,
        marginLeft:290
    },
    categoryText:{
        color:"#235CA5",
        fontSize:15,
        marginLeft:30
    },
    arrowdownCategory:{
        width:20,
        height:20
    },
    arrowdownCategoryContainer:{
        marginTop:-18,
        marginLeft:100,
    },
    filledCircleImg:{
        marginLeft:30,
        marginTop:8,
        width:17,
        height:17
    },
    categoryAllText:{
        color:'#235CA5',
        marginLeft:60,
        marginTop:-18
    },
    actionTypeText:{
        color:"#235CA5",
        fontSize:15,
        marginTop:45,
        marginLeft:30
    },
    arrowdownActionType:{
        width:20,
        height:20
    },
    actionarrowdowncontainer:{
        marginTop:-18,
        marginLeft:120,
    },
    ActionTypeAllText:{
        color:'#235CA5',
        marginLeft:60,
        marginTop:-18
    },
    findActionbtn:{
        color:'#235CA5',
    },
    radioGroup:{
        marginLeft:20,
        marginTop:-5
    },
    CategoryRadioBtn:{
        marginTop:0,
        marginBottom:-11
    },
    categoryRadioBtnText:{
        color:"#235CA5",
        fontSize:14
    }
  });

class GroupComponent extends Component{
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
            <View style={styles.container}>
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
                  <View>
                     <Text style={styles.actions}>Actions</Text>
                     <Text style={{marginLeft:258,color:'#00B0F5',fontSize:45,marginTop:-24,}}>──</Text>
                     <View>
                     <Text style={styles.challenges}>Challenges</Text>
                     </View>
                     <View>
                     <Text style={styles.groups}>Groups</Text>
                     </View>  
                     <Text style={styles.line2}>────────────────────────────────────</Text>                
                  </View>
                  <View style={styles.SectionStyle}>
                       <Image source={require('./img/search.png')} style={styles.ImageStyle} />
                       <TextInput  style={styles.input}  underlineColorAndroid = "transparent"  placeholderTextColor = "#CDCDCD" onChangeText={(search) => this.setState({search})} value={this.state.search} />
                  <View style={{marginLeft: 90,}}>
                  <Button onPress={this.setModalVisible}>
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
                     <Button containerStyle={{padding:8, width:130, marginTop:50, marginBottom:20, marginLeft:100, overflow:'hidden', borderRadius:100, backgroundColor: '#FEE000'}} style={styles.findActionbtn} onPress={() => Actions.actionlist()}>
                    Find Action
                  </Button>
                  </ScrollView>
                    </View> 
                   </Modal>
                       :
                      this.state.modalVisible = false
                   }
                   <View>
                   <Image source={require('./img/happyhippie.png')}  style={{width:56,marginTop:7,height:56,marginLeft:20, borderRadius:100}}/>
                   <View>
                   <Text style={styles.middletxt}>Happy Hippie Foundation</Text>
                   <Image source={require('./img/profiletick.png')}  style={{width:15,marginTop:-17,height:15,marginLeft:275, borderRadius:100}}/>
                   <View style={styles.person}>
                  <Image source={require('./img/person.png')} style={{width:20,marginTop:10,height:20,marginLeft:15}}/>
                  <Image source={require('./img/person.png')} style={{width:19,marginTop:-16,height:12,marginLeft:22}}/>
                  <Text style={styles.persontxt}>110K</Text>
                  </View>
                   </View>
                   </View>
          </View>
        )
    }
}
export default GroupComponent;