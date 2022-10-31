import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Clipboard,
  BackHandler,
  StyleSheet,
} from 'react-native';


export default function ClipBoardMoveText() {

  const [copiedText, setCopiedText] = useState('');
  const [showCopiedText, setShowCopiedText] = useState(false);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        'Back Button',
        "Click Confirm to go back !",
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { 
          text: "Confirm", 
          onPress: () => props.navigation.goBack() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
    
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText('');
    Alert.alert('Copied Text', copiedText);

  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          onChangeText={text => setCopiedText(text)}
          value={copiedText}
          style={styles.input}
          placeholder="Enter Text To ClipBoard"></TextInput>
        <TouchableOpacity onPress={copyToClipboard} style={styles.copyBtn}>
          <Text style={styles.btnText}>Copy</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.copyBtn} onPress={fetchCopiedText}>
            <Text style={styles.btnText}>Show Copied Text</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    marginVertical: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  copyBtn: {
    backgroundColor: 'black',
    width: 200,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    margin: 10

  },
  btnText: {
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'underline',
    color: 'white'
  },
  copiedText: {

  }
})