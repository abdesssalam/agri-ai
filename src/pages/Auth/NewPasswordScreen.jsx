import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useState, useRef } from 'react'
import responsive, { normalizeFont } from '../../constants/responsive'
import COLORS from '../../constants/COLORS'
import { Snackbar } from '@react-native-material/core';
import { new_password_service } from '../../services/AuthService';
import { useRoute } from '@react-navigation/native';
import routes from '../../constants/routes';
import ToastComponent from '../../components/Toast/ToastComponent';
import values from '../../constants/values';


export default function NewPasswordScreen({ navigation }) {
    const toastRef = useRef(null)
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');
    const [showSnack, setShowSnack] = useState(false)
    const route = useRoute();

    const handle_change_pass = async () => {
        if (pass === "" || passConf === "" || pass !== passConf) {
            setShowSnack(true)
            setTimeout(() => {
                setShowSnack(false)
            }, 3000)
        } else {
            try {
                const res = await new_password_service(route.params?.email, pass)
                if (res?.message === "ok") {
                    console.log(route.params?.type)
                    if (route.params?.type === 'new_pass') {
                        toastRef.current.show("Mot de passe bien changer", values.TOAST_VALUES.DURATION.SHORT);
                        setTimeout(() => {

                            navigation.navigate(routes.ACCOUNT)
                        }, values.TOAST_VALUES.DURATION.SHORT)
                    } else {

                        navigation.navigate(routes.LOGIN)
                    }
                }
            } catch (er) {
                console.log(er)
            }
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <Text style={{
                color: '#000',
                backgroundColor: '#fff',
                // elevation: 10,
                borderBottomColor: '#666',
                borderBottomWidth: 0.5,
                width: responsive.WINDOW_WIDTH,
                textAlign: 'center',
                paddingVertical: normalizeFont(8),
                fontSize: normalizeFont(16),
                fontWeight: '600',
                fontFamily: 'Poppins'
            }}>Réinitialisation du mot de passe</Text>

            <View
                style={{
                    marginTop: responsive.WINDOW_HEIGHT * 0.15,
                    width: '100%',
                    alignItems: 'center'
                }}
            >

                <TextInput
                    placeholder='Nouveau mot de passe'
                    secureTextEntry={true}
                    onChangeText={(v) => setPass(v)}

                    style={{
                        width: '95%',
                        fontSize: normalizeFont(12),
                        fontFamily: 'Poppins',
                        color: '#000',
                        borderWidth: 0.75,
                        borderColor: '#666',
                        borderRadius: normalizeFont(8),
                        marginBottom: normalizeFont(12)
                    }}


                />
                <TextInput
                    placeholder='Confirmez votre mot de passe'
                    secureTextEntry={true}
                    onChangeText={(v) => setPassConf(v)}
                    style={{
                        width: '95%',
                        fontSize: normalizeFont(12),
                        fontFamily: 'Poppins',
                        color: '#000',
                        borderWidth: 0.75,
                        borderColor: '#666',
                        borderRadius: normalizeFont(8),
                        marginBottom: normalizeFont(16)
                    }}
                />
                <TouchableOpacity
                    onPress={handle_change_pass}
                    style={{
                        backgroundColor: COLORS.GREEN_LIGHT,
                        width: '95%',
                        paddingVertical: normalizeFont(10),
                        borderRadius: normalizeFont(8),
                        alignItems: 'center'
                    }}

                >
                    <Text
                        style={{
                            fontSize: normalizeFont(12),
                            fontFamily: 'Poppins',
                            color: '#FFF',
                            fontWeight: '900'
                        }}
                    >Changer</Text>
                </TouchableOpacity>

            </View>
            <ToastComponent ref={toastRef} type={values.TOAST_VALUES.TYPE.SUCSESS} />
            {showSnack && <Snackbar

                message='confirmer votre mot de passe'
                style={{ position: "absolute", start: 16, end: 16, bottom: 20 }}
                action={<TouchableOpacity
                    style={{ backgroundColor: '#efefef', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 }}
                    onPress={() => setShowSnack(false)}><Text style={{ color: '#000', fontSize: 14, fontWeight: '700' }}>DISMISS</Text></TouchableOpacity>}
            />}
        </View>
    )
}