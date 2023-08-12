import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import MyLineChart from '../components/LineChart'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Reports")}>
          <Text style={{fontSize: 35, fontWeight : 'bold', color : '#1e5128'}}>40</Text>
          <Text style={{fontSize: 20, color : '#1e5128'}}>Total Public Reports</Text>
          <Text style={{fontSize: 15, paddingTop : 10, fontWeight : 'bold'}}>View Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={{fontSize: 35, fontWeight : 'bold', color : '#1e5128'}}>30</Text>
          <Text style={{fontSize: 20, color : '#1e5128'}}>Animals Rescued</Text>
          <Text style={{fontSize: 15, paddingTop : 10, fontWeight : 'bold'}}>View Details</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 30, fontWeight : 'bold', color : '#1e5128', alignSelf : 'center', paddingVertical : 30}}>Report Stats</Text>
      <MyLineChart/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  card : {
    backgroundColor : '#e5d9b6',
    padding : 20,
    borderRadius: 20,
    width : '45%'
  },
  cardContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    paddingVertical : 35
  }
})