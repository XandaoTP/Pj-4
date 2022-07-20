import firestore from "@react-native-firebase/firestore"
import { RidersStatus } from "../entities/ridersStatus"

export enum ActionsType {
    accept,
    finish,
    cancel,
}

type TypesOfExecuteActions = {
    rideId: string
    userId: string
    action: ActionsType
}

export const ExecuteButtonModalAction = async ({
    rideId,
    userId,
    action,
}: TypesOfExecuteActions) => {
    var data
    switch (action) {
        case ActionsType.accept:
            data = {
                state: RidersStatus.ACCEPTED,
                driver: userId
            }
            break;
            case ActionsType.cancel:
                data = {
                  state: RidersStatus.CREATED,
                  driver: null,
                };
                break;
              case ActionsType.finish:
                data = {
                  state: RidersStatus.FINISHED,
                };
                break;
            }
            await firestore().collection('rides').doc(rideId).update(data);
        }