import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { Alert, StyleSheet, TouchableOpacity } from "react-native"
import { LogoutUser } from "../../services/logoutuser"

export function LogoutButton () {
    const handleLogout = () => {
        Alert.alert(
            'Deseja sair?',
            'Você será redirecionado para pagina incial',
        [ 
            {
                text: 'Cancelar',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async () => {
                    await LogoutUser()
                }
            }
        ],
        ) 
    }
    return (
        <TouchableOpacity onPress={handleLogout}>
            <FontAwesomeIcon icon={faArrowCircleLeft} color='#fff' size={18} style={styles.logout}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logout: {
        padding: 5
    }
})