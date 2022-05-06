import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        width: 300,
        height: 75
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    buttonContainer: {
        width: 300,
        height: 20,
        marginTop: 20
    },
    loginButton: {
        width: '90%'
    }
});

export default styles;