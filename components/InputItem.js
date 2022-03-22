import React from 'react'
import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';

const InputItem = (props) => {

    const [szoveg, setSzoveg] = useState("");

    function beallit(beirt) {
        setSzoveg(beirt)
    }

    let kesz=()=>{
        props.hozzaad(szoveg)
        setSzoveg("")
    }

  return (
<View style={styles.input}>
    <TextInput 
    placeholder='Tetel'
    style={styles.textstyle}
    onChangeText={beallit}
    value={szoveg} 
    autoFocus={true}
    />
    <Button
    title='Add'
    onPress={kesz}
    />
</View>  )
}

const styles = StyleSheet.create({
    input:{
        width:"60%",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto"
    },
    textstyle:{
        padding:10, 
        margin:5,
        flex:1
      }
})
export default InputItem