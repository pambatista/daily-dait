import { GROUP_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TypeMeal } from "./type";
import { getAllMeals } from "./getAllMeals";
import uuid from "react-native-uuid";

export async function createMeal(newMeal: Omit<TypeMeal, "id">) {
  try {
    const storageMeal = await getAllMeals();

    const meal = {
      ...newMeal,
      id: uuid.v4(),
    };

    const storage = JSON.stringify([...storageMeal, meal]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
