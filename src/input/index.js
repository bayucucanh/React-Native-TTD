import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, {useState} from 'react'

const Input = () => {
  
  const [name, setName] = useState('')

  return (
    <View styles={styles.container}>
      <Text>Absen Nama</Text>
      <TextInput 
        testID='input-name'
        onChangeText={name => setName(name)}
        style={styles.input}
        placeholder='Name'
        value={name}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})