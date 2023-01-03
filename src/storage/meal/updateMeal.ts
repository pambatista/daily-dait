import { GROUP_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TypeMeal } from "./type";
import { getAllMeals } from "./getAllMeals";

export async function updateMeal(newMeal: TypeMeal) {
  try {
    const storageMeal = await getAllMeals();

    const meals = storageMeal.map((meal) => {
      if (newMeal.id === meal.id) {
        meal = newMeal;
      }
      return meal;
    });
    const storage = JSON.stringify([...meals]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
