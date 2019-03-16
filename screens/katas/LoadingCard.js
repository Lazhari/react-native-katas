import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LoadingCard extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.loadingCard}>
					<View style={styles.cardHeader}>
						<Ionicons
							name="md-time"
							size={24}
							color="white"
							style={{ fontWeight: '200' }}
						/>
						<Ionicons name="md-close" size={24} color="white" />
					</View>

					<View style={styles.cardBody}>
						<Text style={styles.loadingText}>Loading...</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#BCAAA4'
	},
	loadingCard: {
		width: '70%',
		paddingRight: 8,
		paddingLeft: 8,
		paddingBottom: 32,
		paddingTop: 8,
		backgroundColor: '#CDDA49',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
		elevation: 5
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardBody: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingText: {
		color: 'white',
		fontSize: 16
	}
});
