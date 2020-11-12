import firebase from './firebase-init';

export default class FirebaseService {

    getBuildings = async () => {
        const res = firebase.firestore().collection("places").get().then(response => {
            return response.docs.map(x => ({
                id: x.id,
                data: x.data(),
                parts: x.data().parts && x.data().parts.map(part => part.id)
            }));
        });
        
        return await res
    }
}

