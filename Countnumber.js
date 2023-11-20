import React, {useState} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const Countnumber = () => {
  const [number, setnumber] = useState(0)
  
    return (
    <View>
        <Text style={StyleSheet.text}>{number}</Text>
        <Button title="Tambah" onPress={() => setnumber(number + 1)} />
        <Button title='Reset' onPress={() => setnumber(0)} color="red" />
    </View>
  )
}

export default Countnumber

const styles = StyleSheet.create({
    Text: {
        fontSize: 50,
        fontWeight: 'bold',
    }
})