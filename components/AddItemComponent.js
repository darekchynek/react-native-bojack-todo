import React, { PureComponent } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, DatePickerIOS, Image} from 'react-native';
import { connect } from 'react-redux';
import uuid from 'js-uuid';
import * as actions from '../store/actions/index';

const initialState = {
    toggleDate: false,
    title: null,
    date: new Date(),
    datePicker: false,
    dateChanged: false,
    choiceImportant: false,
    important: null
}

class AddItemComponent extends PureComponent {
    state = initialState;
    constructor(props) {
        super(props);
    }

    toggleDateHandler = () => {
        this.setState({toggleDate: !this.state.toggleDate, dateChanged: true});
    }

    onChangeDateHandler = (date) => {
        this.setState({date: date, dateChanged: true})
    }
    titleItemHandler = (title) => {
        this.setState({title})
    }
    descriptionItemHandler = (description) => {
        this.setState({description})
    }
    addItemHandler = () => {
        const { navigate } = this.props.navigation;
        const newItem = {
            ...this.state
        }
        this.props.addItem({
            title: this.state.title, 
            id: uuid(),
            description: this.state.description,
            date: this.state.date,
            important: this.state.important
        });
        this.setState(initialState);
        navigate('ItemList');
    }

    render() {
        return (
            <ScrollView style={styles.addItemContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="title"
                    placeholderTextColor="grey"
                    onChangeText={this.titleItemHandler} />
                <TextInput 
                    style={styles.input} 
                    placeholder="description"
                    placeholderTextColor="grey"
                    onChangeText={this.descriptionItemHandler} />
                {this.state.toggleDate 
                    ? <View>
                        <DatePickerIOS 
                            date={this.state.date}
                            onDateChange={this.onChangeDateHandler}/>
                        <TouchableOpacity 
                            onPress={this.toggleDateHandler} 
                            style={styles.input}>
                            <Text style={styles.textButton}>choose date</Text>
                        </TouchableOpacity>
                      </View>
                    : <TouchableOpacity 
                        style={styles.input} 
                        placeholder="Choose Date" 
                        onPress={this.toggleDateHandler}>
                            <Text style={styles.text}>{this.state.dateChanged ? String(this.state.date) : "when u need to do it?"}</Text>
                      </TouchableOpacity>}
                {
                    this.state.choiceImportant
                        ? <Text style={styles.input}>{this.state.important ? `get your shit together!` : `it's not important at all`}</Text>
                        : <Text style={styles.input}>its important stuff?</Text>
                }
                <View style={styles.choiceContainer}>
                    <TouchableOpacity 
                        style={styles.choice}
                        onPress={() => this.setState({important: false, choiceImportant: true})}>
                        <Image 
                            source={require('../assets/bojack.png')}
                            style={styles.bojack} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.choice}
                        onPress={() => this.setState({important: true, choiceImportant: true})}>
                        <Image
                            source={require('../assets/princess.png')} 
                            style={styles.princess} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    onPress={this.addItemHandler} 
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>add Item</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    addItemContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 3
    },
    input: {
        width: '94%',
        borderColor: 'grey',
        borderWidth: 0.5,
        margin: 10,
        marginHorizontal: '3%',
        fontSize: 20,
        padding: 14,
        borderRadius: 3,
        color: 'grey'
    },
    text: {
        color: 'grey',
        fontSize: 20
    },
    textButton: {
        color: 'rgba(59,89,152, 1)',
        fontSize: 20,
        fontWeight: '700'
    },
    choiceContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    choice: {
        width: '50%',
        alignSelf: 'center'
    },
    princess: {
        alignSelf: 'center',
    },
    bojack: {
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 20,
        width: 140,
        height: 140
    },
    addButton: {
        width: '94%',
        margin: 10,
        backgroundColor: 'rgba(59,89,152, 1)',
        marginHorizontal: '3%',
        fontSize: 20,
        padding: 14,
        borderRadius: 3,
        color: 'white',
        marginTop: 64
    },
    addButtonText: {
        color: 'white',
        fontSize: 20
    },
})

const mapDispatchToProps = dispatch => ({
    addItem: (newItem) => dispatch(actions.addItem(newItem))
});

export default connect(null, mapDispatchToProps)(AddItemComponent);