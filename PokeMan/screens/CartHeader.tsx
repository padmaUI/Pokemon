import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useSelector } from 'react-redux';

import {StackParamsType} from '../types/types';

type landingScreenProp = StackNavigationProp<StackParamsType, 'Landing'>;

// Cart header icon for Landing page
const CartHeader = (props: any) => {
  const navigation = useNavigation<landingScreenProp>();
  const totalCount = useSelector((state: any) => state.cart.totalQuantity); //Readin total quantity to show over the cart icon
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ position: 'relative' }}>
      <Image
        height={40}
        width={40}
        source={{
          uri: 'https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-orange.png',
        }}
      />
      <View style={styles.totalCountWrapper}>
        <Text style={styles.count}>{totalCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    totalCountWrapper: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "#FF4500",
        height: 25,
        width: 25,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    count: {
        color: "white",
        fontSize: 20
    }
})

export default CartHeader;
