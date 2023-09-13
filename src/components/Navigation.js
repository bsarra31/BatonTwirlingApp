import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

//TAB BOTTOM
const Tab = createBottomTabNavigator();

function TabGroup() {
    return(
        
        <Tab.Navigator>
            <Tab.Screen 
                name='Login'
                component={Login}
            />
            <Tab.Screen 
                name='Signup'
                component={CreateAccount}
            />
        </Tab.Navigator>
    )
};

export default function Navigation () {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
};