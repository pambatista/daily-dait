import { TouchableOpacity, View } from "react-native";
import { Masks } from "react-native-mask-input";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  TextArea,
  Button,
  ButtonText,
  HeaderIcon,
  HeaderText,
  Label,
  ContentData,
  ContentButtonIsDiet,
  InputDate,
} from "./styles";

import { ButtonDiet } from "@components/ButtomDiet";
import { useNavigation } from "@react-navigation/native";

type Props = {
  editar?: boolean;
  meal: MealState | undefined;
  changeMeal: (field: string, valeu: any) => void;
  submit: () => void;
};

export type MealState = {
  id?: string;
  name: string;
  description: string;
  date: string;
  hours: string;
  isDiet: boolean | undefined | null;
};

const maskHours = [/\d/, /\d/, ":", /\d/, /\d/];

export function FromMeal({ editar = false, meal, changeMeal, submit }: Props) {
  const navigation = useNavigation();

  function handleNavigationPageBack() {
    navigation.navigate("home");
  }
  async function handleNavigationFeedback() {
    await submit();

    if (!editar) {
      navigation.navigate("feedback", { isDiet: meal?.isDiet ? true : false });
    }
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => handleNavigationPageBack()}>
          <HeaderIcon />
        </TouchableOpacity>

        <HeaderText>{editar ? "Editar refeição" : "Nova refeição"} </HeaderText>
      </Header>
      <Content>
        <Form>
          <View>
            <Label>Nome</Label>
            <Input
              value={meal?.name}
              onChangeText={(e) => changeMeal("name", e)}
            ></Input>
            <Label>Descrição</Label>
            <TextArea
              multiline={true}
              numberOfLines={4}
              value={meal?.description}
              onChangeText={(e) => changeMeal("description", e)}
            ></TextArea>

            <ContentData>
              <View style={{ width: "48%" }}>
                <Label>Data</Label>
                <InputDate
                  value={meal?.date}
                  onChangeText={(e) => changeMeal("date", e)}
                  mask={Masks.DATE_DDMMYYYY}
                />
              </View>
              <View style={{ width: "48%" }}>
                <Label>Hora</Label>
                <InputDate
                  value={meal?.hours}
                  onChangeText={(e) => changeMeal("hours", e)}
                  mask={maskHours}
                />
              </View>
            </ContentData>

            <Label>Está dentro da dieta?</Label>
            <ContentButtonIsDiet>
              <ButtonDiet
                select={meal?.isDiet === true}
                type="sim"
                title="Sim"
                onPress={() => changeMeal("isDiet", true)}
              />

              <ButtonDiet
                select={meal?.isDiet === false}
                type="nao"
                title="Nao"
                onPress={() => changeMeal("isDiet", false)}
              />
            </ContentButtonIsDiet>
          </View>
          <Button onPress={() => handleNavigationFeedback()}>
            <ButtonText>
              {editar ? "Salvar alterações" : "Cadastrar refeição"}{" "}
            </ButtonText>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
