import React from "react";
import { useSelector } from "react-redux";
import { CustomText } from "../../../components/customtext";
import { RidersList } from "../../../components/ridersList";
import { SelectFinishedRiders } from "../../../store/slices/ridersSlice";

export function FinishedRidersScreen () {
    const finishedRiders = useSelector(SelectFinishedRiders)
    return <RidersList riders={finishedRiders} NoRidersMessage='Nenhuma carona nessa lista' />
}
