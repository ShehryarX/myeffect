import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Animated, Image, Dimensions, ScrollView } from 'react-native';
import Button from 'react-native-button';
import PageControl from 'react-native-page-control'; //This library provide dots fro navigation
import { Actions } from 'react-native-router-flux'; // New code
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {moderateScale} from '../scaling';
const SCREEN_WIDTH = Dimensions.get("window").width;

const window = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp('100%'),
    height: hp('100%'),
    flexDirection: "row",
    width: wp('100%'),
    height: hp('100%'),
    // justifyContent: "space-between"
  },

  backgroundImage: {
    flex: 5,
    resizeMode: 'cover', // or 'stretch'
    position: 'relative',
    // width: SCREEN_WIDTH,
    width: wp('100%'),
    height: hp('100%'),
    flexGrow: 5,
    // backgroundColor:'red',
    marginTop:-210,
  
  },
  content: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 10,
    justifyContent: 'flex-end',
    width: wp('70%'),
  },
  content2: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 10,
    justifyContent: 'flex-end',
    width: wp('70%'),
  },
  content3: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 10,
    justifyContent: 'flex-end',
    width: wp('70%'),
    marginTop:wp("-20%")
  },
  content4: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 10,
    justifyContent: 'flex-end',
    width: wp('110%'),
    marginTop:wp("1%")
  },
  loginbtnContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    marginLeft: moderateScale(40),
    // marginTop: -370,
    // width: SCREEN_WIDTH,
    // flexDirection: 'row',
  },
  logo: {
    flex: 1,
    padding: 20,
    width: 50,
    height: 50,
    position: 'relative',
    marginTop: -265,
  },
  text: {
    flex: 1,
    color: '#ffffff',
    fontSize: wp("10%"),
    marginTop: wp("50%"),
    width:moderateScale(300)
  },
  text2: {
    flex: 1,
    color: '#ffffff',
    fontSize: wp("7%"),
    marginTop: wp("45%"),
    width:moderateScale(300)
  },
  text3: {
    flex: 1,
    color: '#ffffff',
    fontSize: wp("6.1%"),
    marginTop: wp("50%"),
    width:moderateScale(300)
  },
  text4: {
    flex: 1,
    color: '#ffffff',
    fontSize: wp("3%"),
    marginTop: wp("50%"),
    width:moderateScale(300)
  },
  signupBtn: {
    flex: 1,
    color: '#ffffff',
  },
  exploreBtn: {
    color: '#ffffff'
  },
  dotnav: {
    flex: 5,
    marginTop: Dimensions.get("window").height/4.4,
    marginLeft: -120,
  },
  dotnavText: {
    flex: 1,
    // paddingLeft: moderateScale(150),
    paddingLeft: wp("38%"),
    // padding: 5,
    fontSize: moderateScale(9),
    color: '#ffffff',
  },
  dotnav2: {
    flex: 1,
    marginTop: Dimensions.get("window").height/4,
    marginLeft: -120,
  },
  dotnav3: {
    flex: 1,
    marginTop: Dimensions.get("window").height/4,
    marginLeft: -120,
  },
  dotnavText3: {
    flex: 1,
    // paddingLeft: moderateScale(150),
    paddingLeft: wp("38%"),
    paddingTop:wp('-2%'),
    // padding: 5,
    fontSize: moderateScale(9),
    color: '#ffffff',
  },
  dotnav4: {
    flex: 1,
    marginTop: Dimensions.get("window").height/4,
    marginLeft: wp("-70%"),
  },
  dotnavText4: {
    flex: 1,
    // paddingLeft: moderateScale(150),
    paddingLeft: wp("78%"),
    // padding: 5,
    fontSize: moderateScale(9),
    color: '#ffffff',
  },
  scrollView: {
    flex: 1,
    flexDirection: "row",
  },
  screen: {
    flex: 1,
    width: Dimensions.get("window").width,
    position: 'relative',
    marginTop: 0,
    // width: 360,
    backgroundColor: '#EDF1F5'
  }
});
// Transition

