//import * as firebase from 'firebase'

(function(){
  //require('firebase/auth');
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', event => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

    var defaultAuth = firebase.default.auth();

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const promise = defaultAuth.signInWithEmailAndPassword(email, pass);
    
    promise.catch(e => console.log(e.message)); 

})
}());


firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    window.location = 'upload.html';
  } else{
    console.log("not logged in");
  }
});




