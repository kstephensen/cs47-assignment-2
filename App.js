import AppLoading from 'expo-app-loading';
import { Dimensions, StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles} from './assets/Themes';
import themes from './assets/Themes/themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Image style={styles.icon} source={Icons.menu.light} />
        <Text style={[styles.boldText, {fontSize: 32}]}>
          ensom
        </Text>
        <Image style={styles.icon} source={Icons.sun} />
      </View>
      
      <View style={styles.profile}>
        <ImageBackground style={[styles.profilePic, styles.shadows]} 
            imageStyle={{borderRadius: 10, width: '100%'}} 
            source={Profiles.mtl.image}>
          <Text style={styles.profileName}>{Profiles.mtl.name}</Text>
          <Text style={styles.profileDistance}>{Profiles.mtl.caption}</Text>
        </ImageBackground>
        <View style={[styles.card, styles.shadows]}>
          <Text style={[styles.boldText, {fontSize: 24, flex: 1}]}>
            My hottest take:
            </Text>
            <View style={[styles.audiobox]}>
            <Image style={styles.playButton} source={Icons.player.light} />
            <Image style={styles.audioWave} source={Icons.audioWave.light} />  
            </View>
         
        </View>
      </View>

      <View style={styles.bottomBar} >
        <View style={styles.iconGroup}>
          <Image style={styles.bottomIcon} source={Icons.discover.light} />
          <Text style={styles.iconText}>Discover</Text>
        </View>
        <View style={styles.iconGroup}>
          <Image style={styles.bottomIcon} source={Icons.heart.light} />
          <Text style={styles.iconText}>Matches</Text>
        </View>
        <View style={styles.iconGroup}>
          <Image style={styles.bottomIcon} source={Icons.messages.light} />
          <Text style={styles.iconText}>DMs</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.light.navigation,
    flex: 1,
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'center',
  },

  navBar: {
    flex: 1,
    height: Platform.OS === 'ios' ? 41 : 51,
    width: '100%',
    backgroundColor: Themes.light.bg,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },

   boldText: {
    fontFamily: 'Sydney-Bold',
    color: Themes.light.text,
   }, 

   normalText: {
    fontFamily: 'Sydney',
    color: Themes.light.text,
   },
  
  icon: {
    resizeMode: 'contain',
    height: '80%',
    width: '20%',
  },

  profile: {
    backgroundColor: Themes.light.bg,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 11,
    width: '100%',
    padding: '5%',
  },

  profilePic: {
    resizeMode: 'cover',
    height: 0.45 * windowHeight,
    width: (0.45 * windowHeight) / 1.1,
    marginBottom: 15,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  profileName: {
    fontFamily: 'Sydney',
    margin: 10,
    fontSize: 32,
    color: Themes.light.textSecondary,
    height: 40,
  },
  
  profileDistance: {
    fontFamily: 'Sydney',
    fontSize: 18,
    margin: 10,
    color: Themes.light.textSecondary,
  },

  shadows: {
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },

  card: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 30,
    width: (0.45 * windowHeight) / 1.1,
    height: '25%',
    padding: 20,
  },

  audiobox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '70%',
    flex: 3,
  },

  playButton: {
    flex: 1,
    resizeMode: 'contain',
    marginRight: 10,
  },

  audioWave:{
    flex: 5,
    resizeMode: 'contain',
  },

  bottomBar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: themes.light.navigation,
    padding: 10,
    justifyContent: 'space-evenly',
  },

  iconGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 80,
  },

  bottomIcon: {
    resizeMode: 'contain',
    height: '60%',
  },

  iconText: {
    fontFamily: 'Sydney-Bold',
    fontSize: 18,
    color: Themes.light.textSecondary,
  },

  testing: {
    borderWidth: 1,
    borderColor: 'red',
  }
});
