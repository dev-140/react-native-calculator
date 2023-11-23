import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'

function App() {
    return (
        <Appbar.Header style={styles.bottom}>
            <Appbar.Content
                title="Group 5 Calculator"
                titleStyle={{ color: '#fff', fontWeight: 'bold' }}
            />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: '#a134eb',
        marginTop: -20,
    },
})

export default App
