import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const getStorageData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (!data) return;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const checkExistence = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys.includes(key);
  } catch (error) {
    console.log(error);
  }
};
