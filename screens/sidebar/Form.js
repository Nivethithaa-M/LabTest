import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {db} from '../../firebase';
const Form = () => {
  const [name, setName] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [address, setAddress] = useState('');
  const onRegister = async () => {
    db.collection("student").add({
        name: name,
        mobilenumber: mobilenumber,
        address: address
    })
    .then(() => {
        console.log("Document successfully written!");
        alert("Added!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          autoCapitalize='none'
        />
        <TextInput
          placeholder='MobileNumber'
          value={mobilenumber}
          onChangeText={(text) => setMobilenumber(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Address'
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onClick={() => onRegister()}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    color: '#28A848',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#28A848',
    width: '100%',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#28A848',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#28A848',
    fontWeight: '700',
    fontSize: 16,
  },
  signupTextCont: {
    alignItems: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'grey',
    fontSize: 13,
  },
  signupButton: {
    color: '#28A848',
    fontSize: 13,
    fontWeight: '500',
  },
});
