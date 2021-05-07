import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import * as appcolor from '../utils/colors';
function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
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
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
              <View style={styles.tabdesign}>
                  {/* <View>
                      <Icon name="home" color={'black'} size={20} />
                  </View> */}
            <Text style={{ color: isFocused ? appcolor.primary : '#222' }}>
              {label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#D7DBDD',
       borderWidth:0.1,
       elevation:4,
       height:50,
    },
    tabdesign:{
       
       height:'100%',
       justifyContent:'center',
       alignItems:'center'
    }
})
export default MyTabBar;