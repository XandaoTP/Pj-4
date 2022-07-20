import React from "react";
import { useSelector } from "react-redux";
import { RidersList } from "../../../components/ridersList";
import { SelectOpenRiders } from "../../../store/slices/ridersSlice";

export function OpenRidersScreen () {
    const openRiders = useSelector(SelectOpenRiders)
    return <RidersList riders={openRiders} NoRidersMessage='Nenhuma carona nessa lista' />

}