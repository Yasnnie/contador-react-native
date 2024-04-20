import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [people, setPeople] = useState(0);

  function addPeople(){
    setPeople(people + 1)
  }
  function removePeople(){
    if(people - 1 >= 0)
    setPeople(people - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <View style={styles.containerPeoples}>
        <Text style={styles.peoples}>{people}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addPeople}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={removePeople}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5260C5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
    color: "#fff",
    marginBottom: 40,
  },
  containerPeoples:{
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 64,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  peoples: {
    fontSize:30,
    fontWeight:'600'
  },
  button:{
    width: 200,
    height: 54,
    backgroundColor:'#2F1C58',
    borderRadius: 6,
    marginTop:32,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:32,
    color:'#fff',
    
  }
});
