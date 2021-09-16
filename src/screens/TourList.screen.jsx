import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { RouteProp } from '@react-navigation/native';
import { TourListItem } from '../components';
import { BACKGROUND, ORANGE } from '../constants/colors.constant';
import getTourList from '../services/api/tours.api';
import { hp } from '../utils/responsiveUI';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
});

const TourList = ({ route }) => {
  const [tourList, setTourList] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (index < 2) setLoading(true);
      const data = await getTourList(route.params?.points, index);
      if (data) setTourList((prevState) => prevState.concat(data));

      return setLoading(false);
    })();
  }, [index]);

  const renderListItem = ({ item }) => <TourListItem item={item} />;

  const endRiched = () => {
    setIndex((prevState) => prevState + 1);
  };

  return (
    <SafeAreaView style={styles.main}>
      {loading ? (
        <ActivityIndicator
          size='large'
          color={ORANGE}
          style={{ alignSelf: 'center', marginTop: hp(35) }}
        />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={{ alignSelf: 'center', marginTop: hp(hp(4)) }}>0 tours found</Text>
          }
          onEndReached={endRiched}
          data={tourList}
          renderItem={renderListItem}
        />
      )}
    </SafeAreaView>
  );
};

TourList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  route: RouteProp,
};

export default TourList;
