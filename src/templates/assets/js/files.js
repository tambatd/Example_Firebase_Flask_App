




document.addEventListener("DOMContentLoaded", event => {
    
    const app = firebase.app();
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstpost');
    const productsRef = db.collection('products');

    /*const query = productsRef.where('price', '>', 5)

    query.get()
         .then(products => {
         products.forEach(doc => {
             data = doc.data()
             document.write(`${data.name} at $${data.price} <br/>`);
        })
    })*/

});


         


    btnLogout.addEventListener('click', e =>{
        firebase.auth().signOut();
      })


      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
          const usernameid = firebase.auth().currentUser;
          const uid = usernameid.uid;
          datastor(uid.toString())
          //console.log(uid);
          console.log(firebaseUser);
        } else{
          //console.log("not logged in");
          window.location = 'login.html';
        }
      });

    function datastor(uid){
        const storageRef = firebase.storage().ref();
        storageRef.child(uid).child("downloads").child("MainVid2.mp4").getDownloadURL().then(function(url) {
          console.log(url);
          var a = document.getElementById('Vid2');
          a.href = url;
        })
        storageRef.child(uid).child("downloads").child("vid.mp4").getDownloadURL().then(function(url) {
            console.log(url);
            var a = document.getElementById('Vid1');
            a.href = url;
          })
        storageRef.child(uid).child("downloads").child("WeekendSun.pdf").getDownloadURL().then(function(url) {
            console.log(url);
            var a = document.getElementById('Vid2Pdf');
            a.href = url;
          })
          storageRef.child(uid).child("downloads").child("MainVid2Ad.mp4").getDownloadURL().then(function(url) {
            console.log(url);
            var a = document.getElementById('Vid2Ad');
            a.href = url;
          })
          storageRef.child(uid).child("downloads").child("It'sGonnaBeHappy.pdf").getDownloadURL().then(function(url) {
            console.log(url);
            var a = document.getElementById('Vid1Pdf');
            a.href = url;
          })
          storageRef.child(uid).child("downloads").child("MainVid2Ad2.mp4").getDownloadURL().then(function(url) {
            console.log(url);
            var a = document.getElementById('Vid2Ad2');
            a.href = url;
          })
      }


    

      /*
    myPost.onSnapshot(doc => {

        const data = doc.data();
        document.querySelector(`#title`).innerHTML = data.title;
        //document.write(data.title + `<br>`)
        // document.write(data.createdAt)
        
    })
    
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user)
            })
            .catch(console.log)
}

function updatePost(e){
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstpost');
    myPost.update({title: e.target.value })
}
*/

