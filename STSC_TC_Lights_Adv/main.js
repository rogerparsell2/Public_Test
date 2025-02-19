var url_name = "";
var url_card = "";

// https://www.base64encode.org/

//google sheets function
//https://joshuatz.com/posts/2019/google-sheets-quick-start-with-base64/

//  index.html?name=Roger_Parsell&card=04:85:D4:A2:4C:68:80
// index.html?bmFtZT1Sb2dlcl9QYXJzZWxsJmNhcmQ9MDQ6ODU6RDQ6QTI6NEM6Njg6ODA=
// {"name":"Roger_Parsell","card":"04:85:D4:A2:4C:68:80"}

// ##########  put a return on the end  #################### 

function geturlparams() {
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  console.log("url: " + url);

  var url_params = decodeURIComponent(url.searchParams);
  console.log("url_params: " + url_params);

  var decodedStringAtoB = atob(url_params);
  console.log("decodedStringAtoB: " + decodedStringAtoB);

  if ((decodedStringAtoB.includes("name") == true) && (decodedStringAtoB.includes("card") == true)) {

    const obj = JSON.parse(decodedStringAtoB);

    n = obj.name;
    c = obj.card;

    console.log("url_name: " + n);
    console.log("url_card: " + c);

    console.log("n: " + n);
    console.log("c: " + c);

     localStorage.username = n;
     localStorage.card_num = c;

    url_name = n;
    url_card = c;
  }

}

geturlparams();

// function encode_string() {
// 	// Define the string
// 	var decodedStringBtoA = 'name=roger_url&card=04:85:D4:A2:4C:68:80';
// 	console.log("decodedStringBtoA: " + decodedStringBtoA);
// 	// Encode the String
// 	var encodedStringBtoA = btoa(decodedStringBtoA);
// 	console.log("encodedStringBtoA: " + encodedStringBtoA);
// 	// Define the string
// 	var encodedStringAtoB = encodedStringBtoA;
// 	// Decode the String
// 	var decodedStringAtoB = atob(encodedStringAtoB);
// 	console.log("decodedStringAtoB: " + decodedStringAtoB);
// }
// encode_string();

//this in the html headder
//<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>

//MQTTT variable
var mqtt;
var reconnectTimeOut = 2000;
/*
https://console.hivemq.cloud/clusters/free/6a3dfe33a47444c79132db99eda8f34c
var host = "6a3dfe33a47444c79132db99eda8f34c.s1.eu.hivemq.cloud";//port 8081
var port = 8884; */

var host = "test.mosquitto.org"; //port 8081
var port = 8081; /**/

/* var host = "mqtt.eclipseprojects.io";//port 443
var port = 443; */

/* var host = "broker.hivemq.com";//port 8884
var port = 8884; */

/* var host = "broker.mqtt.cool";//port 1883
var port = 1883; */

//var port = 8080;
//var port = 1883;
//var port = 1884;
//var port = 8883;
//var port = 9001;
//var port = 8000;

function onConnect() {
  console.log("Connected");
  mqtt.subscribe("STSC/#");
  //mqtt.subscribe("STSC/status");
  //mqtt.subscribe("STSC/member_list");
}

