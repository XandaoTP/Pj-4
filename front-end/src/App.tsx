import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "./routes";
import { auth } from "./services/firebase";
import { getUser } from "./services/getuser";
import { updateUser, deleteUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
       if (currentUser) {
        //dispachar uma açao de update user
         const user = await getUser(currentUser.uid) 
        dispatch(updateUser(user))
       } else {
        //dispachar uma açao de delete user
        dispatch(deleteUser())
       }
  })
}, [dispatch]) 
  return (
    <Routes />
  )
}

export default App;