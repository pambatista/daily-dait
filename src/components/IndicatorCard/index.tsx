import { ViewProps } from "react-native";
import { Container, Icon, Number, Subtitle } from "./styles";
import theme from "../../theme";

type Props = ViewProps & {
  number: string | number;
  subtitle: string;
  icon?: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
};
export function IndicatorCard({
  number,
  subtitle,
  icon,
  type = "PRIMARY",
  ...rest
}: Props) {
  const color =
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700;

  return (
    <Container {...rest} type={type}>
      <Number>{number}</Number>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
