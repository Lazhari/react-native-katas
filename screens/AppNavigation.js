import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './Home';
import UsingText from './katas/UsingText';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		UsingText: {
			screen: UsingText
		}
	},
	{
		headerMode: 'none',
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);
