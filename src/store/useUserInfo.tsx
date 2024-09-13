import { getAuth } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import create from "zustand";
import { UserInfo } from "../interfaces/UserInfo";

interface State {
  userInfo: UserInfo;
  //////
  getUserInfo: () => void;
}

export const useUserInfo = create<State>(set => ({
  userInfo: {},
  //////
  getUserInfo: () => {
    const dbRef = ref(getDatabase());
    const gameUrl = `kidsbuddy/userinfo/${getAuth().currentUser?.uid}`;
    get(child(dbRef, gameUrl))
      .then(snapshot => {
        if (snapshot.exists()) {
          set(() => ({
            userInfo: snapshot.val()
          }));
        } else {
          console.log("No data available");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}));
