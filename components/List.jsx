import { Text, FlatList, StyleSheet, View } from 'react-native'

export default function List(props){
    console.log("Props är: " + props.foo);

    const list = props.foo.map((element) => 
        <Text>{element}</Text>
    );

    return(
        <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              >{item}</Text>} 
                />
        </View>
    )
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
        width: 400,
        backgroundColor: 'yellow',
    },  
})  