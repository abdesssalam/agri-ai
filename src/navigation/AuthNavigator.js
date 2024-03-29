import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator();
import routes from "../constants/routes";
import LoginScreen from "../pages/Auth/LoginScreen";
import SplashScreen from "../pages/SplashScreen";
import RegisterScreen from "../pages/Auth/RegisterScreen";
import AppNavigator from "./AppNavigator";
import ForgetPasswordScreen from "../pages/Auth/ForgetPasswordScreen";
import VerifyScreen from "../pages/Auth/VerifyScreen";
import OnBoardingScreen from "../pages/Auth/OnBoardingScreen";
import NewPasswordScreen from "../pages/Auth/NewPasswordScreen";

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.SPLASH} component={SplashScreen} />
            <Stack.Screen name={routes.ON_BOARDING_SCEEN} component={OnBoardingScreen} />
            <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
            <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={routes.FORGET} component={ForgetPasswordScreen} />
            <Stack.Screen name={routes.VERIFY} component={VerifyScreen} />
            <Stack.Screen name={routes.APP_NAV} component={AppNavigator} />
            <Stack.Screen name={routes.NEW_PASSWORD} component={NewPasswordScreen} />
        </Stack.Navigator>
    )

}