



//ws://rogerparsell.freedynamicdns.org:1880/ws/STSC/Tennis_Lights


//WebSocketTest();


// audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// function show() {
//     duration = 2000;
//     beep();
// }

// function beep() {
//     var oscillator = audioCtx.createOscillator();
//     var gainNode = audioCtx.createGain();
//     oscillator.connect(gainNode);
//     gainNode.connect(audioCtx.destination);
//     gainNode.gain.value = 100;
//     oscillator.frequency.value = 500;
//     oscillator.type = 'sine';;
//     oscillator.start();
//     setTimeout(
//         function () {
//             oscillator.stop();
//         },
//         duration
//     );
// };

var message = "";

setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    console.log(d);
    //document.getElementById("demo").innerHTML = d.toLocaleTimeString();

    //document.getElementById("log2").innerHTML = d;

    //message={"tick":"tick1"};
}













////////////////////////////////////////////////////////////////////////////
//auto refresh on open and restore tab
let userIsViewingPage = true;

setInterval(focusChecker, 500);

function focusChecker() {
  if (document.hasFocus()) {
    if (!userIsViewingPage) {
      location.reload();
      userIsViewingPage = true;
      console.log("Browser tab is visible 1")
    }
  } else {
    userIsViewingPage = false;
    console.log("Browser tab is hidden 1")
  }
}


window.disableResetPrompt;
window.onblur= function() {
    window.onfocus= function () {
        location.reload(true)
        console.log("Browser tab is visible 2")
    }
};



document.addEventListener("visibilitychange", function() {
    if (document.hidden){
        console.log("Browser tab is hidden 3")
    } else {
        console.log("Browser tab is visible 3")
        location.reload();
    }
 });

////////////////////////////////////////////////////////////////////////////





var user = "";

function ClearCookie() {
    localStorage.username = "undefined";
    checkCookie();
}



function setCookie(cname, cvalue, exdays) {
    // const d = new Date();
    // d.setTime(d.getTime() + (exdays*24*60*60*1000));
    // let expires = "expires=" + d.toUTCString();
    // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    localStorage.username = String(cvalue);
}

//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

function checkCookie() {
    user = String(localStorage.username);
    if (user != "undefined") {
        //alert("Welcome Back " + user);

    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
    document.getElementById("USERNAME").innerHTML = "User: " + localStorage.username;
}












WebSocketTest();



function WebSocketTest() {

    if ("WebSocket" in window) {
        //alert("WebSocket is supported by your Browser!");

        // Let us open a web socket
        var ws = new WebSocket("wss://free.blr2.piesocket.com/v3/1?api_key=ESu9knvfczcQhLcTSom0RRnhRsRglMZ5cSZqLEaY&notify_self=1");
        //var ws = new WebSocket("ws://rogerparsell.freedynamicdns.org:1880/ws/STSC/Tennis_Lights");
        //var ws = new WebSocket("ws://192.168.0.130:1880/ws/STSC/Tennis_Lights");



        ws.onopen = function () {
            // Web Socket is connected, send data using send()
            ws.send("{\"Status\":\"New Device Connected\"}");
            //alert("Message is sent...");
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            //alert("Message is received...");

            //ws.send("Loopback: " + received_msg);


            var jsonPretty = JSON.stringify(JSON.parse(received_msg), null, 2);
            received_msg = jsonPretty;

            console.log(received_msg);
            //document.getElementById("status").innerHTML = received_msg

            //document.getElementById("log").innerHTML = received_msg

            const obj = JSON.parse(received_msg);




            if (obj.Online != null) {

                console.log("Online: " + obj.Online);
                document.getElementById("online").innerHTML = "State: " + obj.Online;

                if(obj.Online == "Online"){
                    document.getElementById("online").style.color = "lawngreen";
                    document.getElementById("online").style.fontSize  = "150%";
 
                }else{

                    document.getElementById("online").style.color = "red";
                    document.getElementById("online").style.fontSize  = "150%";

                }
                
            }


            if (obj.Device != null) {

                console.log(obj.DIF1);
                if (obj.DIF1 == 300) {
                    show();
                }
                console.log(obj.DIF2);
                if (obj.DIF2 == 300) {
                    show();
                }
                console.log(obj.DIF3);
                if (obj.DIF3 == 300) {
                    show();
                }
                console.log(obj.DIF4);
                if (obj.DIF4 == 300) {
                    show();
                }
                console.log(obj.DIF5);
                if (obj.DIF5 == 300) {
                    show();
                }
                console.log(obj.DIF6);
                if (obj.DIF6 == 300) {
                    show();
                }

                document.getElementById("tc1_lable").innerHTML = "TC1 Time: " + obj.T1;
                document.getElementById("tc2_lable").innerHTML = "TC2 Time: " + obj.T2;
                document.getElementById("tc3_lable").innerHTML = "TC3 Time: " + obj.T3;
                document.getElementById("tc4_lable").innerHTML = "TC4 Time: " + obj.T4;
                document.getElementById("tc5_lable").innerHTML = "TC5 Time: " + obj.T5;
                document.getElementById("tc6_lable").innerHTML = "TC6 Time: " + obj.T6;

                document.getElementById("tc1_lable2").innerHTML = "TC1 Time: " + obj.T1;
                document.getElementById("tc2_lable2").innerHTML = "TC2 Time: " + obj.T2;
                document.getElementById("tc3_lable2").innerHTML = "TC3 Time: " + obj.T3;
                document.getElementById("tc4_lable2").innerHTML = "TC4 Time: " + obj.T4;
                document.getElementById("tc5_lable2").innerHTML = "TC5 Time: " + obj.T5;
                document.getElementById("tc6_lable2").innerHTML = "TC6 Time: " + obj.T6;

/*                 document.getElementById("tc1_lable3").innerHTML = "TC1 Time: " + obj.T1;
                document.getElementById("tc2_lable3").innerHTML = "TC2 Time: " + obj.T2;
                document.getElementById("tc3_lable3").innerHTML = "TC3 Time: " + obj.T3;
                document.getElementById("tc4_lable3").innerHTML = "TC4 Time: " + obj.T4;
                document.getElementById("tc5_lable3").innerHTML = "TC5 Time: " + obj.T5;
                document.getElementById("tc6_lable3").innerHTML = "TC6 Time: " + obj.T6; */
            }
            if (message != "") {
                ws.send(message);
                message = "";
            }
        };

        ws.onclose = function () {

            WebSocketTest();
            // websocket is closed.
            //alert("Connection is closed..."); 
        };



    } else {

        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
}



//////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////


function TC1_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;


        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
                message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC1_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }

}

