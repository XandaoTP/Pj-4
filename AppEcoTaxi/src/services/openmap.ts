import { Linking, Platform } from "react-native";
import { Address } from "../entities/adress";

export const openMap = ({lat, lng, address}: Address) => {
    const url =
      Platform.select({
        ios: `maps:0,0?q=${address}@${lat},${lng}`,
        android: `geo:0,0?q=${lat},${lng}(${address})`,
      }) || '';
    Linking.openURL(url);
  };