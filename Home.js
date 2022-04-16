import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data: ''
    }
  }

  change(x) {
    this.setState({ data: x * 10})
  }

  tambah(x) {
    this.setState({ data: x + 10})
  }

  kurang(x) {
    this.setState({ data: x - 10})
  }

  bagi(x) {
    this.setState({ data: x / 2})
  }

  render() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Profile />
      <Text style={{ fontSize: 10 }}>Home Component</Text>
    </View>
  )
}
}

export default Home

const styles = StyleSheet.create({})