//https://github.com/eclipse-paho/paho.mqtt.javascript
function status_msg(msg) {
  //console.log("payload:  " + msg);

  var msg_ps = msg;
  if (msg_ps.includes("{") && msg_ps.includes("}")) {
    //console.log("message: " + message.payloadString);
    var obj;
    obj = JSON.parse(msg_ps);

    var Device = String(obj.Device);
    var Reset = String(obj.Reset);
    var Dissable_Relays = String(obj.Dissable_Relays);
    var Online = String(obj.Online);
    var T1 = String(obj.T1);
    var DIF1 = String(obj.DIF1);
    var T2 = String(obj.T2);
    var DIF2 = String(obj.DIF2);
    var T3 = String(obj.T3);
    var DIF3 = String(obj.DIF3);
    var T4 = String(obj.T4);
    var DIF4 = String(obj.DIF4);
    var T5 = String(obj.T5);
    var DIF5 = String(obj.DIF5);
    var T6 = String(obj.T6);
    var DIF6 = String(obj.DIF6);
    var T1_ontime = String(obj.T1_ontime);
    var T2_ontime = String(obj.T2_ontime);
    var T3_ontime = String(obj.T3_ontime);
    var T4_ontime = String(obj.T4_ontime);
    var T5_ontime = String(obj.T5_ontime);
    var T6_ontime = String(obj.T6_ontime);
    var T1_Total_ontime = String(obj.T1_Total_ontime);
    var T2_Total_ontime = String(obj.T2_Total_ontime);
    var T3_Total_ontime = String(obj.T3_Total_ontime);
    var T4_Total_ontime = String(obj.T4_Total_ontime);
    var T5_Total_ontime = String(obj.T5_Total_ontime);
    var T6_Total_ontime = String(obj.T6_Total_ontime);
    var T1_Cost = String(obj.T1_Cost);
    var T2_Cost = String(obj.T2_Cost);
    var T3_Cost = String(obj.T3_Cost);
    var T4_Cost = String(obj.T4_Cost);
    var T5_Cost = String(obj.T5_Cost);
    var T6_Cost = String(obj.T6_Cost);

    var TC1 =
      "TC1: " +
      T1 +
      " | T1_ontime: " +
      T1_ontime +
      " | T1_Total_ontime: " +
      T1_Total_ontime +
      " | T1_Cost: " +
      T1_Cost;
    var TC2 =
      "TC2: " +
      T2 +
      " | T2_ontime: " +
      T2_ontime +
      " | T2_Total_ontime: " +
      T2_Total_ontime +
      " | T2_Cost: " +
      T2_Cost;
    var TC3 =
      "TC3: " +
      T3 +
      " | T3 ontime: " +
      T3_ontime +
      " | T3_Total_ontime: " +
      T3_Total_ontime +
      " | T3_Cost: " +
      T3_Cost;
    var TC4 =
      "TC4: " +
      T4 +
      " | T4_ontime: " +
      T4_ontime +
      " | T4_Total_ontime: " +
      T4_Total_ontime +
      " | T4_Cost: " +
      T4_Cost;
    var TC5 =
      "TC5: " +
      T5 +
      " | T5_ontime: " +
      T5_ontime +
      " | T5_Total_ontime: " +
      T5_Total_ontime +
      " | T5_Cost: " +
      T5_Cost;
    var TC6 =
      "TC6: " +
      T6 +
      " | T6_ontime: " +
      T6_ontime +
      " | T6_Total_ontime: " +
      T6_Total_ontime +
      " | T6_Cost: " +
      T6_Cost;

    if (Online != null) {
      console.log("Online: " + Online);
      document.getElementById("online").innerHTML = "State: " + Online;

      if (Online == "Online") {
        document.getElementById("online").style.color = "lawngreen";
        document.getElementById("online").style.fontSize = "150%";
      } else {
        document.getElementById("online").style.color = "red";
        document.getElementById("online").style.fontSize = "150%";
      }
    }

    //T1 = "POO";
    document.getElementById("tc1_lable").innerHTML = "TC1 Time: " + T1;
    document.getElementById("tc1_lable_1").innerHTML =
      T1_ontime + " | " + T1_Cost;

    document.getElementById("tc2_lable").innerHTML = "TC2 Time: " + T2;
    document.getElementById("tc2_lable_1").innerHTML =
      "" + T2_ontime + " | " + T2_Cost;

    document.getElementById("tc3_lable").innerHTML = "TC3 Time: " + T3;
    document.getElementById("tc3_lable_1").innerHTML =
      "" + T3_ontime + " | " + T3_Cost;

    document.getElementById("tc4_lable").innerHTML = "TC4 Time: " + T4;
    document.getElementById("tc4_lable_1").innerHTML =
      "" + T4_ontime + " | " + T4_Cost;

    document.getElementById("tc5_lable").innerHTML = "TC5 Time: " + T5;
    document.getElementById("tc5_lable_1").innerHTML =
      "" + T5_ontime + " | " + T5_Cost;

    document.getElementById("tc6_lable").innerHTML = "TC6 Time: " + T6;
    document.getElementById("tc6_lable_1").innerHTML =
      "" + T6_ontime + " | " + T6_Cost;

    document.getElementById("tc1_lable2").innerHTML = "TC1 Time: " + T1;
    document.getElementById("tc2_lable2").innerHTML = "TC2 Time: " + T2;
    document.getElementById("tc3_lable2").innerHTML = "TC3 Time: " + T3;
    document.getElementById("tc4_lable2").innerHTML = "TC4 Time: " + T4;
    document.getElementById("tc5_lable2").innerHTML = "TC5 Time: " + T5;
    document.getElementById("tc6_lable2").innerHTML = "TC6 Time: " + T6;

    // document.getElementById("Device").innerHTML = "Device: " + Device;
    // document.getElementById("Reset").innerHTML = "Reset: " + Reset;
    // document.getElementById("Dissable_Relays").innerHTML = "Dissable_Relays: " + Dissable_Relays;
    // document.getElementById("Online").innerHTML = "Online: " + Online;

    // document.getElementById("T1").innerHTML = TC1;
    // document.getElementById("T2").innerHTML = TC2;
    // document.getElementById("T3").innerHTML = TC3;
    // document.getElementById("T4").innerHTML = TC4;
    // document.getElementById("T5").innerHTML = TC5;
    // document.getElementById("T6").innerHTML = TC6;

    // document.getElementById("Data").innerHTML = msg_ps;
  }

  // let temperature = parseInt(msg.payloadString);
  // let today = new Date();
  // let time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // console.log(time, temperature);
  //mqtt.send('STSC/test1', '{"DATA":1234567890}');
}

