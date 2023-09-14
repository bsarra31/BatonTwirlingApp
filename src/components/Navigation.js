import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

//STACK
const Stack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Signup'
                component={CreateAccount}
                options={{presentation: 'modal', headerShown: false}}
            />
        </Stack.Navigator>
    )
}

//TAB BOTTOM
// const Tab = createBottomTabNavigator();

// function TabGroup() {
//     return (

//         <Tab.Navigator
//             screenOptions={({ route, navigation }) => ({
//                 tabBarIcon: ({ color, size, focused }) => {
//                     let iconName;
//                     if(route.name === 'Login') {
//                         iconName = focused ? 'arrow-left-circle' : 'arrow-left';
//                     } else if (route.name === 'Signup') {
//                         iconName = focused ? 'sunrise' : 'moon';
//                     }

//                     return <Feather name={iconName} size={24} color='black' />
//                 },
//                 headerShown: false,
//                 tabBarActiveTintColor: '#000000',
//             })}
//         >
//             <Tab.Screen
//                 name='Login'
//                 component={Login}
//             />
//             <Tab.Screen
//                 name='Signup'
//                 component={CreateAccount}
//             />
//         </Tab.Navigator>
//     )
// };

export default function Navigation() {
    return (
        <NavigationContainer>
            <HomeStackGroup />
        </NavigationContainer>
    )
};