import { IndicatorCard } from "@components/IndicatorCard";
import {
  Container,
  ContentIndicators,
  ContentScreen,
  Icon,
  Number,
  Subtitle,
  Title,
  WrapperIndicators,
} from "./styles";
import theme from "../../theme";
import { TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getAllMeals } from "@storage/meal/getAllMeals";

type DashboardData = {
  total: number;
  dietMeals: number;
  offDietMeals: number;
  porcentage: number;
  daysOnTheDiet: number;
};

export function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    total: 0,
    dietMeals: 0,
    offDietMeals: 0,
    porcentage: 0,
    daysOnTheDiet: 0,
  });

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("home");
  }

  async function fetchMeals() {
    try {
      const meals = await getAllMeals();

      const total = meals.length;

      const dietMeals = meals.filter((item) => item.isDiet).length;

      const offDietMeals = meals.filter((item) => !item.isDiet).length;

      const porcentage = Math.ceil((dietMeals / total) * 100);

      const newData = {
        total: total ? total : 0,
        dietMeals: dietMeals ? dietMeals : 0,
        offDietMeals: offDietMeals ? offDietMeals : 0,
        porcentage: porcentage ? porcentage : 0,
        daysOnTheDiet: 0,
      };

      setData(newData);
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
    <Container type={data.porcentage < 50 ? "SECONDARY" : "PRIMARY"}>
      <ContentScreen>
        <TouchableOpacity onPress={() => handleNavigate()}>
          <Icon
            color={
              data.porcentage < 50
                ? theme.COLORS.RED_700
                : theme.COLORS.GREEN_700
            }
          ></Icon>
        </TouchableOpacity>
        <Number>{data.porcentage}%</Number>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </ContentScreen>
      <ContentIndicators>
        <Title>Estatísticas gerais</Title>
        <IndicatorCard
          number={data.daysOnTheDiet}
          subtitle="melhor sequência de pratos dentro da dieta"
          type="TERTIARY"
        ></IndicatorCard>
        <IndicatorCard
          number={data.total}
          subtitle="refeições registradas"
          type="TERTIARY"
        ></IndicatorCard>
        <WrapperIndicators>
          <IndicatorCard
            number={data.dietMeals}
            subtitle="refeições dentro da dieta"
            type="PRIMARY"
            style={{ width: "48%" }}
          ></IndicatorCard>
          <IndicatorCard
            number={data.offDietMeals}
            subtitle="refeições fora da dieta"
            type="SECONDARY"
            style={{ width: "48%" }}
          ></IndicatorCard>
        </WrapperIndicators>
      </ContentIndicators>
    </Container>
  );
}
