import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  return (
      <TouchableOpacity onPress={()=>props.torol(props.sor.id)}>
    <View style={styles.listitem}>
        <Text>{props.sor.tetel}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    listitem:{
        width:"60%",
        marginLeft:"auto",
      marginRight:"auto",
      marginVertical:5,
      padding:10,
      backgroundColor:"#ccc"
    }
})

export default ListItem