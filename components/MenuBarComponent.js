import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default MenuBarComponent = (props) => {
    const { navigate } = props.navigation;
    return (
        <View style={styles.tabBar}>
        <TouchableOpacity style={styles.profile}>
            
        </TouchableOpacity>
        <Text style={styles.pageTitle}>facebook task</Text>
            <TouchableOpacity
                style={styles.tabBarAddButton}
                onPress={() => navigate("AddItem")}>
                <Ionicons
                    name="ios-add-circle-outline"
                    size={40}
                    color={"rgba(59,89,152, 1)"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 64.5,
        backgroundColor: '#ffffff',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey'
    },
    tabBarAddButton: {
        fontSize: 32,
        marginRight: 10
    },
    pageTitle: {
        marginTop: 20,
        marginLeft: 18,
        alignSelf:'center',
        fontSize: 18,
        fontWeight: "600"
    },
    profile: {
        height: 20,
        width: 20,
        marginTop: 20,
        marginLeft: 10
    }
})

