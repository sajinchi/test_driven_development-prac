"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { timeIsValid } from "../utils/jwt";
import { RootState, AppDispatch } from "../store";
import { refresh } from "../store/auth/auth.slice";
import { StoreStatusEnum } from "../commons/StoreStatusEnum";
import { CLIENT_AUTH_LOGIN_URL } from "../constants/client.url";

const Authorization = ({ children }: { children: React.ReactNode }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const checkToken = () => {
    if (auth.status == StoreStatusEnum.ERROR) {
      router.push(CLIENT_AUTH_LOGIN_URL);
    }
    if (auth.status == StoreStatusEnum.IDLE) {
      router.push(CLIENT_AUTH_LOGIN_URL);
    }
    if (auth.status == StoreStatusEnum.SUCCESS) {
      // check token validity
      if (!timeIsValid(auth.accessExpiresIn)) {
        if (!timeIsValid(auth.refreshExpiresIn)) {
          router.push(CLIENT_AUTH_LOGIN_URL);
        }
        // get new access and refresh token
        dispatch(refresh(auth.refreshToken));
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  // return <>
  // {children}
  // </>;
};

export default Authorization;
