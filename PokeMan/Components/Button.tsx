import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

// Common button component to use across the Application
export default function Button(props: any) {
  const {onPress, title, style, textStyle} = props;
  return (
    <Pressable style={{...styles.button, ...style}} onPress={onPress}>
      <Text style={{...styles.text, ...textStyle}}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4500',
  },
  text: {},
});
