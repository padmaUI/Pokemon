import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {cardActions} from '../Store/cart-slice';
import Button from './Button';

// Common cart component to display plus minus and cart item count 
const Cart = (props: any) => {
  const {cartItem} = props;
  const cartItems = useSelector((state: any) => state.cart.items); //Reading cart items from store
  const dispatch = useDispatch();
  let selCartItem = cartItems.filter(
    (item: any) => item.name === cartItem.name,
  )[0]; //identifying the selected cart item from name

  let count = 0;

  if (selCartItem) {
    count = selCartItem.quantity; //if item found use the count from the cart store
  } else {
    selCartItem = cartItem; // if item not found then use the current item so that the quantity will get updated in the store action 
  }

  const updateCartQuantity = (type: string) => {
    if (type === 'increment') {
        // dispacting action to add item to cart or if already exists increment the count of cart item
      dispatch(cardActions.addItemToCart(selCartItem));
    }
    // checking for positive count values and we are not supporting the negative quantity of cart items
    if (type === 'decrement' && count > 0) {
        // dispatching action to remove item from cart if count is about to reach 0 or decrement the quantity of cart item
      dispatch(cardActions.removeItemFromCart(selCartItem.name));
    }
  };

  return (
    <View style={styles.cart}>
      <Button
        title="-"
        style={styles.actionButtons}
        textStyle={styles.btnText}
        onPress={() => updateCartQuantity('decrement')}
      />
      <Text style={styles.count}>{count}</Text>
      <Button
        title="+"
        style={styles.actionButtons}
        textStyle={styles.btnText}
        onPress={() => updateCartQuantity('increment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    elevation: 3,
    overflow: 'hidden',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  count: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 20,
  },
});

export default Cart;
