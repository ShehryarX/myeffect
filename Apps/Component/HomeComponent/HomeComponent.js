import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image,  Dimensions, ScrollView} from 'react-native';
import Button from 'react-native-button';
import PageControl from 'react-native-page-control'; //This library provide dots fro navigation
import { Actions } from 'react-native-router-flux'; // New code

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position:'absolute',
        justifyContent: 'flex-end',
        width:370,
      },
      content:{
        position:'absolute',
        paddingLeft:10,
        justifyContent: 'flex-end', 
        width:250,
      },
      content2:{
        position:'absolute',
        paddingLeft:10,
        justifyContent: 'flex-end', 
        width:270,
      },
      content3:{
        position:'absolute',
        paddingLeft:10,
        justifyContent: 'flex-end', 
        width:310,
      },
      content4:{
        position:'absolute',
        paddingLeft:10,
        justifyContent: 'flex-end', 
        width:310,
      },
      loginbtnContainer:{
        position:'relative',
        paddingLeft:10,
        marginTop:-370,
        width:250,
        flexDirection: 'row',
      },
      logo:{
        padding:20, 
        width:50,
        height:50, 
        position:'relative', 
        marginTop:-265,
      },
      text:{
        color:'#ffffff',
        fontSize: 36,
        marginTop:250,
      },
      text2:{
        color:'#ffffff',
        // fontWeight:'italic',
        fontSize: 26,
        marginTop:250,
      },
      text3:{
        color:'#ffffff',
        // fontWeight:'italic',
        fontSize: 30,
        marginTop:200,
      },
      text4:{
        color:'#ffffff',
        // fontWeight:'italic',
        fontSize: 15,
        marginTop:250,
      },
      signupBtn:{
        color:'#ffffff',
      },
      exploreBtn:{
        color:'#ffffff'
      },
      dotnav:{
        marginTop:150,
        marginLeft:-120,
      },
      dotnavText:{
        paddingLeft:140,
        padding:5,
        fontSize:10,
        color:'#ffffff',
      },
      dotnav2:{
        marginTop:150,
        marginLeft:-120,
      },
      dotnav3:{
        marginTop:140,
        marginLeft:-150,
      },
      dotnavText3:{
        paddingLeft:184,
        padding:5,
        fontSize:10,
        color:'#ffffff',
      },
      dotnav4:{
        marginTop:130,
        marginLeft:-150,
      },
      dotnavText4:{
        paddingLeft:184,
        padding:5,
        fontSize:10,
        color:'#ffffff',
      },
      scrollView: {
        flexDirection: "row",
      },
     screen:{
      flex:1,
      position:'relative',
      marginTop:-130,
      width:360,
      justifyContent:'center',
     }
  });
  // Transition
  const SCREEN_WIDTH = Dimensions.get("window").width;

  const xOffset = new Animated.Value(1);
  const transitionAnimation = index => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: [0.25,1,0.25]
          })
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ["90deg", "0deg", "45deg"]
          })
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ["-45deg", "0deg", "45deg"]
          })
        }
      ]
    };
  };
  const { width, height } = Dimensions.get("window");
export default class HomeComponent extends Component{

