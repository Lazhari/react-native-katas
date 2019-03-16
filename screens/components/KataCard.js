import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class KataCard extends Component {
	render() {
		const { icon = 'md-pulse', kataTitle } = this.props;
		return (
			<View style={styles.card}>
				<View style={styles.iconContainer}>
					<Ionicons name={icon} size={24} color="white" />
				</View>
				<Text style={styles.title}>{kataTitle}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		width: '48%',
		height: 140,
		paddingTop: 32,
		paddingBottom: 32,
		paddingRight: 16,
		paddingLeft: 16,
		marginBottom: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		shadowColor: '#FFFFFF',
		shadowOpacity: 0.06,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowRadius: 26
	},
	iconContainer: {
		height: 40,
		width: 40,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#613EEA'
	},
	title: {
		fontSize: 14,
		color: '#3B414B'
	}
});
