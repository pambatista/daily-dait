import { FromMeal, MealState } from "@components/FromMeal";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { getOneMealsById } from "@storage/meal/getOneMealById";
import { updateMeal } from "@storage/meal/updateMeal";
import { useCallback, useState } from "react";

type RouteParams = {
  id: string;
};

type Meal = {
  name: string;
  description: string;
  date: string;
  hours: string;
  isDiet: boolean | null | undefined;
  id: string;
};
export function UpdateMeal() {
  const [meal, setMeal] = useState<Meal>();

  const route = useRoute();
  const { id } = route.params as RouteParams;

  function changeMeal(fiel: string, value: any) {
    const newMeal = {
      ...meal,
      [fiel]: value,
    } as Meal;

    setMeal(newMeal);
  }

  async function handleUpdateMeal() {
    try {
      if (typeof meal !== undefined) {
        updateMeal(meal as Meal);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMeal() {
    try {
      const data = await getOneMealsById(id);
      setMeal(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <FromMeal
      meal={meal}
      changeMeal={changeMeal}
      editar
      submit={() => handleUpdateMeal()}
    ></FromMeal>
  );
}
