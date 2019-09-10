 // app logout 
 function logout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      ons.notification.alert('See u again soon');
      window.location.href = 'sign-in.html';
    }).catch(function (error) {
      // An error happened.
    });
  }