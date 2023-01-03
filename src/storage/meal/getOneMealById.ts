import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

import { TypeMeal } from "./type";

export async function getOneMealsById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const meals: TypeMeal[] = storage ? JSON.parse(storage) : [];
    console.log(id);

    const meal = meals.find((item) => item.id === id);

    if (meal) {
      return meal;
    }
  } catch (error) {
    throw error;
  }
}
