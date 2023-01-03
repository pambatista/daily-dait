import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

import { TypeMeal } from "./type";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const meals: TypeMeal[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
