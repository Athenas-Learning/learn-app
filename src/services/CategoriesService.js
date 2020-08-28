import firestore from '@react-native-firebase/firestore';

const getCategoriesAsync = async () => {
  const ret = await firestore().collection('categories').get();
  const arrResp = [];
  ret.forEach((item)=>arrResp.push({id: item.id, ...item.data()}));
  return arrResp;
};

export { getCategoriesAsync };