import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Dashboard } from "@screens/Dashboard";
import { RegisterMeal } from "@screens/RegisterMeal";
import { UpdateMeal } from "@screens/UpdateMeal";
import { Meal } from "@screens/Meal";
import { FeedBack } from "@screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="registerMeal" component={RegisterMeal} />
      <Screen name="updateMeal" component={UpdateMeal} />
      <Screen name="meal" component={Meal} />
      <Screen name="feedback" component={FeedBack} />
    </Navigator>
  );
}
