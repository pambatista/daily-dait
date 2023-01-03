import { TouchableOpacityProps } from "react-native";
import {
  ButtonSelectionStatus,
  Container,
  ButtonSelectionText,
} from "./styles";

type Props = TouchableOpacityProps & {
  type: "sim" | "nao";
  title: string;
  select?: boolean;
};

export function ButtonDiet({ type, title, select, ...rest }: Props) {
  return (
    <Container type={type} {...rest} select={select} >
      <ButtonSelectionStatus type={type} />
      <ButtonSelectionText>{title}</ButtonSelectionText>
    </Container>
  );
}
