import { GROUP_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TypeMeal } from "./type";
import { getAllMeals } from "./getAllMeals";

export async function removeMeal(meal_id: string) {
  try {
    const storageMeal = await getAllMeals();

    const meals = storageMeal.filter((item) => item.id !== meal_id);
    const storage = JSON.stringify([...meals]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
