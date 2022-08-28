import React, { useState } from 'react';
import { DrawerSection, DrawerItem } from 'react-native-paper';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

        const { active } = this.state;
        return (
            <DrawerSection title="Some title">
                <DrawerItem
                    label="First Item"
                    active={active === 'First Item'}
                    onPress={() => { this.setState({ active: 'First Item' }); }}
                />
                <DrawerItem
                    label="Second Item"
                    active={active === 'Second Item'}
                    onPress={() => { this.setState({ active: 'Second Item' }); }}
                />
            </DrawerSection>
        );
}

export default NavMenu;