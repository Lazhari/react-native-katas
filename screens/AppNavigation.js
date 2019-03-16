import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './Home';
import UsingText from './katas/UsingText';
import UsingStyles from './katas/UsingStyles';

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
