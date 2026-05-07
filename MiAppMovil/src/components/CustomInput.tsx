import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useState } from "react";

type Props = {
    type: "text" | "email" | "password" | "number";
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

export default function CustomInput({ type, placeholder, value, onChange }: Props) {

    const [isSecureText, setIsSecureText] = useState(true);
    const isPasswordField = type === "password";
    const keyboardType = type === "number" ? "number-pad" :
        type === "email" ? "email-address" : "default";

    const icon: typeof MaterialIcons["name"] | undefined = type === 'text' ? 'alternate-email' :
        type === "email" ? "email" :
            type === "password" ? "lock" :
                type === "number" ? "phone" : undefined;

    const getError = () => {
        if (value.trim() === "") {
            return "Este campo es obligatorio";
        }
        if (type === "email" && !value.includes("@")) {
            return "Correo electrónico no válido";
        }
        if (type === "password" && value.length < 6) {
            return "La contraseña debe tener al menos 6 caracteres";
        }
        if (type === "number" && value.length < 10 || value.includes("-")) {
            return "Numero de teléfono no válido";
        }
        return null;
    }

    const error = getError();

    return (
        <View style={styles.wrapper}>
            <View style={[styles.inputContainer, error && styles.inputError]}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                    secureTextEntry={isPasswordField ? isSecureText : false}
                    keyboardType={keyboardType}
                />
                {isPasswordField &&
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() => setIsSecureText(!isSecureText)}
                    >
                        <Ionicons name={isSecureText ? "eye" : "eye-off"} size={22} />
                    </TouchableOpacity>
                }

            </View>
            {
                error && <Text style={styles.inputError}>{error}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',

        // Estilos para el contenedor del input
        // paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 9,
        backgroundColor: '#f9f9f9',
        // padding: 35,
        // margin: 10
        // paddingLeft: 20,
        borderColor: 'none',
    },
    input: {
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    inputError: {
        borderColor: 'red',
    },
});      