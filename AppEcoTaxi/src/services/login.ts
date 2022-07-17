import auth from '@react-native-firebase/auth';
import { User } from "../entities/user";
import { getUser } from "./getuser";

type CredentialsIpunt = {
    email:string
    password: string
};

export const LoginUser = async ({ email, password }: CredentialsIpunt): Promise<User> => {
   const result = await auth().signInWithEmailAndPassword(email, password);
   return getUser(result.user.uid)
};