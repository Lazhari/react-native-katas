import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import KataCard from './components/KataCard';

const katas = [
	{
		kataTitle: 'Using Text'
	},
	{
		kataTitle: 'Using Styles'
	},
	{
		kataTitle: 'Clipping'
	},
	{
		kataTitle: 'Border Radius'
	},
	{
		kataTitle: 'Loading Card'
	},
	{
		kataTitle: 'Gridding'
	},
	{
		kataTitle: 'Flex Size'
	},
	{
		kataTitle: 'Fill All'
	},
	{
		kataTitle: 'Direction'
	},
	{
		kataTitle: 'Alignment Axis'
	},
	{
		kataTitle: 'Alignment'
	},
	{
		kataTitle: 'Simple Chart'
	},
	{
		kataTitle: 'Profile Screen'
	},
	{
		kataTitle: 'Contact Card'
	},
	{ kataTitle: 'Calendar Month' }
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
