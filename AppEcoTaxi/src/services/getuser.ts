import firestore from "@react-native-firebase/firestore"
import { User } from "../entities/user"

export const getUser = async (userId: string): Promise<User> => {
  const userSnapshot = await firestore().collection('Users').doc(userId).get();
  const userData = userSnapshot.data()
  if(!userSnapshot.exists ||!userData ) {
    throw new Error('User not found')
    console.log(userData)
  }
  const { name, email, phone } = userData;
  return {
    id: userId,
    name,
    email,
    phone
  }
}