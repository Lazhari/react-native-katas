import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './Home';
import { UsingText, UsingStyles, Clipping } from './katas/';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		UsingText: {
			screen: UsingText,
			navigationOptions: {
				title: 'Using Text'
			}
		},
		UsingStyles: {
			screen: UsingStyles,
			navigationOptions: {
				title: 'Using Styles'
			}
		},
		Clipping: {
			screen: Clipping,
			navigationOptions: {
				title: 'Clipping'
			}
		}
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#FFFFFF'
			},
			headerTintColor: '#171D33',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default createAppContainer(AppNavigator);
