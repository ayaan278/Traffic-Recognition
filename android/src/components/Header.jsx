import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = ({ navigation }) => {
    return (
        <Appbar.Header>
            <Appbar.Action
                title="Open drawer"
                onPress={() => navigation.navigate('Navmenu')}
                icon={MORE_ICON}/>
            <Appbar.Content title="hello"/>
        </Appbar.Header>
    )
}

export default Header;