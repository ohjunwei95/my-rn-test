import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '@components/Avatar';

export default ModelContact = {

    Model: {
        id: '', firstName: '', lastName: '', email: '', phone: '',
    },

    renderContactItem: (nagivation, route) => {
        renderItem = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => nagivation.navigate(route, { contactDetail: item })}>
                    <View style={styles.itemContainer}>
                        <Avatar size={6} />
                        <Text style={styles.itemText}>{`${item.firstName} ${item.lastName}`}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return renderItem;
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex:1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(189, 195, 199, 1)',
    },
    itemText: {
        marginLeft: 10
    },
})

