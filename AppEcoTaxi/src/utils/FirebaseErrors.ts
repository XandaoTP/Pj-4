import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export function firebaseAuthErrors (obj: unknown,): obj is FirebaseAuthTypes.NativeFirebaseAuthError {
    return typeof obj === 'object' && obj != null && 'code' in obj;
}