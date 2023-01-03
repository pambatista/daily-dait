import { View, Modal } from "react-native";
import {
  ButtonCancelar,
  ButtonExcluir,
  ButtonTextCancelar,
  ButtonTextExcluir,
  Container,
  Content,
  ContentButton,
  Title,
} from "./styles";
import { removeMeal } from "@storage/meal/removeMeal";
import { useNavigation } from "@react-navigation/native";

type Props = {
  modalVisible: boolean;
  id: string;
  updateModal: (visivel: boolean) => void;
};

export function ModalDelete({ modalVisible = false, updateModal, id }: Props) {
  const navigation = useNavigation();

  async function handleDelete() {
    try {
      await removeMeal(id);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          updateModal(!modalVisible);
        }}
      >
        <Container>
          <Content>
            <Title>Deseja realmente excluir o registro da refeição?</Title>

            <ContentButton>
              <ButtonCancelar onPress={() => updateModal(!modalVisible)}>
                <ButtonTextCancelar>Cancelar</ButtonTextCancelar>
              </ButtonCancelar>

              <ButtonExcluir onPress={() => handleDelete()}>
                <ButtonTextExcluir>Sim, exluir</ButtonTextExcluir>
              </ButtonExcluir>
            </ContentButton>
          </Content>
        </Container>
      </Modal>
    </View>
  );
}
