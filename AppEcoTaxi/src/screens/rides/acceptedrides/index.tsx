import React from "react";
import { useSelector } from "react-redux";
import { CustomText } from "../../../components/customtext";
import { RidersList } from "../../../components/ridersList";
import { SelectAcceeptedRiders } from "../../../store/slices/ridersSlice";

export function AcceptedRiders () {
    const acceeptedRiders = useSelector(SelectAcceeptedRiders)
    return <RidersList riders={acceeptedRiders} NoRidersMessage='Nenhuma carona nessa lista' />
}