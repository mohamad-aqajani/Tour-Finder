/* eslint-disable no-undef */
/**
 * @format
 */

import 'react-native';
// import React from 'react';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import getTourList from '../src/services/api/tours.api';

test('fetch tours list', () => {
  const mock = new MockAdapter(axios);

  const fakeResultData = [{}];
  mock.onGet('https://staging.tourmega.com/api/v2/tours').reply(200, fakeResultData);

  getTourList({ lat: 0, lng: 0 }, 1)
    .then((response) => {
      expect(response).toEqual(fakeResultData);
    })
    .catch((e) => {
      expect(e.status).not.toEqual(200);
    });
});

// this is not a regular test but it can be used for checking the health of api promise
test('live api test. fetching tours', async () => {
  const data = await getTourList({ lat: 34.010835, lng: -118.256862 }, 1);
  if (data) expect(data.length).toBeGreaterThan(0);
});
