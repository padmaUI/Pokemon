import {StyleSheet, Text, View} from 'react-native';

import Button from './Button';

// Common error component to show error message to user and action button to reperform the task.
const Error = (props: any) => {
  const {message, onRefresh} = props;
  return (
    <View style={styles.errorWrapper}>
      <Text>{message}</Text>
      <Button
        title="View all PokeMans"
        style={styles.btnStyle}
        textStyle={styles.btnText}
        onPress={onRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: 20,
  },
  btnText: {
    color: 'white',
  },
});


export default Error;