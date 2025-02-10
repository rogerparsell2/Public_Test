// script.js file 
//ws://rogerparsell.freedynamicdns.org:1880/ws/STSC/Tennis_Lights
//https://www.blueeds.co.uk/HTML_QR/index.html


function geturlparams() {
	var url_string = window.location.href; //window.location.href
	var url = new URL(url_string);
	var n = url.searchParams.get("name");
	console.log("url_name: " + n);
	var c = url.searchParams.get("card");
	console.log("url_card: " + c);

	localStorage.username = n;
	localStorage.card_num = c;
}

geturlparams();





var delayInMilliseconds = 10000; //1 second

setTimeout(function () {
	//your code to be executed after 1 second

	WebSocketTest();
}, delayInMilliseconds);



var QR_Message = "";
function domReady(fn) {
	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(fn, 1000);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}





domReady(function () {

	// If found you qr code 
	function onScanSuccess(decodeText, decodeResult) {
		//alert("You Qr is : " + decodeText, decodeResult);
		console.log("decodeText: " + decodeText);
		console.log("decodeResult: " + decodeResult);


		var username = localStorage.username;
		var card = localStorage.card_num;



		if (decodeText == "STSC_TC1") {
			var lights_message = "TC1_ON_45min";
			var message_temp = JSON.stringify({ "Name": username, "CARD": card, "Message": lights_message });
			message = message_temp;
			alert("You Got Lights TC1 45Min");
		}
		if (decodeText == "STSC_TC2") {
			var lights_message = "TC2_ON_45min";
			var message_temp = JSON.stringify({ "Name": username, "CARD": card, "Message": lights_message });
			message = message_temp;
			alert("You Got Lights TC2 45Min");
		}
		if (decodeText == "STSC_TC3") {
			var lights_message = "TC3_ON_45min";
			var message_temp = JSON.stringify({ "Name": username, "CARD": card, "Message": lights_message });
			message = message_temp;
			alert("You Got Lights TC3 45Min");
		}
		if (decodeText == "STSC_TC4") {
			var lights_message = "TC4_ON_45min";
			var message_temp = JSON.stringify({ "Name": username, "CARD": card, "Message": lights_message });
			message = message_temp;
			alert("You Got Lights TC4 45Min");
		}
		if (decodeText == "STSC_TC5") {
			var lights_message = "TC5_ON_45min";
			var message_temp = JSON.stringify({ "Name": username, "CARD": card, "Message": lights_message });
			message = message_temp;
			alert("You Got Lights TC5 45Min");
		}
		if (decodeText == "STSC_TC6") {
			var lights_message = "TC6_ON_45min";
			var message_temp = JSON.stringify({ "Name": username, "CARD": card, "Message": lights_message });
			message = message_temp;
			alert("You Got Lights TC6 45Min");
		}


		//html5QrcodeScanner.clear();
		//alert("You Qr is : " + decodeText, decodeResult);
	}
	//https://scanapp.org/html5-qrcode-docs/docs/intro
	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbos: 250 }
	);
	htmlscanner.render(onScanSuccess);

});






var message = "";

setInterval(myTimer, 1000);

function myTimer() {
	const d = new Date();
	console.log(d);
	//message = d;


}






var user = "";

function ClearCookie() {
	localStorage.username = "undefined";
	localStorage.card_num = "undefined";
	checkCookie();
}



function setCookie(cname, cvalue, exdays) {
	// const d = new Date();
	// d.setTime(d.getTime() + (exdays*24*60*60*1000));
	// let expires = "expires=" + d.toUTCString();
	// document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	localStorage.cname = String(cvalue);
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
		console.log("user: " + user);

		const myArray = user.split("#");
		console.log("myArray[0]: " + myArray[0]);
		console.log("myArray[1]: " + myArray[1]);

		if (user != "" && user != null) {
			//setCookie("username", myArray[0], 100);
			localStorage.username = String(myArray[0]);
			//setCookie("card_num", myArray[1], 100);
			localStorage.card_num = String(myArray[1]);
		}
	}
	document.getElementById("USERNAME").innerHTML = "User: " + localStorage.username;
	document.getElementById("CARD_NUM").innerHTML = "card: " + localStorage.card_num;
}

//user: Roger_Parsell#04:85:D4:A2:4C:68:80






var message = "";




function WebSocketTest2() {

}

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

			console.log("received_msg: " + received_msg);
			//document.getElementById("status").innerHTML = received_msg

			//document.getElementById("log").innerHTML = received_msg

			const obj = JSON.parse(received_msg);


			// document.getElementById("tc1_lable").innerHTML = "TC1 Time: " + obj.T1 + " Name: " + obj.Name1;
			// document.getElementById("tc2_lable").innerHTML = "TC2 Time: " + obj.T2 + " Name: " + obj.Name2;
			// document.getElementById("tc3_lable").innerHTML = "TC3 Time: " + obj.T3 + " Name: " + obj.Name3;
			// document.getElementById("tc4_lable").innerHTML = "TC4 Time: " + obj.T4 + " Name: " + obj.Name4;
			// document.getElementById("tc5_lable").innerHTML = "TC5 Time: " + obj.T5 + " Name: " + obj.Name5;
			// document.getElementById("tc6_lable").innerHTML = "TC6 Time: " + obj.T6 + " Name: " + obj.Name6;


			var username = localStorage.username;
			var card = localStorage.card_num;
			console.log("card: " + card);


			if (String(obj.Card) == card) {
				if (String(obj.Message).indexOf("£") > -1) {

					console.log("Credit Check: " + obj.Message);
					document.getElementById("credit").innerHTML = String("Credit: " + obj.Message);
				}
			}




			if (obj.Online != null) {

				console.log("devices: " + obj.Online);
			}


			if (obj.Device != null) {
				/**/
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
				console.log(obj.T1);
				console.log(obj.T2);
				console.log(obj.T3);
				console.log(obj.T4);
				console.log(obj.T5);
				console.log(obj.T6);
				document.getElementById("tc1_lable").innerHTML = "TC1 Time: " + obj.T1;
				document.getElementById("tc2_lable").innerHTML = "TC2 Time: " + obj.T2;
				document.getElementById("tc3_lable").innerHTML = "TC3 Time: " + obj.T3;
				document.getElementById("tc4_lable").innerHTML = "TC4 Time: " + obj.T4;
				document.getElementById("tc5_lable").innerHTML = "TC5 Time: " + obj.T5;
				document.getElementById("tc6_lable").innerHTML = "TC6 Time: " + obj.T6;


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



function CreditCheck() {

	var username = localStorage.username;
	var card = localStorage.card_num;


	if (user != null) {
		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date + ' ' + time;

		//ws.send("Message to send");
		//document.getElementById("demo").innerHTML = "Hello World";
		message = JSON.stringify({ "Name": username, "CARD": card, "Message": "Credit_Check" });
	}
}