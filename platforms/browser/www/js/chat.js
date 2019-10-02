var me = {};
           
  
function getProfilePicUrl() {
  // TODO 4: Return the user's profile pic URL.
      
var pic = localStorage.getItem("photoURL");  
  return pic || 'img/user.png';
}

function getUserName() {
var displayName = localStorage.getItem("displayName");
  return displayName ; 

}

function getStoreName() {
  var namestore = localStorage.getItem("namestore");
  return namestore;
}

me.avatar = getProfilePicUrl();

var you = {};
you.avatar = "img/man.png";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

//สร้าง logs ของห้องแชทเริ่มต้น

function createLogs() {


  firebase.firestore().collection('chat').add({
    customer : getUserName(),
    namestore : getStoreName()

  }).then(function(docRef) {
    firebase.firestore().collection('chat').doc(docRef.id).update({
      msgKey : docRef.id

    })
    var logRef = docRef.id
    return localStorage.setItem('logRef',logRef);

  })
 
}

// function createMessage(text) {
// var logRef = localStorage.getItem('logRef') 
// console.log(text);

// firebase.firestore().collection('messages').add({

// timestamp: firebase.firestore.FieldValue.serverTimestamp(),
// who : getUserName(),
// msgKey : logRef,

// }).catch(function(error) {
// console.error('Error writing new message to Firebase Database', error);
// });

// }


//-- No use time. It is a javaScript effect.

// function loadMessage() {
//   var control = "";
//   if (who == "me") {

//     control = '<li style="width:100%;">' +
//       '<div class="msj-rta macro">' +
//       '<div class="text text-r">' +
//       '<p>' + text + '</p>' +
//       '<p style="font-size:15px"><small id="date">' + date + '</small></p>' +
//       '</div>' +
//       '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
//       '</li>';

//   } else {
//     control = '<li style="width:100%">' +
//       '<div class="msj macro">' +
//       '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
//       '<div class="text text-l">' +
//       '<p>' + text + '</p>' +
//       '<p style="font-size:15px"><small >' + date + '</small></p>' +
//       '</div>' +
//       '</div>' +
//       '</li>';
//   }
  
// }


function insertChat(who, text, time) {
  if (time === undefined) {
    time = 0;
  }
  var control = "";
  var date = formatAMPM(new Date());

  if (who == "me") {

    control = '<li style="width:100%;">' +
      '<div class="msj-rta macro">' +
      '<div class="text text-r">' +
      '<p>' + text + '</p>' +
      '<p style="font-size:15px"><small id="date">' + date + '</small></p>' +
      '</div>' +
      '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
      '</li>';

  } else {
    control = '<li style="width:100%">' +
      '<div class="msj macro">' +
      '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
      '<div class="text text-l">' +
      '<p>' + text + '</p>' +
      '<p style="font-size:15px"><small >' + date + '</small></p>' +
      '</div>' +
      '</div>' +
      '</li>';
  }
  setTimeout(
    function () {
      $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
    }, time);

}

function resetChat() {
  $("ul").empty();
}


$(".mytext").on("keydown", function (e) {
  if (e.which == 13) {
    var text = $(this).val();
    if (text !== "") {


    
  // firebase.firestore().collection('chat').add({
  //   customer : getUserName(),
  //   namestore : getStoreName()

  // }).then(function(docRef) {
  //   firebase.firestore().collection('chat').doc(docRef.id).update({
  //     msgKey : docRef.id
  //   })
      
  //     firebase.firestore().collection('messages').add({

  //       text : text,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //       who : getUserName(),
  //       msgKey : docRef.id,

  //   })

  // }).catch(function(error) {
  //   console.error('Error writing new message to Firebase Database', error);
  // });


  var logRef = localStorage.getItem('logRef') 

  
  firebase.firestore().collection('messages').add({
  text : text ,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  who : getUserName(),
  msgKey : logRef,
  
  }).catch(function(error) {
  console.error('Error writing new message to Firebase Database', error);
  });
  

      insertChat("me", text);
    
    
      $(this).val('');
    }
  }
});






$('body > div > div > div:nth-child(2) > span').click(function () {
  $(".mytext").trigger({ type: 'keydown', which: 13, keyCode: 13 });
})

//-- Clear Chat

resetChat();

// //-- Print Messages
// insertChat("me", "Hello Tom...", 0);



$(".mytext", function (e) {

firestore.collection("Chat").doc("two").get().then(function (doc) {
      insertChat("you", doc.data().msg2, 20000);
      
});
});






//-- NOTE: No use time on insertChat.