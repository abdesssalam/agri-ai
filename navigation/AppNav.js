import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/HomeScreen";
import AccountScreen from "../pages/AccountScreen";
import SettingsScreen from "../pages/SettingsScreen";
import AboutScreen from "../pages/AboutScreen";
import CustomDrawer from "../components/Drawer/CustomDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faGear, faHouse, faPlantWilt, faUser } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";
import HomeNav from "./HomeNav";
import MyPlantsScreen from "../pages/MyPlantsScreen";
import PlantHealth from "../components/myplants/PlantHealth";

const Drawer = createDrawerNavigator();

const AppNav = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false, drawerLabelStyle: styles.labels, drawerActiveBackgroundColor: '#0c9353d4', }}>
            <Drawer.Screen name="Home" component={HomeNav}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faHouse} size={25} color="#06fe87" /> }}
            />
            <Drawer.Screen name="My Plants" component={MyPlantsScreen}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faPlantWilt} size={25} color="#06fe87" /> }} />
            <Drawer.Screen name="Account" component={AccountScreen}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faUser} size={25} color="#06fe87" /> }} />

            <Drawer.Screen name="About" component={AboutScreen}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faCircleInfo} size={25} color="#06fe87" /> }} />
        </Drawer.Navigator>
    )
}
export default AppNav

const styles = StyleSheet.create({
    labels: {
        fontSize: 18,
        marginLeft: -15,
        color: '#fff'
    }
})