    render() {
      let screenWidth = Dimensions.get('window').width;
      let screenHieght = Dimensions.get('window').height;
        return (
              <Animated.ScrollView scrollEventThrottle={8}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                { useNativeDriver: true }
              )}
              horizontal
              pagingEnabled={true}
              style={styles.scrollView} 
              >
                <Animated.View style={[styles.screen,transitionAnimation(0)]}>
                  <Image source={require('./img/discover.png')} style={styles.backgroundImage} />
                  <View style={styles.loginbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:25, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.login()}
                    style={{color:'#FCDC28'}}>
                    Login
                  </Button>
                  <Image source={require('./img/myeffectlogo.png')} style={{width:60,height:60,marginLeft:70,marginTop:20}} />
                  </View>
                  <View style={styles.content}>
                  <Text style={styles.text}>Discover, track and share your effect in the world</Text>
                  <View style={styles.dotnav}>
                  <Text style={styles.dotnavText}>Swipe to learn how</Text>
                  <PageControl numberOfPages={4} currentPage={0} pageIndicatorTintColor='white'currentPageIndicatorTintColor='#1B499B' indicatorStyle={{borderRadius: 5}}currentIndicatorStyle={{borderRadius: 5}}
                   indicatorSize={{width:8, height:8}}
                  /> 
                  </View>
                  <Button onPress={() => Actions.signup()} containerStyle={{padding:10, width:120, marginTop:-30,marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.signupBtn}>
                    Signup
                  </Button>
                  <Button containerStyle={{padding:10, width:120, marginTop:10, marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
                    Explore
                  </Button>
                  </View>
                  </Animated.View>
                {/* Page 2 */}
                <Animated.View style={[styles.screen,transitionAnimation(1)]}>
                  <Image source={require('./img/connect.png')} style={styles.backgroundImage} />
                  <View style={styles.loginbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:25, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.login()}
                    style={{color:'#FCDC28'}}>
                    Login
                  </Button>
                  <Image source={require('./img/myeffectlogo.png')} style={{width:60,height:60,marginLeft:70,marginTop:20}} />
                  </View>
                  <View style={styles.content2}>
                  <Text style={styles.text2}><Text style={{fontWeight:'bold',fontSize:38}}>Connect</Text>{"\n"}with employers and organizations that share your{"\n"}community values</Text>
                  <View style={styles.dotnav2}>
                  <Text style={styles.dotnavText}>Swipe to learn how</Text>
                  <PageControl numberOfPages={4} currentPage={1} pageIndicatorTintColor='white'currentPageIndicatorTintColor='#1B499B' indicatorStyle={{borderRadius: 5}}currentIndicatorStyle={{borderRadius: 5}}
                   indicatorSize={{width:8, height:8}}
                  /> 
                  </View>
                  <Button onPress={() => Actions.signup()} containerStyle={{padding:10, width:120, marginTop:-30,marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.signupBtn}>
                    Signup
                  </Button>
                  <Button containerStyle={{padding:10, width:120, marginTop:10, marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.exploreBtn}onPress={() => Actions.checkingevent()}>
                    Explore
                  </Button>
                  </View>
                  </Animated.View>
                {/* Page 3 */}
                <Animated.View style={[styles.screen,transitionAnimation(2)]}>
                  <Image source={require('./img/track.png')} style={styles.backgroundImage} />
                  <View style={styles.loginbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:25, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.login()}
                    style={{color:'#FCDC28'}}>
                    Login
                  </Button>
                  <Image source={require('./img/myeffectlogo.png')} style={{width:60,height:60,marginLeft:70,marginTop:20}} />
                  </View>
                  <View style={styles.content3}>
                  <Text style={styles.text3}><Text style={{fontWeight:'bold',fontSize:36}}>{"\n"}Track</Text>{"\n"}your skill development{"\n"}community leadership{"\n"}and volunteer{"\n"}achievements</Text>
                  <View style={styles.dotnav3}>
                  <Text style={styles.dotnavText3}>Swipe to learn how</Text>
                  <PageControl numberOfPages={4} currentPage={2} pageIndicatorTintColor='white'currentPageIndicatorTintColor='#1B499B' indicatorStyle={{borderRadius: 5}}currentIndicatorStyle={{borderRadius: 5}}
                   indicatorSize={{width:8, height:8}}
                  /> 
                  </View>
                  <Button onPress={() => Actions.signup()} containerStyle={{padding:10, width:120, marginTop:-30,marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.signupBtn}>
                    Signup
                  </Button>
                  <Button containerStyle={{padding:10, width:120, marginTop:10, marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
                    Explore
                  </Button>
                  </View>
                  </Animated.View>
                  {/* Page 4 */}
                <Animated.View style={[styles.screen,transitionAnimation(3)]}>
                  <Image source={require('./img/celebrate.png')} style={styles.backgroundImage} />
                  <View style={styles.loginbtnContainer}>
                  <Button containerStyle={{marginLeft:-10, paddingTop:25, width:80, position:'relative', borderRadius:4, backgroundColor: 'transparent'}} onPress={() => Actions.login()}
                    style={{color:'#FCDC28'}}>
                    Login
                  </Button>
                  <Image source={require('./img/myeffectlogo.png')} style={{width:60,height:60,marginLeft:70,marginTop:20}} />
                  </View>
                  <View style={styles.content4}>
                  <Text style={styles.text4}><Text style={{fontWeight:'bold',fontSize:36}}>Celebrate</Text>{"\n"}<Text style={{fontWeight:'bold',fontSize:28}}>your impact by building an ImpactResume® -</Text>{"\n"}{"\n"}Socila Profiles that showcase your passion, applied skills and leadership impact to employs, educator and collegues</Text>
                  <View style={styles.dotnav4}>
                  <Text style={styles.dotnavText4}>Swipe to learn how</Text>
                  <PageControl numberOfPages={4} currentPage={3} pageIndicatorTintColor='white'currentPageIndicatorTintColor='#1B499B' indicatorStyle={{borderRadius: 5}}currentIndicatorStyle={{borderRadius: 5}}
                   indicatorSize={{width:8, height:8}}
                  /> 
                  </View>
                  <Button onPress={() => Actions.signup()} containerStyle={{padding:10, width:120, marginTop:-30,marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#1B499B'}} style={styles.signupBtn}>
                    Signup
                  </Button>
                  <Button containerStyle={{padding:10, width:120, marginTop:10, marginLeft:215, overflow:'hidden', borderRadius:100, backgroundColor: '#00B0F5'}} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
                    Explore
                  </Button>
                  </View>
                  </Animated.View>
                </Animated.ScrollView>
        );
      }
}

