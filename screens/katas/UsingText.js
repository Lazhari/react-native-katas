import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

export default class UsingText extends Component {
	state = {
		fontLoaded: false
	};
	async componentDidMount() {
		await Font.loadAsync({
			'LilitaOne-Regular': require('../../assets/fonts/LilitaOne-Regular.ttf'),
			'Srisakdi-Regular': require('../../assets/fonts/Srisakdi-Regular.ttf')
		});
		this.setState({ fontLoaded: true });
	}
	render() {
		return (
			<View style={styles.container}>
				{this.state.fontLoaded && (
					<>
						<Text style={styles.title}>Using</Text>
						<Text style={styles.subTitle}>Text</Text>
					</>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#92CBF7'
	},
	title: {
		fontSize: 60,
		fontFamily: 'LilitaOne-Regular'
	},
	subTitle: {
		fontSize: 80,
		fontFamily: 'Srisakdi-Regular',
		color: 'white'
	}
});
