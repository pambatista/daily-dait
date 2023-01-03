import { TouchableOpacity, View } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";

import {
  Button,
  ButtonText,
  Chip,
  ChipStatus,
  ChipText,
  Container,
  Content,
  Form,
  Header,
  HeaderIcon,
  HeaderText,
  IconPencil,
  IconTrash,
  TextSpan,
  TextStrong,
  Title,
} from "./styles";
import { ModalDelete } from "@components/ModalDelete";
import { getOneMealsById } from "@storage/meal/getOneMealById";

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

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [meal, setMeal] = useState<Meal>();

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleNavigateUpdate() {
    navigation.navigate("updateMeal", {
      id,
    });
  }

  function handleGoBack() {
    navigation.navigate("home");
  }

  async function fetchMeal() {
    const data = await getOneMealsById(id);
    setMeal(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container isDiet={meal?.isDiet}>
      <Header>
        <TouchableOpacity onPress={() => handleGoBack()}>
          <HeaderIcon />
        </TouchableOpacity>

        <HeaderText>Refeição</HeaderText>
      </Header>
      <Content>
        <Form>
          <View>
            <Title>{meal?.name}</Title>
            <TextSpan>{meal?.description}</TextSpan>

            <TextStrong>Data e hora</TextStrong>
            <TextSpan>
              {meal?.date} às {meal?.hours}
            </TextSpan>

            <Chip>
              <ChipStatus isDiet={meal?.isDiet} />
              <ChipText>
                {meal?.isDiet ? "dentro da dieta" : "fora da dieta"}
              </ChipText>
            </Chip>
          </View>
          <View>
            <Button onPress={() => handleNavigateUpdate()}>
              <IconPencil />
              <ButtonText>Editar refeição</ButtonText>
            </Button>

            <Button
              style={{ marginTop: 9 }}
              outline
              onPress={() => setModalVisible(true)}
            >
              <IconTrash />
              <ButtonText outline>Excluir refeição</ButtonText>
            </Button>
          </View>
        </Form>
      </Content>
      <ModalDelete
        modalVisible={modalVisible}
        updateModal={setModalVisible}
        id={id}
      />
    </Container>
  );
}
