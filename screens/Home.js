import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import KataCard from './components/KataCard';

const katas = [
	{
		id: 'UsingText',
		icon: 'md-create',
		kataTitle: 'Using Text'
	},
	{
		id: 'UsingStyles',
		icon: 'md-color-palette',
		kataTitle: 'Using Styles'
	},
	{
		id: 'Clipping',
		icon: 'md-crop',
		kataTitle: 'Clipping'
	},
	{
		id: 'BorderRadius',
		icon: 'md-egg',
		kataTitle: 'Border Radius'
	},
	{
		id: 'LoadingCard',
		icon: 'md-hourglass',
		kataTitle: 'Loading Card'
	},
	{
		id: 'Gridding',
		icon: 'md-grid',
		kataTitle: 'Gridding'
	},
	{
		id: 'FlexSize',
		icon: 'md-calculator',
		kataTitle: 'Flex Size'
	},
	{
		id: 'FillAll',
		icon: 'md-color-fill',
		kataTitle: 'Fill All'
	},
	{
		id: 'Direction',
		icon: 'md-compass',
		kataTitle: 'Direction'
	},
	{
		id: 'AlignmentAxis',
		icon: 'md-list',
		kataTitle: 'Alignment Axis'
	},
	{
		id: 'Alignment',
		icon: 'md-code-working',
		kataTitle: 'Alignment'
	},
	{
		id: 'SimpleChart',
		icon: 'md-stats',
		kataTitle: 'Simple Chart'
	},
	{
		id: 'ProfileScreen',
		icon: 'md-happy',
		kataTitle: 'Profile Screen'
	},
	{
		id: 'ContactCard',
		icon: 'md-contact',
		kataTitle: 'Contact Card'
	},
	{
		id: 'CalendarMonth',
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
							<KataCard
								{...kata}
								key={index}
								navigate={this.props.navigation.navigate}
							/>
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