var user_credit = "Updating";

function memberlist_msg(msg) {
  //console.log("HERE");
  console.log("payload:  " + msg);

  //count all closing ]
  var count = (msg.match(/]/g) || []).length;
  console.log(count);

  var msg_ps = msg;
  if (true) {
    //console.log("message: " + message.payloadString);
    //console.log("HERE");

    var obj;
    obj = JSON.parse(msg_ps);

    for (var i = 0; i < count - 1; i++) {
      //console.log("ARRAY: " + obj[i]);
      var card_number = url_card.toString();
      if (obj[i].includes(card_number)) {
        console.log("#############################################");
        console.log("found " + card_number + " at: " + i);
        console.log("ARRAY: " + obj[i]);
        let line = "[" + obj[i].toString() + "]";
        console.log("line: " + line);

        line = line.replaceAll("[", '["');
        line = line.replaceAll("]", '"]');
        line = line.replaceAll(",", '","');
        console.log("line: " + line);

        const text = line;
        const myArr = JSON.parse(text);
        console.log("First name: " + myArr[0]);
        console.log("last name: " + myArr[1]);
        console.log("momey: " + myArr[5]);

        var firstname = myArr[0];
        var lastname = myArr[1];
        user_credit = myArr[5];

        document.getElementById("USERNAME").innerHTML =
          "User: " +
          localStorage.username +
          " | User Credit: " +
          firstname +
          " " +
          lastname +
          " : " +
          user_credit +
          " | " +
          url_card +
          " | " +
          url_name;
        console.log("#############################################");
        break;
      }
    }
  }
}

function MQTTConnect() {
  var id = "webpage" + Math.floor(Math.random() * 100000000);
  console.log("Connecting to " + host + id + port);
  mqtt = new Paho.MQTT.Client(host, Number(port), id); //demouser
  //mqtt.onMessageArrived = onMessageArrived;

  mqtt.onMessageArrived = function (message) {
    var topic = message.destinationName;
    var msg = message.payloadString;

    // console.log("Topic:", topic);
    // console.log("Message:", msg);

    if (topic == "STSC/status") {
      //console.log("Message:", msg);
      status_msg(msg);
    }
    if (topic == "STSC/member_list") {
      // console.log("member list recieved ##########################################");
      // console.log("Message:", msg);
      memberlist_msg(msg);
      //console.log("member list recieved ##########################################");
    }
  };

  var options = {
    useSSL: true,
    timeout: 3,
    onSuccess: onConnect,
    onFailure: onFailure,
  };
  mqtt.connect(options);
}

function onFailure(msg) {
  console.log("Connection Attempt to Host " + host + " Failed");
  setTimeout(() => {
    MQTTConnect();
  }, reconnectTimeOut);
}
MQTTConnect();

function TOD() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = (date + " " + time).toString();
  return dateTime;
}

/////////////////////////////////////////////////////////////////////////////////////
function TC1_B1_Function() {
  console.log("Button1");

  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC1_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC1_B0","TOD":"17/09/2024 13:31:46"}');
  //mqtt.send('STSC/web', '{"device":"WEB","User":"Roger_Parsell","Button":"TC1_B0","TOD":"dateTime"}');
  mqtt.send("STSC/web", message);
}

function TC1_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC1_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);
  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC1_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC1_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC1_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);
  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC1_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC1_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC1_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);
  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC1_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC1_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC1_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);
  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC1_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}
/////////////////////////////////////////////////////////////////////////////////////

function TC2_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC2_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC2_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC2_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC2_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC2_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC2_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC2_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC2_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC2_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC2_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC2_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC2_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC2_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC2_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

