import React, { Children } from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "../customtext";

type Props = {
    children: React.ReactNode
}
export function ModalActionButton ({children}: Props) {
    return (
        <TouchableOpacity>
            <CustomText>{children}</CustomText>
        </TouchableOpacity>
    )
}