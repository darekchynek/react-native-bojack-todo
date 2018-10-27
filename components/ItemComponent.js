import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, DatePickerIOS, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../store/actions/index';

class ItemComponent extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.itemHeader}>
                    <View>
                        <Text style={styles.header}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View>
                        {item.important 
                            ? <Image style={{width: 80, height: 80}} source={require('../assets/princess.png')}/>
                            : <Image style={{width: 80, height: 80}} source={require('../assets/bojack.png')}/>
                        }
                    </View> 
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.tabBarAddButton}
                            onPress={() => this.props.toggleDatePicker(item.id)}>
                            <Ionicons
                                name="ios-time"
                                size={40}
                                color={item.datePicker ? "rgba(177, 228, 77, 1)" : "rgba(59,89,152, 1)"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tabBarAddButton}
                            onPress={() => this.props.deleteItem(item.id)}>
                            <Ionicons
                                name="ios-remove-circle"
                                size={40}
                                color={"rgba(177,1,77, 1)"} />
                        </TouchableOpacity>
                    </View>
                </View>
                {item.datePicker ? <DatePickerIOS date={item.date}></DatePickerIOS> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: '95%',
        backgroundColor: '#ffffff',
        padding: 10,
        minHeight: 100,
        margin: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 3
    },
    itemHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabBarAddButton: {
        fontSize: 32,
        marginRight: 10
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
    },
    description: {
        marginTop: 10,
        paddingRight: 5,

    }
})

const mapDispatchToProps = dispatch => ({
    toggleDatePicker: (id) => dispatch(actions.toggleDatePicker(id)),
    deleteItem: (id) => dispatch(actions.deleteItem(id))
});

export default connect(null, mapDispatchToProps)(ItemComponent);