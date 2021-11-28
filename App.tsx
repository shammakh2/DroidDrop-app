import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './components/Tabs';

const TabNavigator = createBottomTabNavigator();

const App: () => JSX.Element = () => {
    return (
        <NavigationContainer>
            <TabNavigator.Navigator>
                <TabNavigator.Screen
                    name={'Send'}
                    component={Tabs}
                    initialParams={{children: 'Send screen'}}
                />
                <TabNavigator.Screen
                    name={'Recieve'}
                    component={Tabs}
                    initialParams={{children: 'Receive screen'}}
                />
            </TabNavigator.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
