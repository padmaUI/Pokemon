import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPokeMans} from '../Store/pokeman-slice';
import PokemonCard from './PokeManListItem';
import Error from '../Components/Error';

const PokeManList = () => {
  const pokeManList = useSelector((state: any) => state.pokeMan.items);
  const {isLoading, isError, errorMessage} = useSelector(
    (state: any) => state.uiState,
  ); // Retriving UI state from store
  const dispatch: any = useDispatch();

  // Configuring render item for PokeMan Card
  const renderItem = (data: any) => {
    let {item} = data;
    return <PokemonCard item={item} key={item.name} />;
  };

  useEffect(() => {
    dispatch(fetchPokeMans());
  }, [dispatch]);

  //   Showing error message on screen instead of nothing, when error occured
  if (isError) {
    <Error message={errorMessage} onRefresh={dispatch(fetchPokeMans())} />;
  }

  //   Showing spinner whle api call is being happened!
  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={50} color="#FF4500" />
      </View>
    );
  }

  return (
    <FlatList
      data={pokeManList}
      renderItem={renderItem}
      keyExtractor={pokemon => pokemon.name}
      refreshing={isLoading}
    />
  );
};

export default PokeManList;
