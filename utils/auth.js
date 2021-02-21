import { auth } from '../services/firebase';

export function Signup (email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
};

export function Signin (email, password) {
    return auth().signInWithEmailAndPassword(email, password);
};

export function Logout () {
    return auth().signOut();
}