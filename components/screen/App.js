import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'

function App({ displayText, displayTotal }) {
    return (
        <View style={styles.wrapper}>
            <Card style={styles.screen}>
                <Card.Content>
                    <Text variant="headlineMedium" style={styles.text}>
                        {displayText}
                    </Text>
                    <Text
                        variant="displayMedium"
                        style={[styles.text, { marginTop: 30 }]}
                    >
                        {displayTotal}
                    </Text>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    screen: {
        marginTop: 0,
        height: 150,
        backgroundColor: '#6e4ff7',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'right',
    },
})

export default App
