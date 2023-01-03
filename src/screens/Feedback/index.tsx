import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  Container,
  Imagem,
  Strong,
  Subtitle,
  TextButton,
  Title,
} from "./styles";
import SuccessImg from "@assets/success.png";
import waringsImg from "@assets/warings.png";

type RouteParams = {
  isDiet: boolean;
};

export function FeedBack() {
  const route = useRoute();
  const { isDiet } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("home");
  }

  return isDiet ? (
    <Container>
      <Title isDiet>Continue assim!</Title>
      <Subtitle>
        Você continua
        <Strong> dentro da dieta.</Strong> Muito bem!
      </Subtitle>
      <Imagem source={SuccessImg} />
      <Button onPress={() => handleNavigation()}>
        <TextButton>Ir para a página inicial</TextButton>
      </Button>
    </Container>
  ) : (
    <Container>
      <Title> Que pena!</Title>
      <Subtitle>
        Você <Strong> saiu da dieta.</Strong> dessa vez, mas continue se
        esforçando e não desista!
      </Subtitle>
      <Imagem source={waringsImg} />
      <Button onPress={() => handleNavigation()}>
        <TextButton>Ir para a página inicial</TextButton>
      </Button>
    </Container>
  );
}
