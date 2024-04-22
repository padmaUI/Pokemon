import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

import Card from '../Components/Card';
import Cart from '../Components/Cart';

const PokemonCard = (props: any) => {
  let {item} = props;
  const pathname = item.url.split('/');
  const id = +pathname[pathname.length - 2]; // Retriving image id from the URL property
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`; //Constructing dynamic URL to get PokeMan image by id

  return (
    <Card>
      <View style={styles.cardWrapper}>
        <View style={styles.cardLeft}>
          <Image
            style={{backgroundColor: 'transparent'}}
            source={{uri: imageURL}}
            height={70}
            width={70}
          />

          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Cart cartItem={item} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    paddingHorizontal: 10,
    color: 'gray',
  },
  cardLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PokemonCard;
