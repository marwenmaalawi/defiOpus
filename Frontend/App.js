import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';

import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:4200`;
export default function App() {

  const [data, setdata] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("random");
 
  React.useEffect(() => {
    
    if(searchQuery!=''){
    
    fetch(`${uri}/api/getsearchByterm/${searchQuery}`)
    .then(rep=>rep.json())
    .then(json => {
      setdata(json)
       
    })
  }
   
 },[searchQuery]);
  return (
   
   
    
    <ScrollView style={styles.container}>
    <Searchbar style={styles.Searchbar}
   
   placeholder="Search"
   onSubmitEditing={(e)=>setSearchQuery(e.nativeEvent.text)}
   /> 
   
  {data&& data.map((item,index)=>{ 
 return (
  <View key={index}>
    <Card style={{marginTop:15,marginBottom : 15, padding:5,   backgroundColor:"white"}}>
    <Text style={{marginBottom:15}}>
    <Avatar.Image style={{marginLeft: 10, marginTop:5}}
    
source={{ uri: item.profile_image }}  />

    <Card.Title title={item.username} subtitle={item.created_at} r/>
    </Text>    
    <Card.Content>
    
      </Card.Content>
    <Card.Cover source={{ uri: item.url }} />
   
  </Card>
  </View>
);
  })

  } 
    </ScrollView>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      },
  Searchbar: {
    backgroundColor: '#fff',
    marginTop: "10%",

  },
})
