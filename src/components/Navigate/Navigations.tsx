import * as React from "react";
import Layout from "../AppLayout/layout";
import Auth from "../Auth/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { authenticated } from "../../store/selector";

export default function Navigations() {
  const isAuth = useSelector(authenticated);

  return <>{isAuth ? <Layout /> : <Auth />}</>;
}
