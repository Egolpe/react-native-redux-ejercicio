import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from  './components/ListItem';

const styles = StyleSheet.create({
    container: {
      marginTop:35,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
});

const data = [
    {
        id: 1, desc: 'texto prueba', completed: false
    },
    {
        id: 2, desc: 'texto prueba 2', completed: false
    }
]
export default  () => {
    return(
      <View style={styles.container}>
        <FlatList 
            style={styles.list}
            data={data}
            keyExtractor={x => String(x.id)}
            renderItem={({ item }) => 
                <ListItem onPress={() => {} } desc={item.desc}/>} 
        />
      </View>
    )
}


