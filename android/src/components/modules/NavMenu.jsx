import React, { useState } from 'react';
import { DrawerSection, DrawerItem } from 'react-native-paper';

const NavMenu = () => {
    // const [isOpen, setIsOpen] = useState('');

        return (
            <DrawerSection title="Your name">
                <DrawerItem
                    label="Account Settings"
                    // active={isOpen === 'Account Settings'}
                    // onPress={() => { this.setState({ setIsOpen: 'Account Settings' }); }}
                />
                <DrawerItem
                    label="Notifications"
                    // active={isOpen === 'Notifications'}
                    // onPress={() => { this.setState({ setIsOpen: 'Notifications' }); }}
                />
                <DrawerItem
                    label="Privacy & Data"
                    // active={isOpen === 'Privacy & Data'}
                    // onPress={() => { this.setState({ setIsOpen: 'Privacy & Data' }); }}
                />
                <DrawerItem
                    label="Log Out"
                    // active={isOpen === 'Log Out'}
                    // onPress={() => { this.setState({ setIsOpen: 'Log Out' }); }}
                />
            </DrawerSection>
        );
}

export default NavMenu;

