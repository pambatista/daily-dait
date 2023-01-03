import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Number, Subtitle } from "./styles";
import theme from "../../theme";

type Props = TouchableOpacityProps & {
  number: number;
  subtitle: string;
  icon?: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
};
export function IndicatorButton({
  number,
  subtitle,
  icon,
  type,
  ...rest
}: Props) {
  const bgColorByType = type ? type : number >= 50 ? "PRIMARY" : "SECONDARY";
  console.log(bgColorByType);
  const color =
    bgColorByType === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700;

  return (
    <Container {...rest} type={bgColorByType}>
      <Icon color={color} />

      <Number>{number}%</Number>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
