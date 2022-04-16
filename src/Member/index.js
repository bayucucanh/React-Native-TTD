import { View, Text } from 'react-native'
import React from 'react'

const Member = () => {
  const members = [{id: 1, name: 'maman'}, {id: 2, name: 'jajang'}];
  return (
    <View>
      <Text>Member</Text>
      {members.map(member => (
        <Text key={member.id} testID='memberDetail'>{member.name}</Text>
      ))}
    </View>
  )
}
export default Member