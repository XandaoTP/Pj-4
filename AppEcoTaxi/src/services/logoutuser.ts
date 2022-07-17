import auth from '@react-native-firebase/auth'

export const LogoutUser = async () => {
   await auth().signOut() 
}