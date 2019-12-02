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

  var query = firestore.collection('messages').doc(FixID).collection('msg').orderBy('timestamp', 'asc');
console.log("query"+query);
query.onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {

    console.log(snapshot.size);
    
    if (change.type === 'removed') {
    }  
    if (change.type === "added") {
      var text = change.doc.data().text;
     console.log("timestamp:"+change.doc.data().timestamp);
      var datetime = change.doc.data().dateTime;
   
   
      
      // datetime = datetime.toUTCString();
      // datetime = datetime.split(' ').slice(0, 5).join(' ');
      var who ;
    if (change.doc.data().who == displayNamechat ) {
      who = "me";
    }

    if (who == "me") {

      console.log("1");
      $('#showmessages').append(
        '<li style="width:100%;">' +
        '<div class="msj-rta macro">' +
        '<div class="text text-r">' +
        '<p>' + text + '</p>' +
        '<p style="font-size:15px"><small id="date">' + datetime + '</small></p>' +
        '</div>' +
        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
        '</li>').scrollTop('#showmessages').prop('scrollHeight')
    } else {
      
      $('#showmessages').append( '<li style="width:100%">' +
        '<div class="msj macro">' +
        '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
        '<div class="text text-l">' +
        '<p>' + text + '</p>' +
        '<p style="font-size:15px"><small >'+ datetime + '</small></p>' +
        '</div>' +
        '</div>' +
        '</li>').scrollTop('#showmessages').prop('scrollHeight')
    }
    
    }
   
  });
});
}



document.getElementById("btn-chat").addEventListener("click", function() {
  var messenger = document.getElementById("mytext").value;
  console.log("messenger::"+messenger);
  if (messenger !== "") {
    
      var FixID = localStorage.getItem("FixID");
      var d = new Date().toLocaleString();
      d = d.split(' ').slice(0, 5).join(' ');
      firebase.firestore().collection('messages').doc(FixID).collection('msg').add({
      text : messenger ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      who : getUserName(),
      pic : getProfilePicUrl(),
      dateTime : d
      }).catch(function(error) {
      console.error('Error writing new message to Firebase Database', error);
      });
      
      document.getElementById("mytext").value = '';
      
        
    }

});

  













loadMessage();

//-- NOTE: No use time on insertChat.