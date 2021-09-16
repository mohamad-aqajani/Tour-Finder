import React, { memo, useEffect, useReducer } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import { useNavigation } from '@react-navigation/native';
import { LIGHT_GREY, ORANGE } from '../constants/colors.constant';
import { addressAutoComplete, getPointsOfAddress } from '../services/api/address.api';
import { wp, hp } from '../utils/responsiveUI';

const styles = StyleSheet.create({
  input: {
    width: wp(90),
    height: hp(6.5),
    borderRadius: 12,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    paddingHorizontal: wp(2.5),
    marginTop: hp(1),
    fontSize: hp(2),
    fontWeight: 'bold',
    color: ORANGE,
  },
  text: {
    fontSize: hp(2),
    marginVertical: hp(1),
    maxWidth: wp(87.5),
  },
  list: {
    width: wp(90),
    alignSelf: 'center',
    marginStart: wp(10),
    borderWidth: 0,
    height: hp(80),
    backgroundColor: 'transparent',
  },
  container: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: ORANGE,
    width: wp(90),
    alignSelf: 'center',
    maxHeight: hp(70),
  },
});

const SearchBar = () => {
  const { navigate } = useNavigation();

  const [state, setState] = useReducer((p, n) => ({ ...p, ...n }), {
    address: '',
    list: [],
  });

  // update auto complete address when typing...
  useEffect(() => {
    (async function updateAddressList() {
      const data = await addressAutoComplete(state.address);
      if (data) setState({ list: data });
    })();
  }, [state.address]);

  // get points af address
  const getPoints = async () => {
    const points = await getPointsOfAddress(state.address);
    if (points) navigate('TourListScreen', { points });
  };

  return (
    <AutocompleteInput
      autoFocus
      placeholder='Search City...'
      inputContainerStyle={styles.container}
      autoCompleteType='street-address'
      placeholderTextColor={LIGHT_GREY}
      onSubmitEditing={getPoints}
      style={styles.input}
      onChangeText={(address) => setState({ address })}
      value={state.address}
      data={state.list}
      flatListProps={{
        style: styles.list,
        // keyExtractor: (_, idx) => idx,
        renderItem: ({ item }) => (
          <TouchableOpacity onPress={() => setState({ address: item.description })}>
            <Text style={styles.text}>{item.description}</Text>
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default memo(SearchBar);
