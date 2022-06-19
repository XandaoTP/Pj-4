import { signInWithEmailAndPassword } from "firebase/auth"
import { User } from "../entities/User"
import { auth } from "./firebase"
import { getUser } from "./getuser"

type CredentialsIpunt = {
    email:string
    password: string
}

export const LoginUser = async ({ email, password }: CredentialsIpunt): Promise<User> => {
   const result = await signInWithEmailAndPassword(auth, email, password)
   return getUser(result.user.uid)
}