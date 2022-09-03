import {View, Text, Platform, BackHandler} from "react-native";
import React, {useEffect, useState} from "react";
import {Appbar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Colors} from '../theme/Colors'
import styles from "../theme/Styles"
import SimpleLoader from "../components/SimpleLoader"

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

export default function Home({ navigation }) {
    // BackHandler.addEventListener('hardwareBackPress', function () {
    //     BackHandler.exitApp();
    // });

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 2000);
    },[]);

    return (
        <View>
            <Appbar.Header style={styles.header}  mode={'small'} color={Colors.colors.primary}>
                <Appbar.Content title="Home"/>
                <Appbar.Action
                    title="Open drawer"
                    onPress={() => navigation.navigate('Navmenu')}
                    icon={MORE_ICON}/>
            </Appbar.Header>

            <View style={styles.home_view}>
                <Card>
                    <Card.Content>
                        <Title>Name</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur dignissimos eius facere, fuga harum, laudantium magnam minus molestiae necessitatibus nesciunt nobis perferendis perspiciatis praesentium quae reiciendis rerum soluta suscipit.</Paragraph>
                    </Card.Content>

                    <Card.Actions>
                        <Button style={styles.button}
                                buttonColor={Colors.colors.secondary}
                                mode="contained"
                                onPress={() => navigation.navigate('TrafficCamera')}>Start Driving</Button>
                    </Card.Actions>
                </Card>
            </View>
        </View>
    );
}