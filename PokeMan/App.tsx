import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './Store';
import Screens from './Navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Screens />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
