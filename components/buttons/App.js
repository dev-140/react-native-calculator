import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { IconButton, Button } from 'react-native-paper'

function App({ setDisplayText, setDisplayTotal }) {
    const [operand, setOperand] = useState('')

    const getOperands = () => {
        console.log(operand)
    }

    const addOperand = (number) => {
        setOperand((prevFOperand) => prevFOperand + number)
    }

    useEffect(() => {
        console.log('Count has been updated:', operand)
        handleButtonPress(operand)
    }, [operand])

    const computeExpression = (expression) => {
        try {
            const result = eval(expression)
            setDisplayTotal(result.toString())
            return result.toString()
        } catch (error) {
            setDisplayTotal("Error")
            return 'Error'
        }
    }

    const handleButtonPress = (operands) => {
        setDisplayText(operands)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.subContainer, { marginTop: 0 }]}>
                <IconButton
                    icon="decimal-decrease"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('.'), setDisplayTotal('') ]}
                />
                <Button mode="contained" style={styles.primaryBtn} compact={true} onPress={() => [addOperand('('), setDisplayTotal('') ]}>
                    <Text style={styles.btnText}>(</Text>
                </Button>
                <Button mode="contained" style={styles.primaryBtn} compact={true} onPress={() => [addOperand(')'), setDisplayTotal('') ]}>
                    <Text style={styles.btnText}>)</Text>
                </Button>
                <IconButton
                    icon="division"
                    iconColor={'#6e4ff7'}
                    size={50}
                    mode="outlined"
                    onPress={() => [addOperand('/'), setDisplayTotal('') ]}
                />
            </View>
            <View style={[styles.subContainer, { marginTop: 20 }]}>
                <IconButton
                    icon="numeric-1"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('1'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="numeric-2"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('2'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="numeric-3"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('3'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="plus"
                    iconColor={'#6e4ff7'}
                    size={50}
                    mode="outlined"
                    onPress={() => [addOperand('+'), setDisplayTotal('') ]}
                />
            </View>
            <View style={[styles.subContainer, { marginTop: 20 }]}>
                <IconButton
                    icon="numeric-4"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('4'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="numeric-5"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('5'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="numeric-6"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('6'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="minus"
                    iconColor={'#6e4ff7'}
                    size={50}
                    mode="outlined"
                    onPress={() => [addOperand('-'), setDisplayTotal('') ]}
                />
            </View>
            <View style={[styles.subContainer, { marginTop: 20 }]}>
                <IconButton
                    icon="numeric-7"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('7'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="numeric-8"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('8'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="numeric-9"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('9'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="multiplication"
                    iconColor={'#6e4ff7'}
                    size={50}
                    mode="outlined"
                    onPress={() => [addOperand('*'), setDisplayTotal('') ]}
                />
            </View>
            <View style={[styles.bottomWrapper, { marginTop: 20 }]}>
                <IconButton
                    icon="numeric-0"
                    backgroundColor={'#6e4ff7'}
                    iconColor={'#fff'}
                    size={50}
                    mode="contained"
                    onPress={() => [addOperand('0'), setDisplayTotal('') ]}
                />
                <IconButton
                    icon="close-circle"
                    iconColor={'#6e4ff7'}
                    size={50}
                    mode="outlined"
                    onPress={() => [setOperand(''), setDisplayTotal('') , getOperands()]}
                />
                <IconButton
                    icon="equal"
                    iconColor={'#6e4ff7'}
                    size={50}
                    mode="outlined"
                    onPress={() => [
                        setOperand(''),
                        console.log(computeExpression(operand)),
                    ]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    primaryBtn: {
        backgroundColor: '#6e4ff7',
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 25,
    },
    bottomWrapper: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default App
