import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";

const Stack = createStackNavigator();

export default function Router() {
 return (
     <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="About" component={About} />
         </Stack.Navigator>
     </NavigationContainer>
  );
}