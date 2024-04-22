import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Common card component to use across the application
const Card = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.card, ...props.styles}}>{props.children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: 'white',
    marginHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    paddingHorizontal: 10
  },
});

export default Card;