/////////////////////////////////////////////////////////////////////////////////////

function TC3_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC3_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC3_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC3_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC3_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC3_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC3_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC3_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC3_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC3_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC3_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC3_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC3_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC3_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC3_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}
/////////////////////////////////////////////////////////////////////////////////////

function TC4_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC4_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC4_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC4_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC4_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC4_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC4_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC4_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC4_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC4_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC4_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC4_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC4_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC4_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC4_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}
/////////////////////////////////////////////////////////////////////////////////////

function TC5_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC5_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC5_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC5_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC5_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC5_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC5_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC5_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC5_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC5_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC5_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC5_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC5_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC5_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC5_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}
/////////////////////////////////////////////////////////////////////////////////////

function TC6_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC6_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC6_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC6_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC6_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC6_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC6_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC6_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC6_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC6_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC6_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC6_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC6_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC6_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC6_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function TC_123_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC123_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC123_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_123_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC123_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC123_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_123_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC123_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC123_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_123_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC123_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC123_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_123_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC123_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC123_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function TC_456_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC456_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC456_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_456_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC456_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC456_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_456_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC456_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC456_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_456_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC456_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC456_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_456_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC456_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC456_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function TC_ALL_B1_Function() {
  console.log("Button1");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC_ALL_B0" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC_ALL_B0","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_ALL_B2_Function() {
  console.log("Button2");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC_ALL_B1" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC_ALL_B1","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_ALL_B3_Function() {
  console.log("Button3");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC_ALL_B2" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC_ALL_B2","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_ALL_B4_Function() {
  console.log("Button4");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC_ALL_B3" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC_ALL_B3","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

function TC_ALL_B5_Function() {
  console.log("Button5");
  let message =
    "{" +
    '"device":' +
    '"' +
    "WEB" +
    '",' +
    '"User":' +
    '"' +
    user +
    '",' +
    '"Button":' +
    '"' +
    "TC_ALL_B4" +
    '",' +
    '"TOD":' +
    '"' +
    TOD() +
    '"' +
    "}";
  console.log("message: " + message);

  //mqtt.send('STSC/web', '{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"TC_ALL_B4","TOD":"17/09/2024 13:31:46"}');
  mqtt.send("STSC/web", message);
}

/////////////////////////////////////////////////////////////////////////////////////

/*
message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC1_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
*/

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
  //console.log(d);
  //document.getElementById("demo").innerHTML = d.toLocaleTimeString();

  //document.getElementById("log2").innerHTML = d;

  //message={"tick":"tick1"};
}

////////////////////////////////////////////////////////////////////////////
//auto refresh on open and restore tab
/**/
let userIsViewingPage = true;

setInterval(focusChecker, 500);

function focusChecker() {
  if (document.hasFocus()) {
    if (!userIsViewingPage) {
      /*         setTimeout(function(){
                  location.reload();
              }, 1000); */

      userIsViewingPage = true;
      console.log("Browser tab is visible 1");
    }
  } else {
    userIsViewingPage = false;
    console.log("Browser tab is hidden 1");
  }
}

window.disableResetPrompt;
window.onblur = function () {
  window.onfocus = function () {
    /* */
    setTimeout(function () {
      location.reload();
    }, 1000);
    console.log("Browser tab is visible 2");
  };
};

/**/
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("Browser tab is hidden 3");
  } else {
    console.log("Browser tab is visible 3");
    /*         setTimeout(function(){
                location.reload();
            }, 1000); */
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
  document.getElementById("USERNAME").innerHTML =
    "User: " + localStorage.username + " | User Credit: " + user_credit;
}

// let roundTime = (time) => {

//     let [hours, minutes, seconds] = time.split(':');
//     hours = parseInt(hours);
//     minutes = parseInt(minutes);
//     seconds = parseInt(seconds);
//     // console.log("hours: " + hours);
//     // console.log("minutes: " + minutes);
//     // console.log("seconds: " + seconds);

//     minutes = minutes +1;
//     if(minutes > 59){
//         hours = hours +1;
//     }

//     let rHr = String(hours);
//     let rMin= String(minutes);

//     return rHr.padStart(2, '0')+':'+rMin.padStart(2, '0')+ ':00'
// }

// // USAGE //

// // Round time to 15 minutes
// //var result = roundTime('8:07', 15); // "08:00"
// //var result = roundTime('7:53', 15); // "08:00"
// //var result = roundTime('7:52:25'); // "07:45"
// //console.log("result: " + result);

