import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
		borderWidth: 0,
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});
