import React, { memo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { LIGHT_GREY, WHITE } from '../constants/colors.constant';
import { hp, wp } from '../utils/responsiveUI';

const styles = StyleSheet.create({
  main: {
    width: wp(95),
    alignSelf: 'center',
    elevation: 4,
    shadowColor: LIGHT_GREY,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8,
    paddingVertical: hp(0.7),
    paddingHorizontal: wp(1.5),
    backgroundColor: WHITE,
    marginVertical: hp(1.3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: hp(12),
    aspectRatio: 1,
    borderRadius: 6,
  },
  name: { fontWeight: 'bold', fontSize: hp(2), maxWidth: wp(60) },
  city: {
    fontWeight: 'normal',
    opacity: 0.5,
    fontSize: hp(1.8),
    maxWidth: wp(60),
    marginTop: hp(3),
  },
});

const TourListItem = ({ item }) => (
  <Pressable style={styles.main}>
    <Image style={styles.img} source={{ uri: item?.thumbnail_url }} />
    <View style={{ marginStart: wp(3) }}>
      <Text style={styles.name} numberOfLines={2}>
        {item?.name}
      </Text>
      <Text style={styles.city} numberOfLines={1}>
        {item?.city}
      </Text>
    </View>
  </Pressable>
);

TourListItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  item: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

export default memo(TourListItem);
