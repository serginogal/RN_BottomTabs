import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ColorsSchema from '../Utils/ColorSchema';
import CustomBottomNavBar from '../Components/CustomBottomNavBar/CustomBottomNavBar';

const ICON_SIZE = 15;
 
 const Tab = createBottomTabNavigator()
 
 const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{color: isDarkMode? ColorsSchema.light : ColorsSchema.dark,}}>Home!</Text>
     </View>
   );
 }
 const Screen1 = () => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{color: isDarkMode? ColorsSchema.light : ColorsSchema.dark,}}>Screen1!</Text>
     </View>
   );
 }
 const Screen2 = () => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{color: isDarkMode? ColorsSchema.light : ColorsSchema.dark,}}>Screen2!</Text>
     </View>
   );
 }
 const Screen3 = () => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{color: isDarkMode? ColorsSchema.light : ColorsSchema.dark,}}>Screen3!</Text>
     </View>
   );
 }
 
 const BottomTabsNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDarkMode? DarkTheme : DefaultTheme}>
      <Tab.Navigator tabBar={ props => <CustomBottomNavBar {...props} /> }>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color}) =>  <Icon name="home" {...{color}} size={ICON_SIZE} /> }} />
        <Tab.Screen name="Screen1" component={Screen1} options={{ tabBarIcon: ({color}) =>  <Icon name="beer" {...{color}} size={ICON_SIZE} /> }} />
        <Tab.Screen name="Screen2" component={Screen2} options={{ tabBarIcon: ({color}) =>  <Icon name="atom" {...{color}} size={ICON_SIZE} /> }} />
        <Tab.Screen name="Screen3" component={Screen3} options={{ tabBarIcon: ({color}) =>  <Icon name="campground" {...{color}} size={ICON_SIZE} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
 };
 
 const styles = StyleSheet.create({
 });
 
 export default BottomTabsNavigator;
 