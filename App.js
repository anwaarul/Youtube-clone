import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import VideosHomeScreen from "./src/components/viewControllers/Videos/Home/VideosHomeScreen";
import favouritesScreen from "./src/components/viewControllers/Videos/Favourites/FavouritesScreen";
import YouTubeVideoPlayer from "./src/components/viewControllers/Videos/YouTubeVideoPlayer";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import VideosListScreen from './src/components/viewControllers/Videos/Home/VideosListScreen';
import VideosSearchListScreen from './src/components/viewControllers/Videos/Home/VideosSearchListScreen';
import VideosListScreenFromFav from './src/components/viewControllers/Videos/Favourites/VideosListScreenFromFav';
import VideoSearch from './src/components/viewControllers/Videos/Search/VideosSearch';
import UserProfile from './src/components/viewControllers/Videos/Profile/UserProfile';
import SignupScreen from './src/components/viewControllers/Videos/Profile/SignupScreen';
import SiginScreen from './src/components/viewControllers/Videos/Profile/SiginScreen';
import ProfileScreen from './src/components/viewControllers/Videos/Profile/ProfileScreen';

<StatusBar hidden={false} backgroundColor="blue" translucent={true} />

console.disableYellowBox = true;
// const deviceWidth = Dimensions.get('window').width;
const HomeStack = createStackNavigator({

    VideosListScreen: { screen: VideosListScreen, navigationOptions: { header: null, } },
    VideosSearchListScreen: { screen: VideosSearchListScreen, navigationOptions: { header: null, } },
    VideosHomeScreen: { screen: VideosHomeScreen, navigationOptions: { header: null, } },
    YouTubeVideoPlayer: { screen: YouTubeVideoPlayer, navigationOptions: { header: null, } },
});

const FavouriteStack = createStackNavigator({
    favouritesScreen: { screen: favouritesScreen, navigationOptions: { header: null, } },
    YouTubeVideoPlayer: { screen: YouTubeVideoPlayer, navigationOptions: { header: null, } },
    VideosListScreen: { screen: VideosListScreen, navigationOptions: { header: null, } },
    VideosSearchListScreen: { screen: VideosSearchListScreen, navigationOptions: { header: null, } },
    VideosHomeScreen: { screen: VideosHomeScreen, navigationOptions: { header: null, } },
    VideosListScreenFromFav: { screen: VideosListScreenFromFav, navigationOptions: { header: null, } },
});
const SearchStack = createStackNavigator({
    VideoSearch: { screen: VideoSearch, navigationOptions: { header: null, } },
    VideosSearchListScreen: { screen: VideosSearchListScreen, navigationOptions: { header: null, } },
    VideosHomeScreen: { screen: VideosHomeScreen, navigationOptions: { header: null, } },
    YouTubeVideoPlayer: { screen: YouTubeVideoPlayer, navigationOptions: { header: null, } },
});
const ProfileStack = createStackNavigator({
    UserProfile: { screen: UserProfile, navigationOptions: { header: null, } },
    ProfileScreen:{screen: ProfileScreen, navigationOptions:{header: null}},
    SiginScreen: { screen: SiginScreen, navigationOptions: { header: null, } },
    SignupScreen: { screen: SignupScreen, navigationOptions: { header: null, } },
    
});

export default createBottomTabNavigator(
    {
        HOME: { screen: HomeStack },
        INTERESTS: { screen: FavouriteStack },
        // SEARCH : {screen: SearchStack},
        PROFILE:{screen : ProfileStack }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'HOME') {
                    iconName = 'home';
                } else if (routeName === 'INTERESTS') {
                    iconName = 'heart';
                }
                // else if (routeName === 'SEARCH') {
                    // iconName = 'search';
                // }
                else if (routeName === 'PROFILE') {
                    iconName = 'user';
                }
                  return <FontAwesome name={iconName} size={20} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);