import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class UsingStyles extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.styledText}>Using Styles</Text>
				<Text style={{ color: 'pink' }}>Inline Styles</Text>
				<Text style={styles.inline}>Optimized StyleSheet Styles</Text>
				<Text style={[styles.inline, { color: 'lime' }]}>Array Styles</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#AA4CBA'
	},
	styledText: {
		fontSize: 16,
		lineHeight: 24,
		textAlign: 'center',
		color: 'white'
	},
	inline: {
		fontSize: 24,
		color: 'yellow'
	}
});
