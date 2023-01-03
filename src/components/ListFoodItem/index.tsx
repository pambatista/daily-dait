import { TouchableOpacityProps } from "react-native";
import { Container, Divisor, Food, Hours, StatusFood } from "./styles";

type Props = TouchableOpacityProps & {
  hours: string;
  food: string;
  isDiet?: boolean;
};

export function ListFoodItem({ hours, food, isDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hours>{hours}</Hours>
      <Divisor />
      <Food>{food}</Food>
      <StatusFood isDiet={isDiet} />
    </Container>
  );
}
