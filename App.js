import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import TicTacToeTab from './src/tabs/TicTacToeTab';
import SettingsTab from './src/tabs/SettingsTab';

export default createMaterialTopTabNavigator(
    {
        TicTacToe: TicTacToeTab,
        Settings: SettingsTab
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'TicTacToe') {
                    iconName = `ios-game-controller-a${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-hammer${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor}/>;
            },
        }),
        // tabBarOptions: {
        //     activeTintColor: 'white',
        //     inactiveTintColor: 'white',
        // },
    }
);