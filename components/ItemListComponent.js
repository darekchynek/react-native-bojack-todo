import React from 'react';
import { View, StyleSheet} from 'react-native';
import ItemComponent from './ItemComponent';

export default ItemListComponent = (props) => {
    return (
        <View>
            {props.items.map(item => {
                return (
                    <ItemComponent
                        key={item.id}
                        item={item} />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        flex: 1,
        justifyContent: 'center',
    }
})