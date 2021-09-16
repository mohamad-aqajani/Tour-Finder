import axios from 'axios';

export default async function getTourList(points, page) {
  try {
    const data = await axios.get('https://staging.tourmega.com/api/v2/tours', {
      params: { ...points, count: 10, page },
    });
    console.log({ tours: data.data?.data });
    return data.data?.data;
  } catch (error) {
    console.log({ error });
    return [];
  }
}
