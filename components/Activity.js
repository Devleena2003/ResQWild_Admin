import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const Activity = (props) => {
  const {data, time} = props;
  return (
    <View style={styles.container}>
      <Text style={{fontSize : 16}}>{data}</Text>
      <View style={{flexDirection : 'row', alignItems : 'center'}}>
      <Ionicons name="time" size={15} color="#1e5128" />
      <Text style={{fontSize : 16, marginLeft : 5}}>{time}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        borderBottomWidth : 2,
        borderBottomColor : '#1e5128',
        width : '80%',
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 15,
    }
})

export default Activity
