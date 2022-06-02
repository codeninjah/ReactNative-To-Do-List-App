import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import List from './List';

export default function CreateItem(){
    const [text, setText] = useState("test")
    const [myArray, setMyArray] = useState(["hello"])

    const handleBtnClick = () => {
        console.log("Btn works");
        console.log(text);

        setMyArray( myArray => [...myArray, text]);


    }
    

    return(
        <>
        <List foo={myArray} bar="zomg"/>
            <TextInput 
                placeholder="Name of item" 
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <Button title="Create Item" onPress={() => handleBtnClick(text)}/>
        </>
    )
}