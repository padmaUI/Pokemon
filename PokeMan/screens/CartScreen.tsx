import {FlatList, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import PokemonCard from './PokeManListItem';
import Button from '../Components/Button';
import {StackParamsType} from '../types/types';

type landingScreenProp = StackNavigationProp<StackParamsType, 'Landing'>;

const CartScreen = (props: any) => {
  const navigation = useNavigation<landingScreenProp>();
  const {items: cartItems, totalQuantity} = useSelector(
    (state: any) => state.cart,
  ); // Retriveing cart details from store

  const renderItem = (data: any) => {
    let {item} = data;
    return <PokemonCard item={item} key={item.name} />;
  };

//   if no item added to cart then show a fallbck text and button to navigate back to Landing page to select items to cart.
  if (cartItems.length == 0) {
    return (
      <View style={styles.emptyCartWrapper}>
        <Text>Your Cart is empty!</Text>
        <Button
          title="View all PokeMans"
          style={styles.btnStyle}
          textStyle={styles.btnText}
          onPress={() => navigation.navigate('Landing')}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.summary}>
        <Text style={styles.summaryLabel}>Total Quantity: </Text>
        <Text style={styles.totalQuantity}>{totalQuantity}</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={pokemon => pokemon.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartWrapper: {
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
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20
  },
  summaryLabel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  totalQuantity: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CartScreen;