function TC1_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC1_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC1_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC1_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC1_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC1_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC1_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC1_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}




//////////////////////////////////////////////////////////////////////////////
function TC2_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;


        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
                message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC2_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }

}

function TC2_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC2_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC2_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC2_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC2_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC2_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC2_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC2_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}



//////////////////////////////////////////////////////////////////////////////
function TC3_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;


        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
                message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC3_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }

}

function TC3_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC3_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC3_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC3_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC3_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC3_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC3_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC3_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

//////////////////////////////////////////////////////////////////////////////
function TC4_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;


        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
                message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC4_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }

}

function TC4_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC4_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC4_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC4_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC4_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC4_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC4_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC4_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

//////////////////////////////////////////////////////////////////////////////
function TC5_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;


        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
                message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC5_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }

}

function TC5_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC5_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC5_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC5_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC5_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC5_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC5_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC5_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

//////////////////////////////////////////////////////////////////////////////
function TC6_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;


        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
                message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC6_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }

}

function TC6_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC6_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC6_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC6_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC6_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC6_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC6_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC6_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

//////////////////////////////////////////////////////////////////////////////


function TC123_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC123_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}


function TC123_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC123_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC123_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC123_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC123_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC123_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}
function TC123_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
            message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC123_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }
}

//////////////////////////////////////////////////////////////////////////////


function TC456_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC456_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}


function TC456_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC456_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC456_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC456_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC456_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC456_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}
function TC456_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
            message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC456_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }
}

//////////////////////////////////////////////////////////////////////////////

function TC_ALL_B4() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC_ALL_B4" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}


function TC_ALL_B3() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC_ALL_B3" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC_ALL_B2() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC_ALL_B2" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}

function TC_ALL_B1() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        message = "{" +
            "\"device\":" + "\"" + "WEB" + "\"," +
            "\"User\":" + "\"" + user + "\"," +
            "\"Button\":" + "\"" + "TC_ALL_B1" + "\"," +
            "\"TOD\":" + "\"" + dateTime + "\"" +
            "}";
    }
}
function TC_ALL_B0() {
    if (user != null) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var txt = myFunction();
        console.log("RX: " + txt);
        if (txt == "You pressed OK!") {
            message = "{" +
                "\"device\":" + "\"" + "WEB" + "\"," +
                "\"User\":" + "\"" + user + "\"," +
                "\"Button\":" + "\"" + "TC_ALL_B0" + "\"," +
                "\"TOD\":" + "\"" + dateTime + "\"" +
                "}";
        }
    }
}

//////////////////////////////////////////////////////////////////////////////


function myFunction() {
    var txt;
    if (confirm("10min Restart Time On Lights! \r\nAre You Sure Turn Off?")) {
        txt = "You pressed OK!";
        console.log("1")
    } else {
        txt = "You pressed Cancel!";
        console.log("0")
    }
    return txt;
}
















//{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"Clicked_TC1_Tinc","TOD":"21/10/2023 13:03:48"}


