import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Search from './pages/search';
import Profile from './pages/profile';
import Settings from './pages/settings';
import ListVerbs from './pages/verbs';
import NewDoshi from './pages/add-verb';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="ListVerbs"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person';
            size = 35;
          } else if (route.name === 'Historico') {
            iconName = focused ? 'book' : 'book';
            size = 32;
          } else if (route.name === 'Menu') {
            iconName = focused ? 'search' : 'search';
            size = 35;
          } else if (route.name === 'Pontos de troca') {
            iconName = focused ? 'settings' : 'settings';
            size = 33;
          } else if (route.name === 'NewDoshi') {
            iconName = focused ? 'add-circle' : 'add-circle';
            size = 38;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#53aded',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
      }}>
      <Tab.Screen name="Menu" component={Search} />
      <Tab.Screen name="Historico" component={ListVerbs} />
      <Tab.Screen name="NewDoshi" component={NewDoshi} />
      <Tab.Screen name="Perfil" component={Profile} />
      <Tab.Screen name="Pontos de troca" component={Settings} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={() => ({
            title: false,
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
