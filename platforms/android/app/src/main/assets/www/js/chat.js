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


function loadMessage() {
  var FixID = localStorage.getItem("FixID");
  var displayNamechat = localStorage.getItem("displayName");
  var query = firestore.collection('messages').doc(FixID).collection('msg').orderBy('timestamp', 'asc').limit(12);
console.log("query"+query);
query.onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {
    if (change.type === 'removed') {
     
    } else {
      var text = change.doc.data().text;
      var time = change.doc.data().time;
      var who ;
    if (change.doc.data().who == displayNamechat ) {
      who = "me";
    }
     
  
  
    if (who == "me") {
  
      $('#showmessages').append(
        '<li style="width:100%;">' +
        '<div class="msj-rta macro">' +
        '<div class="text text-r">' +
        '<p>' + text + '</p>' +
        '<p style="font-size:15px"><small id="date">' + time + '</small></p>' +
        '</div>' +
        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
        '</li>').scrollTop('#showmessages').prop('scrollHeight')

  
    } else {
      
      $('#showmessages').append( '<li style="width:100%">' +
        '<div class="msj macro">' +
        '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
        '<div class="text text-l">' +
        '<p>' + text + '</p>' +
        '<p style="font-size:15px"><small >' + time + '</small></p>' +
        '</div>' +
        '</div>' +
        '</li>').scrollTop('#showmessages').prop('scrollHeight')
    }
    
    
    }
   
  });
});
}


// setTimeout(
//   function () {
//     $('#showmessages').append(control).scrollTop($('#showmessages').prop('scrollHeight'));
 
//   } );

function resetChat() {
  $("ul").empty();
}


$(".mytext").on("keydown", function (e) {
  if (e.which == 13) {
    var text = $(this).val();
    if (text !== "") {
      var FixID = localStorage.getItem("FixID");

  var date = new Date();
  var time =  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "::" + date.toLocaleTimeString();
  firebase.firestore().collection('messages').doc(FixID).collection('msg').add({
  text : text ,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  time : time,
  who : getUserName(),
  pic : getProfilePicUrl()
  
  }).catch(function(error) {
  console.error('Error writing new message to Firebase Database', error);
  });
  
      
  
      $(this).val('');
    }
  }
});






$('body > div > div > div:nth-child(2) > span').click(function () {
  $(".mytext").trigger({ type: 'keydown', which: 13, keyCode: 13 });
})



resetChat();





loadMessage();

//-- NOTE: No use time on insertChat.