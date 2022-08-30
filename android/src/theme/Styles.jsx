import {StyleSheet} from "react-native";
import {Colors} from './Colors'

export default StyleSheet.create({
    view:{
        // flex:1,
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'center',
        marginTop: 150,
        // marginLeft: 10,
        // marginRight: 10,
        backgroundColor: Colors.colors.primary,
        // height: full,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 14,
        marginRight: 6,
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 4,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        margin: 15,
    },
    forgot: {
        fontSize: 13,
        color: Colors.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: Colors.colors.secondary,
    },
    drawer_item: {
        padding: 10,
        margin: 20,

    },
    drawer_item_hover: {
        backgroundColor: '#64ffda',
    }
})