import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DrawHeader = ({ user }) => {
    return (
        <View style={{
            width: '95%',
            backgroundColor: '#FFF',
            alignItems: 'center',
            padding: 30,

            marginTop: 60,
            position: 'relative',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15

        }}>
            <Image source={require('../assets/profile.jpg')} style={{ width: 80, height: 80, borderRadius: 40, position: 'absolute', top: -50, left: 150 }} />
            <View style={{ marginLeft: 10, alignItems: 'center', width: '100%' }}>
                <Text
                    style={{ color: '#666', fontSize: 26, fontWeight: '600', textTransform: 'capitalize', marginTop: 5, textAlign: 'center' }}
                >{`${user?.firstName} ${user?.lastName}`}</Text>

            </View>
            <View style={{ width: '100%' }}>
                <Text
                    style={{ color: '#000', fontSize: 22, fontWeight: '400' }}
                >{`${user?.email}`}</Text>
            </View>

        </View>
    )
}

const DrawAccountBody = ({ user }) => {
    const item = (key, val) => (<View key={key} style={styles.itemWrapper}>
        <Text style={styles.itemKey}>{key} : </Text>
        <Text style={styles.itemValue}>{val}</Text>
    </View>)
    return (
        <View
            style={{
                width: '80%',

            }}
        >
            {Object.keys(user).map((key) => {
                if (key !== 'password') {
                    return item(key, user[key])
                }
            })}

        </View>
    )
}
export default function ProfileScreen() {
    const user = useSelector(state => state.user)
    return (
        <View style={styles.container} >
            <DrawHeader user={user} />
            <DrawAccountBody user={user} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDFAF7',
        alignItems: 'center'
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: '#666',
        backgroundColor: '#f4f9f5',
        borderRadius: 10,
        marginVertical: 10,


    },
    itemKey: {
        fontSize: 18,
        textTransform: 'capitalize',
        color: '#000',
        fontWeight: '600'
    },
    itemValue: {
        fontSize: 18,

        color: '#001f',
        fontWeight: '400'
    }
})