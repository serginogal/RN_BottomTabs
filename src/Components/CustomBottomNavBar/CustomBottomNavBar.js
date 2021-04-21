import React from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ColorSchema from '../../Utils/ColorSchema';
import TabButton from './TabButton';

const CustomBottomNavBar = ({ state, descriptors, navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const flex = useSharedValue(1);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? ColorSchema.darkest : ColorSchema.lighter,
  };

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const animatedStyle = useAnimatedStyle(() => {
          return {
            flex: withSpring(isFocused? flex.value : flex.value / 2, {
              damping: 10,
              stiffness: 90,
            })
          };
        });

        const onPress = () => {
          flex.value = 1
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          flex.value = 1
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
          navigation.navigate(route.name);
        };

        return (
          <Animated.View key={index} style={[ backgroundStyle, {height: 50, padding: 5}, animatedStyle ]} >
            <TabButton {...{index, isFocused, label, onPress, onLongPress, options, state}} />
          </Animated.View>
        );
      })}
    </View>
  );
}

export default CustomBottomNavBar