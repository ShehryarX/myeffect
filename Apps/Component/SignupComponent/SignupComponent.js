import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,  Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native';
import Button from 'react-native-button';
import { TextField } from 'react-native-material-textfield'; //Text field
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button' // Radio Button
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //Keyboard auto scroll on input
// import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import styled from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux'; // New code
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from '../scaling'

// import Container from './style'

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
        fontSize:wp("4%"),
        color: '#ffffff',
       },
       text2:{
        marginTop:wp("-2%"),
        marginLeft:wp('20%'),
        width: wp('100%'),
        fontSize:wp("4%"),
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
       paddingTop:wp("10%"),
       paddingLeft:wp("13%"),
       },
       labelText:{
           color:'#AEB0B1',
       },
       inputContainer:{
              marginTop:-25,
        //    paddingTop:5,
        //    backgroundColor:'red',
        //    height: 0,
       },
       radiobtn:{
           backgroundColor:'red',
           width:50,
           height:50
       },
       readandagree:{
           fontSize:wp("3%"),
           color:'#AEB0B1',
       },
       radioGroup:{
           marginLeft:wp("-5%")
       },
       termsCondition:{
         color:'#1D54A0',
       },
       signupBtn:{
        color:'#ffffff',
      },
      signupText:{
          color:'#ffffff',
          margin:wp("2%"),
          paddingLeft:wp("9%"),
          fontSize:wp("4%"),
      }
  });



class SignupComponent extends Component{
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
        const {firstName, lastName, emailorPhone, password, confirmPassword, radioValue, secureTextEntry} = this.state
        var radio_props = [
            {label: 'param1', value: 0 },
          ];
        return(
            <View style={styles.container}>
                <Image source={require('./img/bg.png')} style={styles.backgroundImage} />
                <View style={styles.loginbtnContainer}>
                <View style={{marginLeft:wp('-10%')}}>
                  <Button containerStyle={{paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent'}} onPress={() => Actions.login()}
                    style={{color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"),}}>
                    Login
                  </Button>
                  </View>
                  <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
                  <Image source={require('./img/logo.png')} style={{width: wp('15%'),flex:1, marginTop: wp('-10%')}} />
                  </View>
                  </View>
                  <View styles={styles.textView}>
                     <Text style={styles.text}>Join MyEffect to discover, track{"\n"}</Text>
                     <Text style={styles.text2}>and share your effect in the world</Text>
                  </View>
                  <View style={styles.bgForm}>
                   <View style={styles.form}>
                   {/* // <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>  */}
                   {/* <KeyboardAwareScrollView> */}
                  <TextField label={<Text style={styles.labelText}>First name</Text>} value={firstName} onChangeText={ (firstName) => this.setState({ firstName }) } lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer}/>
                  <TextField label={<Text style={styles.labelText}>Last name</Text>} value={lastName} onChangeText={ (lastName) => this.setState({ lastName }) }  lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer}/>
                  <TextField label={<Text style={styles.labelText}>Email or Phone</Text>} value={emailorPhone} onChangeText={ (emailorPhone) => this.setState({ emailorPhone }) }  lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer}/>
                  <TextField label={<Text style={styles.labelText}>Password</Text>} value={password} onChangeText={ (password) => this.setState({ password }) }  lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer} renderAccessory={this.renderPasswordAccessory} returnKeyType='done' secureTextEntry={secureTextEntry} autoCapitalize='none' autoCorrect={false} enablesReturnKeyAutomatically={true} clearTextOnFocus={true}/>
                  <TextField label={<Text style={styles.labelText}>Confirm Password</Text>} value={confirmPassword} onChangeText={ (confirmPassword) => this.setState({ confirmPassword }) }  lineWidth={1.5} activeLineWidth={2} textColor="#1B499B" tintColor="#1B499B" baseColor="#FBE32E" animationDuration={200} inputContainerStyle={styles.inputContainer} renderAccessory={this.renderPasswordAccessory} returnKeyType='done' secureTextEntry={secureTextEntry} autoCapitalize='none' autoCorrect={false} enablesReturnKeyAutomatically={true} clearTextOnFocus={true}/>
                  {/* </KeyboardAwareScrollView> */}
                  <RadioGroup style={styles.radioGroup}> 
                    <RadioButton value={'item1'} >
                        <Text style={styles.readandagree}>I have read and agree MyEffet <Text style={styles.termsCondition}>Terms and Conditions</Text></Text>
                     </RadioButton>
                    </RadioGroup>
                    <Button containerStyle={{marginTop:wp("6%"), marginLeft:wp("18%"), height:wp('10%'), width:wp("35%"),  overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.signupBtn} onPress={() => Actions.globalgoals()}>
                     <Text style={styles.signupText}>Sign Up</Text>
                   </Button>
                  </View>
                    </View>
            </View>
        )
    }
}
export default SignupComponent;