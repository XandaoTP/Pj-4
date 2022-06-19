import { signOut } from "firebase/auth"
import { auth } from "./firebase"

export const LogoutUser = async () => {
   await signOut(auth) 
}