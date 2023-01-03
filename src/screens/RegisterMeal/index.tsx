import { FromMeal, MealState } from "@components/FromMeal";
import { createMeal } from "@storage/meal/createMeal";
import { useState } from "react";

export function RegisterMeal() {
  const [meal, setMeal] = useState<MealState>({
    name: "",
    description: "",
    date: "",
    hours: "",
    isDiet: null,
  });

  function changeMeal(fiel: string, value: any) {
    const newMeal = {
      ...meal,
      [fiel]: value,
    };

    setMeal(newMeal);
  }

  async function handleCreateMeal() {
    try {
      await createMeal(meal);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FromMeal
      meal={meal}
      changeMeal={changeMeal}
      submit={handleCreateMeal}
    ></FromMeal>
  );
}
