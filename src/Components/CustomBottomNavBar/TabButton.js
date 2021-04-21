import React from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ColorsArray from '../../Utils/ColorsArray';
import ColorSchema from '../../Utils/ColorSchema';

const TabButton = ({ index, isFocused, label, onPress, onLongPress, options, state }) => {
  const color = ColorsArray[index]

  const textColorStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(isFocused? color : '#222', {
        duration: 200
      }),
      opacity: withTiming(isFocused? 1 : 0, {
        duration: 300
      }),
    };
  });
  const bgColorStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isFocused? 1 : 0, {
        duration: 350
      }),
    };
  });
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...{onPress, onLongPress}}
      style={{height: '100%', width: '100%', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
    >
      <Animated.View style={[{flexDirection: 'row',height: '100%', width: '100%', alignItems: 'center'}]}>
        <Animated.View style={[{height: '100%', width: '100%', borderRadius: 20, backgroundColor: `${color}44`, position: 'absolute'}, bgColorStyle]} />
        <Animated.View style={[{height:20, width:20, justifyContent: 'center', alignItems: 'center', margin: 15}]} >
          {options.tabBarIcon({color: isFocused ? color : ColorSchema.dark})}
        </Animated.View>
        <Animated.Text numberOfLines={1} style={[{ color: isFocused ? color : '#222' }, textColorStyle]}>
          {isFocused ? label : ''}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>

  )
}

export default TabButton
