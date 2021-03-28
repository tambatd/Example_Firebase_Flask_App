




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

function uploadFile(files) {
  
      const uid = firebase.auth().currentUser.uid;
      const storageRef = firebase.storage().ref();
      const horseRef = storageRef.child(uid+'/TikTokVid');

      //const uploadTask
  
      const file = files.item(files);
  
      const task = horseRef.put(file);
  
      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
          const url = downloadURL;
          if (downloadURL) {
            document.getElementById("uploadcomp").removeAttribute("hidden");
          } 
          //document.querySelector("#imgUpload").setAttribute("src", url);
        });
      
  
      }

      function uploadTextFile(files) {
  
        const uid = firebase.auth().currentUser.uid;
        const storageRef = firebase.storage().ref();
        const horseRef = storageRef.child(uid).child("/files").child("document");
  
        //const uploadTask
    
        const file = files.item(files);
    
        const task = horseRef.put(file);
    
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log("File available at", downloadURL);
            const url = downloadURL;
            if (downloadURL) {
              document.getElementById("uploadcomp").removeAttribute("hidden");
            } 
            //document.querySelector("#imgUpload").setAttribute("src", url);
          });
        
    
        }

      function datastor(uid){
      const storageRef = firebase.storage().ref();




      storageRef.child(uid+'/downloads/vid.mp4').getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
      
        // This can be downloaded directly:
        /*var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
        var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();*/
        
        // Or inserted into an <img> element:
        var a = document.getElementById('myimg');
        a.href = url;
      
        if (storageRef.child('downloads/vid.mp4').getDownloadURL()) {
          document.getElementById("myimg").removeAttribute("hidden");
        }
      }).catch(function(error) {
        // Handle any errors
      });
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

