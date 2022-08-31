import {StyleSheet} from "react-native";
import {Colors} from './Colors'

export default StyleSheet.create({
    draw_view:{
        height: '100%',
        width: '100%',
        backgroundColor: Colors.colors.secondary,
    },
    draw_section:{
        marginTop: 150,
        paddingTop: 20,
        height: '100%',
        width: '80%',
        backgroundColor: Colors.colors.primary,
    },
    view:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        marginTop: 100,
        paddingTop: 25,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    header:{
        width: '100%',
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
        borderRadius: 10,
        backgroundColor: Colors.colors.primary,
    },
    button: {
        margin: 15,
        backgroundColor: Colors.colors.secondary,
    },
    forgot: {
        fontSize: 15,
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
        backgroundColor: Colors.colors.secondary,
    }
})