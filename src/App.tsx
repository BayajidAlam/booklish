/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { auth } from "./utils/firebase";
import { useEffect } from "react";

export default function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        setLoading(false);
      }
    });
  }, [dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}