const xOffset = new Animated.Value(1);
const transitionAnimation = index => {
  return {
    transform: [
      // { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
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
export default class HomeComponent extends Component {

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
        <Animated.View style={[styles.screen,]}>
          <Image source={require('./img/discover.png')} resizeMode={"contain"} style={styles.backgroundImage} />
          <View style={styles.loginbtnContainer}>
          <View style={{marginLeft:wp('-10%')}}>
            <Button containerStyle={{  paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent' }} onPress={() => Actions.login()}
              style={{ color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"), }}>
              Login
              </Button>
              </View>
          <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
             <Image source={require('./img/myeffectlogo.png')} style={{ width: wp('15%'),flex:1, marginTop: wp('-10%')}} />
          </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Discover, track and share your effect in the world</Text>
            <View style={styles.dotnav}>
              <Text style={styles.dotnavText}>Swipe to learn how</Text>
              <PageControl numberOfPages={4} currentPage={0} pageIndicatorTintColor='white' currentPageIndicatorTintColor='#1B499B' indicatorStyle={{ borderRadius: 5 }} currentIndicatorStyle={{ borderRadius: 5 }}
                indicatorSize={{ width: 8, height: 8 }}
              />
            </View>
            <Button onPress={() => Actions.signup()} containerStyle={{ padding: 10, width: wp("35%"), marginTop: moderateScale(7), marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#1B499B' }} style={styles.signupBtn}>
              Signup
                  </Button>
            <Button containerStyle={{ padding: 10, width: wp("35%"), marginTop: 10,marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#00B0F5' }} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
              Explore
                  </Button>
          </View>
        </Animated.View>
        {/* Page 2 */}
        <Animated.View style={[styles.screen,]}>
          <Image source={require('./img/connect.png')} style={styles.backgroundImage} />
          <View style={styles.loginbtnContainer}>
          <View style={{marginLeft:wp('-10%')}}>
            <Button containerStyle={{ paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent' }} onPress={() => Actions.login()}
              style={{ color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"),  }}>
              Login
                  </Button>
          </View>
          <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
            <Image source={require('./img/myeffectlogo.png')} style={{ width: wp('15%'),flex:1, marginTop: wp('-10%') }} />
            </View>
          </View>
          <View style={styles.content2}>
            <Text style={styles.text2}><Text style={{ fontWeight: 'bold', fontSize: wp("10%") }}>Connect</Text>{"\n"}with employers and organizations that share your{"\n"}community values</Text>
            <View style={styles.dotnav2}>
              <Text style={styles.dotnavText}>Swipe to learn how</Text>
              <PageControl numberOfPages={4} currentPage={1} pageIndicatorTintColor='white' currentPageIndicatorTintColor='#1B499B' indicatorStyle={{ borderRadius: 5 }} currentIndicatorStyle={{ borderRadius: 5 }}
                indicatorSize={{ width: 8, height: 8 }}
              />
            </View>
            <Button onPress={() => Actions.signup()} containerStyle={{ padding: 10, width: wp("35%"), marginTop: moderateScale(7), marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#1B499B' }} style={styles.signupBtn}>
              Signup
                  </Button>
            <Button containerStyle={{padding: 10, width: wp("35%"), marginTop: 10,marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#00B0F5'  }} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
              Explore
                  </Button>
          </View>
        </Animated.View>
        {/* Page 3 */}
        <Animated.View style={[styles.screen,]}>
          <Image source={require('./img/track.png')} style={styles.backgroundImage} />
          <View style={styles.loginbtnContainer}>
          <View style={{marginLeft:wp('-10%')}}>
            <Button containerStyle={{ paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent'  }} onPress={() => Actions.login()}
              style={{ color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"),  }}>
              Login
            </Button>
          </View>
          <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
            <Image source={require('./img/myeffectlogo.png')} style={{ width: wp('15%'),flex:1, marginTop: wp('-10%')}} />
            </View>
          </View>
          <View style={styles.content3}>
            <Text style={styles.text3}><Text style={{ fontWeight: 'bold', fontSize: wp("10%") }}>{"\n"}Track</Text>{"\n"}your skill development{"\n"}community leadership{"\n"}and volunteer{"\n"}achievements</Text>
            <View style={styles.dotnav3}>
              <Text style={styles.dotnavText3}>Swipe to learn how</Text>
              <PageControl numberOfPages={4} currentPage={2} pageIndicatorTintColor='white' currentPageIndicatorTintColor='#1B499B' indicatorStyle={{ borderRadius: 5 }} currentIndicatorStyle={{ borderRadius: 5 }}
                indicatorSize={{ width: 8, height: 8 }}
              />
            </View>
            <Button onPress={() => Actions.signup()} containerStyle={{ padding: 10, width: wp("35%"), marginTop: moderateScale(10), marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#1B499B' }} style={styles.signupBtn}>
              Signup
                  </Button>
            <Button containerStyle={{ padding: 10, width: wp("35%"), marginTop: 10,marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#00B0F5' }} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
              Explore
                  </Button>
          </View>
        </Animated.View>
        {/* Page 4 */}
        <Animated.View style={[styles.screen,]}>
          <Image source={require('./img/celebrate.png')} style={styles.backgroundImage} />
          <View style={styles.loginbtnContainer}>
          <View style={{marginLeft:wp('-10%')}}>
            <Button containerStyle={{ paddingTop: wp('8%'),  flex:1,position: 'relative', borderRadius: 4, backgroundColor: 'transparent' }} onPress={() => Actions.login()}
              style={{ color: '#FCDC28',fontSize:wp("5%"),width:wp("20%"), }}>
              Login
            </Button>
            </View>
            <View  style={{marginLeft:wp('33%'),height:10,marginTop:10}}>
            <Image source={require('./img/myeffectlogo.png')} style={{ width: wp('15%'),flex:1, marginTop: wp('-10%') }} />
            </View>
          </View>
          <View style={styles.content4}>
            <Text style={styles.text4}><Text style={{ fontWeight: 'bold', fontSize: wp("10%") }}>Celebrate</Text>{"\n"}<Text style={{ fontWeight: 'bold',fontSize: wp("5.5%") }}>your impact by building an ImpactResume® -</Text>{"\n"}{"\n"}Socila Profiles that showcase your passion, applied skills and leadership impact to employs, educator and collegues</Text>
            <View style={styles.dotnav4}>
              <Text style={styles.dotnavText4}>Swipe to learn how</Text>
              <PageControl numberOfPages={4} currentPage={3} pageIndicatorTintColor='white' currentPageIndicatorTintColor='#1B499B' indicatorStyle={{ borderRadius: 5 }} currentIndicatorStyle={{ borderRadius: 5 }}
                indicatorSize={{ width: 8, height: 8 }}
              />
            </View>
            <Button onPress={() => Actions.signup()} containerStyle={{ padding: 10, width: wp("35%"), marginTop: moderateScale(12), marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#1B499B' }} style={styles.signupBtn}>
              Signup
                  </Button>
            <Button containerStyle={{ padding: 10, width: wp("35%"), marginTop: 10,marginLeft: wp("60%"), overflow: 'hidden', borderRadius: 100, backgroundColor: '#00B0F5' }} style={styles.exploreBtn} onPress={() => Actions.checkingevent()}>
              Explore
                  </Button>
          </View>
        </Animated.View>
      </Animated.ScrollView>
    );
  }
}

