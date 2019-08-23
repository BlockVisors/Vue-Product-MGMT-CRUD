import firebase from 'firebase'
import 'firebase/firestore'
const config = {
	apiKey: "AIzaSyBhchGaix8xC_pFqSy0wKDbiyzwQQvQEEc",
    authDomain: "vue-products-manager.firebaseapp.com",
    databaseURL: "https://vue-products-manager.firebaseio.com",
    projectId: "vue-products-manager",
    storageBucket: "",
    messagingSenderId: "1007671018271",
    appId: "1:1007671018271:web:49c6ae3c3c692a96"
}
const firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()