// WebSocketTest();

// function WebSocketTest() {

//     if ("WebSocket" in window) {
//         //alert("WebSocket is supported by your Browser!");

//         // Let us open a web socket
//         var ws = new WebSocket("wss://free.blr2.piesocket.com/v3/1?api_key=ESu9knvfczcQhLcTSom0RRnhRsRglMZ5cSZqLEaY&notify_self=1");
//         //var ws = new WebSocket("ws://rogerparsell.freedynamicdns.org:1880/ws/STSC/Tennis_Lights");
//         //var ws = new WebSocket("ws://192.168.0.130:1880/ws/STSC/Tennis_Lights");

//         ws.onopen = function () {
//             // Web Socket is connected, send data using send()
//             ws.send("{\"Status\":\"New Device Connected\"}");
//             //alert("Message is sent...");
//         };

//         ws.onmessage = function (evt) {
//             var received_msg = evt.data;
//             //alert("Message is received...");

//             //ws.send("Loopback: " + received_msg);

//             var jsonPretty = JSON.stringify(JSON.parse(received_msg), null, 2);
//             received_msg = jsonPretty;

//             console.log(received_msg);
//             //document.getElementById("status").innerHTML = received_msg

//             //document.getElementById("log").innerHTML = received_msg

//             const obj = JSON.parse(received_msg);

//             if (obj.Online != null) {

//                 console.log("Online: " + obj.Online);
//                 document.getElementById("online").innerHTML = "State: " + obj.Online;

//                 if(obj.Online == "Online"){
//                     document.getElementById("online").style.color = "lawngreen";
//                     document.getElementById("online").style.fontSize  = "150%";

//                 }else{

//                     document.getElementById("online").style.color = "red";
//                     document.getElementById("online").style.fontSize  = "150%";

//                 }

//             }

//             if (obj.Device != null) {

//                 console.log(obj.DIF1);
//                 if (obj.DIF1 == 300) {
//                     show();
//                 }
//                 console.log(obj.DIF2);
//                 if (obj.DIF2 == 300) {
//                     show();
//                 }
//                 console.log(obj.DIF3);
//                 if (obj.DIF3 == 300) {
//                     show();
//                 }
//                 console.log(obj.DIF4);
//                 if (obj.DIF4 == 300) {
//                     show();
//                 }
//                 console.log(obj.DIF5);
//                 if (obj.DIF5 == 300) {
//                     show();
//                 }
//                 console.log(obj.DIF6);
//                 if (obj.DIF6 == 300) {
//                     show();
//                 }

//                 document.getElementById("tc1_lable").innerHTML = "TC1 Time: " + obj.T1;
//                 document.getElementById("tc1_lable_1").innerHTML = "" + (obj.T1_ontime) + " | "+ (obj.T1_Cost);
//                 document.getElementById("tc2_lable").innerHTML = "TC2 Time: " + obj.T2;
//                 document.getElementById("tc2_lable_1").innerHTML = "" + (obj.T2_ontime) + " | "+ (obj.T2_Cost);
//                 document.getElementById("tc3_lable").innerHTML = "TC3 Time: " + obj.T3;
//                 document.getElementById("tc3_lable_1").innerHTML = "" + (obj.T3_ontime) + " | "+ (obj.T3_Cost);
//                 document.getElementById("tc4_lable").innerHTML = "TC4 Time: " + obj.T4;
//                 document.getElementById("tc4_lable_1").innerHTML = "" + (obj.T4_ontime) + " | "+ (obj.T4_Cost);
//                 document.getElementById("tc5_lable").innerHTML = "TC5 Time: " + obj.T5;
//                 document.getElementById("tc5_lable_1").innerHTML = "" + (obj.T5_ontime) + " | "+ (obj.T5_Cost);
//                 document.getElementById("tc6_lable").innerHTML = "TC6 Time: " + obj.T6;
//                 document.getElementById("tc6_lable_1").innerHTML = "" + (obj.T6_ontime) + " | "+ (obj.T6_Cost);

//                 document.getElementById("tc1_lable2").innerHTML = "TC1 Time: " + obj.T1;
//                 document.getElementById("tc2_lable2").innerHTML = "TC2 Time: " + obj.T2;
//                 document.getElementById("tc3_lable2").innerHTML = "TC3 Time: " + obj.T3;
//                 document.getElementById("tc4_lable2").innerHTML = "TC4 Time: " + obj.T4;
//                 document.getElementById("tc5_lable2").innerHTML = "TC5 Time: " + obj.T5;
//                 document.getElementById("tc6_lable2").innerHTML = "TC6 Time: " + obj.T6;

