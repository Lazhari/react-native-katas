import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Clipping extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.circle} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6CB8CB'
	},
	circle: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#FDA428'
	}
});
