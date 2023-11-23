import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import Heading from './components/heading/App'
import Screen from './components/screen/App'
import Buttons from './components/buttons/App'

export default function App() {
    const [displayText, setDisplayText] = useState('')
    const [displayTotal, setDisplayTotal] = useState('')

    return (
        <PaperProvider>
            <Heading />
            <SafeAreaView>
                <Screen displayText={displayText} displayTotal={displayTotal}/>
                <Buttons
                    setDisplayText={setDisplayText}
                    setDisplayTotal={setDisplayTotal}
                />
            </SafeAreaView>
        </PaperProvider>
    )
}
