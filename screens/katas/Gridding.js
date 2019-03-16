import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Box = ({ col }) => <View style={[styles.box, { flex: col }]} />;

export default class Gridding extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Box col={1} />
					<Box col={1} />
				</View>
				<View style={styles.row}>
					<Box col={1} />
					<Box col={1} />
					<Box col={1} />
					<Box col={1} />
				</View>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<Feather name="hash" color="white" size={128} />
				</View>
				<View style={styles.row}>
					<Box col={1 / 2} />
					<Box col={1 / 4} />
					<Box col={1 / 4} />
				</View>
				<View style={styles.row}>
					<Box col={1 / 3} />
					<Box col={1 / 3} />
					<Box col={1 / 3} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F290B1'
	},
	box: {
		backgroundColor: '#E23B3B',
		height: 40,
		margin: 2
	},
	row: {
		flexDirection: 'row'
	}
});
