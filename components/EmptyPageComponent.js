import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default EmptyPageComponent = () => {
    return (
        <View style={styles.emptyPage}>
            <Text style={styles.text}>no tasks?</Text>
            <Text style={styles.textLarger}>no obligations?</Text>
            <Text style={styles.textLargest}>no purpose in life?</Text>
            <Image 
                style={styles.image}
                source={require('../assets/bojack_nice.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyPage: {
        alignSelf: 'center',
        marginTop: 80
    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    },
    textLarger: {
        fontSize: 22,
        textAlign: 'center'
    },
    textLargest: {
        fontSize: 24,
        textAlign: 'center'
    },
    icon: {
        alignSelf: 'center',
        marginTop: 20
    },
    image: {
        marginTop: 20,
        alignSelf: 'center',
        width: 250, 
        height: 300
    }
})