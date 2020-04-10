import { AsyncStorage } from 'react-native';

const St = {
  set : async (key,value) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value) );
    } catch (error) {
      console.log(error);
    }
  },
  get:(key)=>{
    return AsyncStorage.getItem(key);
  },
  test:()=>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  },
  clear:(method)=>{
    AsyncStorage.clear();
  },
};

export default St
