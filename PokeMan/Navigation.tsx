import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PokeManList from './screens/PokeManList';
import {StackParamsType} from './types/types';
import CartHeader from './screens/CartHeader.tsx';
import CartScreen from './screens/CartScreen.tsx';

let Stack = createNativeStackNavigator<StackParamsType>();

// Defining the stack navigation screens
const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        options={{title: 'PokeMan', headerRight: () => <CartHeader />}}
        component={PokeManList}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
