import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyC-CbQHVJfL6vcvuSoTk36jqpK3Y7BTT8Y",
    authDomain: "imageapi-29bdc.firebaseapp.com",
    databaseURL: "https://imageapi-29bdc.firebaseio.com",
    projectId: "imageapi-29bdc",
    storageBucket: "imageapi-29bdc.appspot.com",
    messagingSenderId: "682344802970",
    appId: "1:682344802970:web:ec13c01fac9c1d11da0d23",
    measurementId: "G-5Z0BC7DXF7"
};

firebase.initializeApp(firebaseConfig);

const Storage = firebase.storage();

export {
    Storage, firebase as default
}