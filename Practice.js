import React from 'react'

import { TextInput, Image, StyleSheet, View, Text, Dimensions } from 'react-native'

/*import styles from './styles/App.scss'*/
import logo from './images/angular.png'


class Practice extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {Username: '', Password: ''};
	}


	render() {
		return (
			<View style={styles.mainSection}>
				<View>
					<Image source={logo} />
				</View>
				<View>
					<TextInput
			          style={styles.defaultTextInput}
			          placeholder="Username"
			          placeholderTextColor="white"
			          onChangeText={(username) => this.setState({Username: username})}
			        />
			        <TextInput
			          style={styles.defaultTextInput}
			          placeholder="Password"
			          placeholderTextColor="white"
			          secureTextEntry={true}
			          onChangeText={(password) => this.setState({Password: password})}
			        />
					{/*<Text style={[styles.defaultText, styles.selectedText]}>Hello</Text>
					<Text style={styles.defaultText}>Its Car Rent</Text>*/}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({

	defaultTextInput: {
		//flex: 1,
		fontSize: 22,
		textAlign: 'center',
		//alignItems: 'stretch',
		height: 70,
		width: Dimensions.get('window').width-10,
		//marginBottom: 10,
		margin: 10,
		//marginLeft: 10,
		color: '#FFFFFF',
		backgroundColor: 'red',
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 20,
	},
	selectedText: {
		//flex: 1,
		//backgroundColor: 'yellow',
		color: 'blue',
		fontWeight: 'bold'
	},
	mainSection: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center', /*flex-start flex-end space-between space-around*/
		backgroundColor: '#DDD'
	}
})

export default Practice