import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OpenRidersScreen } from "./openRiders";
import { AcceptedRiders } from "./acceptedrides";
import { FinishedRidersScreen } from "./finishedriders";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookOpen as FaSolid } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { getRiders } from "../../services/getRiders";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { loadRiders, SelectAcceeptedRiders, SelectOpenRiders } from "../../store/slices/ridersSlice";
import { useAppDispatch } from "../../store/store";
import { TabBarIOSItem } from "react-native";


const Tab = createBottomTabNavigator()

export function RidersScreen () {
    const acceeptedRiders = useSelector(SelectAcceeptedRiders)
    const availableRides = useSelector(SelectOpenRiders)
    const user = useSelector(selectUser)
    const userId = user?.id || '';
    const dispatch = useAppDispatch()
    useEffect (() => {
       dispatch(loadRiders(userId))
    }, [userId, dispatch])
    return (
        <Tab.Navigator screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
                var icon;
                switch(route.name) {
                    case 'CaronasAbertas':
                        icon = focused ? FaSolid : faAddressBook;
                        break
                    case 'Caronasaceitas':
                        icon = focused ? FaSolid : faAddressBook;
                        break
                    case 'Caronasfinalizadas':
                        icon = focused ? FaSolid : faAddressBook;
                        break
                    default: 
                    return null
                }
                return <FontAwesomeIcon icon={icon} color={color} size={size}/>
            },
            tabBarActiveTintColor: '#236523',
            tabBarInactiveBackgroundColor: '#4b4747',
            tabBarActiveBackgroundColor: '#c7c7c753',
            tabBarLabelStyle: {
                fontFamily: 'CormorantSC-Medium',
                fontSize: 14,
            },
            tabBarBadgeStyle: {
                backgroundColor: '#232222',
                fontSize: 12,
            }
        })}>
            <Tab.Screen name="CaronasAbertas" component={OpenRidersScreen} options={{
                title: 'Caronas Disponívies',
                tabBarBadge: availableRides.length > 0 ? availableRides.length : undefined
                
            }} />
            <Tab.Screen name="Caronasaceitas" component={AcceptedRiders}options={{
                title: 'Aceitas',
                tabBarBadge: acceeptedRiders.length > 0 ? acceeptedRiders.length : undefined
                
            }}/>
            <Tab.Screen name="Caronasfinalizadas" component={FinishedRidersScreen}options={{
                title: 'Finalizadas'
            }} />
        </Tab.Navigator>
    )
}
