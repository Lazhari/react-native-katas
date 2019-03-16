import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import KataCard from './components/KataCard';

const katas = [
	{
		icon: 'md-create',
		kataTitle: 'Using Text'
	},
	{
		icon: 'md-color-palette',
		kataTitle: 'Using Styles'
	},
	{
		icon: 'md-crop',
		kataTitle: 'Clipping'
	},
	{
		icon: 'md-egg',
		kataTitle: 'Border Radius'
	},
	{
		icon: 'md-hourglass',
		kataTitle: 'Loading Card'
	},
	{
		icon: 'md-grid',
		kataTitle: 'Gridding'
	},
	{
		icon: 'md-calculator',
		kataTitle: 'Flex Size'
	},
	{
		icon: 'md-color-fill',
		kataTitle: 'Fill All'
	},
	{
		icon: 'md-compass',
		kataTitle: 'Direction'
	},
	{
		icon: 'md-list',
		kataTitle: 'Alignment Axis'
	},
	{
		icon: 'md-code-working',
		kataTitle: 'Alignment'
	},
	{
		icon: 'md-stats',
		kataTitle: 'Simple Chart'
	},
	{
		icon: 'md-happy',
		kataTitle: 'Profile Screen'
	},
	{
		icon: 'md-contact',
		kataTitle: 'Contact Card'
	},
	{
		icon: 'md-calendar',
		kataTitle: 'Calendar Month'
	}
];

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Katas List</Text>
				</View>
				<View style={styles.navigationContainer}>
					<ScrollView contentContainerStyle={styles.kataListContainer}>
						{katas.map((kata, index) => (
							<KataCard {...kata} key={index} />
						))}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E5E5E5',
		marginTop: 40,
		padding: 16
	},
	header: {
		flex: 2,
		justifyContent: 'center'
	},
	title: {
		fontSize: 32,
		letterSpacing: 0.5,
		textAlign: 'left',
		fontWeight: 'bold',
		color: '#171D33'
	},
	navigationContainer: {
		flex: 20
	},
	kataListContainer: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	}
});
