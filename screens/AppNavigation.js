import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './Home';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		header: 'none',
		headerMode: 'none',
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);
