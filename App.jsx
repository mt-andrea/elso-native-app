import { StyleSheet, View } from 'react-native';
import React, {useState} from 'react'
import InputItem from './components/InputItem';
import ListItem from './components/ListItem';
import { ScrollView } from 'react-native';
import { Text } from 'react-native';


export default function App() {

  const [lista, setLista] = useState([])

  function hozzaad(szoveg) {
    if (szoveg.length===0) {
      return
    }
    setLista(uj=>[...lista, {id: lista.length+1,tetel:szoveg}])
  }

  let torol=(id)=>{
    setLista(lista=>lista.filter((tetel)=>tetel.id!=id))
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Bevasarlolista</Text>
      <InputItem 
      hozzaad={hozzaad}
      />
      <ScrollView>
      {lista.map((sor)=>
      <ListItem 
      key={sor.id}
      sor={sor}
      torol={torol}
      />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:30
  },
  title:{
    textAlign:"center",
    fontSize:24,
    fontWeight:"bold",
    marginBottom:18
  }
});
