
            var me = {};
            me.avatar = "img/boy.png";
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

            //-- No use time. It is a javaScript effect.
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
                  
                  firestore.collection("Chat").doc().get().then(function (querySnapshot) {

                    firestore.collection('Chat').doc("one").set({
                    
                     msg1 : text

                    }).then(function () {
                      console.log("Status saved!");
                    }).catch(function (error) {
                      console.log("Got an Error: ", error);

                    });
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