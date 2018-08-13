import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,  Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native';
import Button from 'react-native-button';
import { TextField } from 'react-native-material-textfield'; //Text field
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button' // Radio Button
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //Keyboard auto scroll on input
// import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'relative',
    width: wp('100%'),
    height: hp('100%'),
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
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    marginLeft: moderateScale(40),
    // marginTop: -370,
    // width: SCREEN_WIDTH,
    // flexDirection: 'row',
  },
      textView: {
        // paddingTop: 80,
        // width: 100,
        // height: 100,
        // backgroundColor: '#ffffff',
      },
       text:{
        marginTop:wp("23%"),
        marginLeft:wp('18%'),
        width: wp('100%'),
        fontSize:wp("5%"),
        color: '#ffffff',
       },
       bgForm:{
        flex:1,
        marginTop:wp("20%"),
        backgroundColor:'#EDF1F5',
        width:wp("100%"),
        height:wp("100%"),
        position:'relative',
        overflow:'hidden',

       },   
       form:{
        flex:1,
        width: wp("88%"),
        paddingTop:wp("20%"),
        paddingLeft:wp("13%"),
       },
       labelText:{
           color:'#AEB0B1',
       },
       inputContainer:{
              marginTop:-15,
        //    paddingTop:5,
        //    backgroundColor:'red',
        //    height: 0,
       },
       readandagree:{
           fontSize:wp("4%"),
           marginTop:wp("-1%"),
           color:'#AEB0B1',
       },
       radioGroup:{
           marginTop:wp("30%"),
           marginLeft:wp("18%")
       },
       signupBtn:{
        color:'#ffffff',
      },
      signupText:{
        color:'#ffffff',
        margin:wp("2%"),
        paddingLeft:wp("10%"),
        fontSize:wp("4%"),
      }
  });

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailorPhone:'',
            password:'',
            confirmPassword:'',
            radioValue:0,
            secureTextEntry: true,
        }
        this.onAccessoryPress = this.onAccessoryPress.bind(this);
        this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
    }
    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
      }
    renderPasswordAccessory() {
        let { secureTextEntry } = this.state;
  
        let name = secureTextEntry?
          'visibility':
          'visibility-off';
  
        return (
          <MaterialIcon
            size={24}
            name={name}
            color={TextField.defaultProps.baseColor}
            onPress={this.onAccessoryPress}
            suppressHighlighting
          />
        );
      }

    render(){
        const {firstName, lastName, emailorPhone, password, confirmPassword, radioValue,secureTextEntry} = this.state
        var radio_props = [
            {label: 'param1', value: 0 },
          ];
        return(
            <View style={styles.container}>
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.loginbtnContainer}>
                <View style={{marginLeft:wp('-10%')}}>
                  <Button containerStyle={{paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent'}} onPress={() => Actions.signup()}
                    style={{color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"),}}>
                    Signup
                  </Button>
                  </View>
                  <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
                  <Image source={require('./img/logo.png')} style={{width: wp('15%'),flex:1, marginTop: wp('-10%')}} />
                  </View>
                  </View>
                  <View styles={styles.textView}>
                     <Text style={styles.text}>What will your effect be today?</Text>
                  </View>
                  <View style={styles.bgForm}>
                   <View style={styles.form}>
                   {/* // <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>  */}
                   {/* <KeyboardAwareScrollView> */}
                  <TextField label={<Text style={styles.labelText}>Email or Phone</Text>} value={emailorPhone} onChangeText={ (emailorPhone) => this.setState({ emailorPhone }) }  lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer}/>
                  <TextField label={<Text style={styles.labelText}>Password</Text>} value={password} onChangeText={ (password) => this.setState({ password }) }  lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer} renderAccessory={this.renderPasswordAccessory} returnKeyType='done' secureTextEntry={secureTextEntry} autoCapitalize='none' autoCorrect={false} enablesReturnKeyAutomatically={true} clearTextOnFocus={true}/>
                  {/* </KeyboardAwareScrollView> */}
                  <RadioGroup style={styles.radioGroup}> 
                    <RadioButton value={'item1'} >
                        <Text style={styles.readandagree}>Remember me</Text>
                     </RadioButton>
                    </RadioGroup>
                    <Button containerStyle={{marginTop:wp("6%"), marginLeft:wp("18%"), height:wp('10%'), width:wp("35%"),  overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.signupBtn} onPress={() => Actions.checkingevent()}>
                     <Text style={styles.signupText}>Log In</Text>
                   </Button>
                  </View>
                    </View>
            </View>
        )
    }
}
export default LoginComponent;