// /*                 document.getElementById("tc1_lable3").innerHTML = "TC1 Time: " + obj.T1;
//                 document.getElementById("tc2_lable3").innerHTML = "TC2 Time: " + obj.T2;
//                 document.getElementById("tc3_lable3").innerHTML = "TC3 Time: " + obj.T3;
//                 document.getElementById("tc4_lable3").innerHTML = "TC4 Time: " + obj.T4;
//                 document.getElementById("tc5_lable3").innerHTML = "TC5 Time: " + obj.T5;
//                 document.getElementById("tc6_lable3").innerHTML = "TC6 Time: " + obj.T6; */
//             }
//             if (message != "") {
//                 ws.send(message);
//                 message = "";
//             }
//         };

//         ws.onclose = function () {

//             WebSocketTest();
//             // websocket is closed.
//             //alert("Connection is closed...");
//         };

//     } else {

//         // The browser doesn't support WebSocket
//         alert("WebSocket NOT supported by your Browser!");
//     }
// }

// //////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////

// function TC1_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;

//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//                 message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC1_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }

// }

// function TC1_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC1_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC1_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC1_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC1_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC1_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC1_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC1_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// //////////////////////////////////////////////////////////////////////////////
// function TC2_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;

//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//                 message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC2_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }

// }

// function TC2_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC2_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC2_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC2_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC2_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC2_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC2_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC2_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// //////////////////////////////////////////////////////////////////////////////
// function TC3_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;

//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//                 message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC3_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }

// }

// function TC3_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC3_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC3_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC3_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC3_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC3_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC3_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC3_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// //////////////////////////////////////////////////////////////////////////////
// function TC4_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;

//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//                 message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC4_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }

// }

// function TC4_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC4_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC4_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC4_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC4_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC4_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC4_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC4_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// //////////////////////////////////////////////////////////////////////////////
// function TC5_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;

//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//                 message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC5_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }

// }

// function TC5_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC5_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC5_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC5_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC5_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC5_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC5_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC5_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// //////////////////////////////////////////////////////////////////////////////
// function TC6_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;

//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//                 message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC6_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }

// }

// function TC6_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC6_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC6_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC6_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC6_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC6_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC6_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC6_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// //////////////////////////////////////////////////////////////////////////////

// function TC123_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC123_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC123_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC123_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC123_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC123_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC123_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC123_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }
// function TC123_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//             message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC123_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }
// }

// //////////////////////////////////////////////////////////////////////////////

// function TC456_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC456_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC456_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC456_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC456_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC456_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC456_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC456_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }
// function TC456_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//             message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC456_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }
// }

// //////////////////////////////////////////////////////////////////////////////

// function TC_ALL_B4() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC_ALL_B4" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC_ALL_B3() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC_ALL_B3" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC_ALL_B2() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC_ALL_B2" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }

// function TC_ALL_B1() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         message = "{" +
//             "\"device\":" + "\"" + "WEB" + "\"," +
//             "\"User\":" + "\"" + user + "\"," +
//             "\"Button\":" + "\"" + "TC_ALL_B1" + "\"," +
//             "\"TOD\":" + "\"" + dateTime + "\"" +
//             "}";
//     }
// }
// function TC_ALL_B0() {
//     if (user != null) {
//         var today = new Date();
//         var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var dateTime = date + ' ' + time;
//         var txt = myFunction();
//         console.log("RX: " + txt);
//         if (txt == "You pressed OK!") {
//             message = "{" +
//                 "\"device\":" + "\"" + "WEB" + "\"," +
//                 "\"User\":" + "\"" + user + "\"," +
//                 "\"Button\":" + "\"" + "TC_ALL_B0" + "\"," +
//                 "\"TOD\":" + "\"" + dateTime + "\"" +
//                 "}";
//         }
//     }
// }

// //////////////////////////////////////////////////////////////////////////////

// function myFunction() {
//     var txt;
//     if (confirm("10min Restart Time On Lights! \r\nAre You Sure Turn Off?")) {
//         txt = "You pressed OK!";
//         console.log("1")
//     } else {
//         txt = "You pressed Cancel!";
//         console.log("0")
//     }
//     return txt;
// }

// //{"device":"SM-G960F","manufacturer":"samsung","deviceName":"Galaxy S9 RDP","Button":"Clicked_TC1_Tinc","TOD":"21/10/2023 13:03:48"}
