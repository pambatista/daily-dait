import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

import { TypeMeal } from "./type";

type MealDateItem = {
  title: string;
  data: TypeMeal[];
};

export async function getAllMealsByDate() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const meals: TypeMeal[] = storage ? JSON.parse(storage) : [];

    const mealsByDate = meals.reduce((acc: MealDateItem[], meal: TypeMeal) => {
      const mealExists = acc.find((item) => item.title === meal.date);

      if (mealExists) {
        const NewAcc = acc.map((item) => {
          if (item.title === meal.date) {
            return {
              title: item.title,
              data: [...item.data, meal],
            };
          }
          return item;
        });

        return NewAcc;
      } else {
        const mealObject = {
          title: meal.date,
          data: [meal],
        };

        return [...acc, mealObject];
      }
    }, []);

    return mealsByDate;
  } catch (error) {
    throw error;
  }
}
