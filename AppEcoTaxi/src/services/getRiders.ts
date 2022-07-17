import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { Riders } from '../entities/riders';

export const getRiders = async (userId:string) => {
    const [OpenRiders, partnerRiders] = await Promise.all([
        findOpenRiders(),
        FindPartnerRiders(userId)
    ])
    return [...OpenRiders, ...partnerRiders]
}

const findOpenRiders = async () => {
    const ridersDoc = await firestore().collection('rides').where('state', '==','CREATED').get();
    return docsToRiders(ridersDoc)
}

const FindPartnerRiders = async (userId: string) => {
    const RidersDocs = await firestore().collection('rides').where('partner', '==', userId).get()
    return docsToRiders(RidersDocs)
}
const docsToRiders = (RidersDoc : FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>): Riders[] => {
    const riders: Riders[] = []
    RidersDoc.forEach(doc => {
   const {
    friendlyId,
    minutes,
    meters,
    value,
    partnerValue,
    user,
    createdAt,
    departure,
    destination,
    comments,
    state,
   } = doc.data()
   riders.push({
    id: doc.id,
    friendlyId,
    minutes,
    meters,
    value,
    partnerValue,
    user,
    createdAt: createdAt.toDate().toISOString(),
    departure,
    destination,
    comments,
    state,
   })
 })
 return riders;
}
