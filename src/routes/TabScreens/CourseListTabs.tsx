import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import Topic from '../../screens/Courses/Topic';
import Reader from '../../screens/Docs/Reader';
import { colors } from '../../static/const';

const TabStack = createBottomTabNavigator();
export default function CourseListTabs() {
    return (
        <TabStack.Navigator
            initialRouteName="Videos"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName!: any;

                    if (route.name === 'Videos') {
                        iconName = focused ? 'video' : 'video';
                    } else if (route.name === 'Books') {
                        iconName = focused ? 'book' : 'book';
                    }
                    return (
                        <FontAwesomeIcon
                            icon={iconName}
                            size={size}
                            style={{ color: color }}
                        />
                    );
                },
                headerShown: false,
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: colors.grey
            })}
        >
            <TabStack.Screen name="Videos" component={Topic} />
            <TabStack.Screen name="Books" component={Reader} />
        </TabStack.Navigator>
    )
}