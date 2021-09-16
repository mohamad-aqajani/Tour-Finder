import axios from 'axios';

// i stole this api key from your official website!!
const apiKey = 'AIzaSyCjiWRgSkx0nyC7-PSU-0BOVLRORoiRH0Y';

export async function addressAutoComplete(input) {
  input = input.replace(' ', '');
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}&sessiontoken=1234567890&types=%28cities%29`
    );

    console.log({ data });

    return data?.predictions;
  } catch (error) {
    console.log({ error });
    return [];
  }
}

export async function getPointsOfAddress(address) {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    );

    console.log({ points: results[0]?.geometry?.location });
    return results[0]?.geometry?.location;
  } catch (error) {
    console.log({ error });
    return {};
  }
}
