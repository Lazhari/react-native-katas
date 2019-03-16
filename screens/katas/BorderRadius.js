import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class BorderRadius extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.box, styles.smallRadius]} />
				<View style={[styles.box, styles.mediumRadius]} />
				<View style={[styles.box, styles.circle]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2B9D85'
	},
	box: {
		width: 80,
		height: 80,
		backgroundColor: '#FFFFFF',
		margin: 10
	},
	smallRadius: {
		borderRadius: 10
	},
	mediumRadius: {
		borderRadius: 20
	},
	circle: {
		borderRadius: 40
	}
});
