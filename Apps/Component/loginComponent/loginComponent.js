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
      textView: {
        // paddingTop: 80,
        // width: 100,
        // height: 100,
        // backgroundColor: '#ffffff',
      },
       text:{
        marginTop:50,
        marginLeft:50,
        fontSize:20,
        color: '#ffffff',
       },
       bgForm:{
        marginTop:90,
        backgroundColor:'#EDF1F5',
        width:500,
        height:400,
        position:'relative',
        overflow:'hidden',

       },   
       form:{
       flex:1,
       width: 300,
       paddingTop:50,
       paddingLeft:60,
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
       readandagree:{
           fontSize:14,
           color:'#AEB0B1',
       },
       radioGroup:{
           marginTop:80,
           marginLeft:40
       },
       signupBtn:{
        color:'#ffffff',
      },
      signupText:{
          paddingTop:3,
          color:'#ffffff',
          margin:5,
          paddingLeft:38,
          fontSize:15,
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
                  <Button containerStyle={{marginLeft:-10, paddingTop:30, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.signup()}
                    style={{color:'#FCDC28'}}>
                    Signup
                  </Button>
                  <Image source={require('./img/logo.png')} style={{width:75,height:75,marginLeft:70,marginTop:15}} />
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
                    <Button containerStyle={{marginTop:10, marginLeft:50, height:40, width:125,  overflow:'hidden', borderRadius:120, backgroundColor: '#00B0F5'}} style={styles.signupBtn} onPress={() => Actions.checkingevent()}>
                     <Text style={styles.signupText}>Log In</Text>
                   </Button>
                  </View>
                    </View>
            </View>
        )
    }
}
export default LoginComponent;