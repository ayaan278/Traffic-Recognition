import {StyleSheet} from "react-native";
import {Colors} from './Colors'

export default StyleSheet.create({
    //--------------------General Styling------------------------------
    view:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        marginTop: 120,
        paddingTop: 25,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    text: {
        backgroundColor: Colors.colors.primary,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: '450',

    },
    button: {
        margin: 15,
        backgroundColor: Colors.colors.secondary,
    },
    //-----------------------------------------------------------------
    //--------------------Home Styles----------------------------------
    home_view:{
        height: '100%',
        paddingTop: 25,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
    },
    //-----------------------------------------------------------------
    //--------------------NavMenu Styles-------------------------------
    draw_view:{
        height: '100%',
        width: '100%',
        backgroundColor: Colors.colors.secondary,
    },
    draw_section:{
        marginTop: 150,
        paddingTop: 20,
        height: '100%',
        width: '85%',
        backgroundColor: Colors.colors.primary,
    },
    draw_section_opposite:{
        position: 'absolute',
        height: '100%',
        width: '15%',
        backgroundColor: Colors.colors.thirdly,
        right: 0,
    },
    drawer_item: {
        padding: 10,
        margin: 20,
    },
    draw_text:{
        position: 'absolute',
        top: 100,
        color: Colors.colors.primary,
        left: 15,
        fontSize: 20,
        fontWeight: '600',
        wrap: true,
    },
    icon_button_opposite: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    //-------------------------------------------------------------------
    //-----------------------Header Styles-------------------------------
    header:{
        width: '100%',
        backgroundColor: Colors.colors.primary,
    },
    //----------------------------------------------------------------------
    //---------------------Login&SignUp Styles------------------------------
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 4,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.colors.primary,
    },
    forgot: {
        fontSize: 15,
        color: Colors.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: Colors.colors.secondary,
    },
    //--------------------Permission Styles-------------------------------
    permissions_view:{
        padding: 20,
        marginVertical: 10,
        width: '100%',
    },
    permissions_text:{
        width: '80%',
        fontSize: 18,
        fontWeight: "normal",
    },
    permissions_switch: {
        width: '20%',
        position: 'absolute',
        right: 5,
    },
    //----------------------------------------------------------------------
    //-----------------------Account Setting Styles-------------------------
    account_view: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        width: '100%',
    },
    //----------------------------------------------------------------------
    privacy_view: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        width: '100%',
    },
    //----------------------------------------------------------------------
})