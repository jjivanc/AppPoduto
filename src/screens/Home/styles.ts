import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7536c7',
        padding: 24,
        

    },
    cadastro: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text:{
        color: '#ff9900',
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        margin: 10
    },
    buttonContainer:{
        width: '100%',
        height: 56,
        margin: 10,
        backgroundColor: '#ff9900',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
    },
    buttonTitle:{
        flex:1,
        color: '#fff',
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        textAlign: 'center',        
    },
})