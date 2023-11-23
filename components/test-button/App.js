import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        // This will run after the component renders, when the state has been updated
        console.log('Count has been updated:', count)
    }, [count]) // Specify the dependencies to trigger the effect when 'count' changes

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={increment} />
        </View>
    )
}

export default App
