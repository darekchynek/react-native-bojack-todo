import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import MenuBarComponent from './MenuBarComponent';
import ItemListComponent from './ItemListComponent';
import EmptyPageComponent from './EmptyPageComponent';
import * as actions from '../store/actions/index';

class ItemsComponent extends Component {

    componentDidMount( ) {
        //this.props.fetchItems()
    }

    render() {
        const { items, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <MenuBarComponent navigation={navigation} />
                    {
                    items.length > 0 
                    ? <ScrollView>
                        <ItemListComponent items={items} />
                      </ScrollView>
                    : <EmptyPageComponent />
                    }
                </View>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    emptyPage: {
        flex: 0,
        alignContent: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = state => ({
    items: state.items.items
});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(actions.fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);