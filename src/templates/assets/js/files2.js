




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

    function datastor(uid){
        const storageRef = firebase.storage().ref();
        storageRef.child(uid).child("downloads").child("vid.mp4").getDownloadURL().then(function(url) {
          // `url` is the download URL for 'images/stars.jpg'
          console.log(url);

          // This can be downloaded directly:
          /*var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
          var blob = xhr.response;
          };
          xhr.open('GET', url);
          xhr.send();*/
          
          // Or inserted into an <img> element:
          var a = document.getElementById('Vid1');
          a.href = url;
        })
      }