import { SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

import LogoImg from "@assets/Logo.png";

import { IndicatorButton } from "@components/IndicatorButton";
import { ListFoodTitle } from "@components/ListFoodTitle";
import { ListFoodItem } from "@components/ListFoodItem";

import {
  Avatar,
  Button,
  ButtonText,
  Container,
  Header,
  Icon,
  Logo,
  Title,
} from "./styles";

import { TypeMeal } from "@storage/meal/type";
import { getAllMealsByDate } from "@storage/meal/getallMealsByDate";
import { getAllMeals } from "@storage/meal/getAllMeals";

type MealDateItem = {
  title: string;
  data: TypeMeal[];
};

export function Home() {
  const [meals, setMeals] = useState<MealDateItem[]>([]);

  const [porcentageMeals, setPercentageMeals] = useState(0);

  const navigation = useNavigation();

  function handleNavigationDashboard() {
    navigation.navigate("dashboard");
  }

  function handleNavigationRegisterMeal() {
    console.log("register");
    navigation.navigate("registerMeal");
  }

  function handleOpenMeal(id: string) {
    navigation.navigate("meal", { id });
  }

  async function fetchMeals() {
    try {
      const mealsData = await getAllMealsByDate();
      const total = await getAllMeals();

      const mealDiet = total.filter((item) => item.isDiet);

      const porcentage = Math.ceil((mealDiet.length / total.length) * 100);

      setPercentageMeals(porcentage);

      await setMeals(mealsData);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
        <Avatar source={LogoImg} />
      </Header>
      <IndicatorButton
        number={porcentageMeals}
        subtitle="das refeições dentro da dieta"
        style={{ marginVertical: 40 }}
        onPress={() => handleNavigationDashboard()}
      />
      <Title>Refeições</Title>
      <Button onPress={() => handleNavigationRegisterMeal()}>
        <Icon />
        <ButtonText>Nova refeição</ButtonText>
      </Button>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListFoodItem
            hours={item.hours}
            food={item.name}
            isDiet={item.isDiet}
            onPress={() => handleOpenMeal(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ListFoodTitle>{title.replaceAll("/", ".")}</ListFoodTitle>
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 16 }}
      />
    </Container>
  );
}
