Mini Server, der clicks auf einen Button zählt und ausgeben kann.
Dazu index.html, auf welcher derzeit 2 Bsp. Buttons sind.
 
 Sehr gute Version am 18.03.2015 um 15:00 Uhr gespechert.
 counts in Memory gespeichert
 
 Sehr gute Version am 25.03.2015 um 14:20 Uhr gespeichert.
 counts in mongdb gespeichert.
 Funktionsänderung: man muss nun registerID?ID=abc 1-malig aufrufen, danach wird gezählt.


####  Für die Tests:
(mongodbstart, serverstart)
CALL https://clickcounterbutton-johorst.c9.io/registerID?id=ccc
EXPECT "Herzlich willkommen, Button."

CALL https://clickcounterbutton-johorst.c9.io/incpoint?id=ccc
EXPECT "Hallo Click"

CALL https://clickcounterbutton-johorst.c9.io/getclix?id=ccc
EXPECT JSON.parse(ergebnis)['clicks'] == 2

####  Installationsanweisung:
"apt-get install mongodb"
"./mongod"
-> Die Mongo Datenbank sollte laufen.

Der Sever benötigt node.js und folgende Pakete: 
npm install express, mongoose

mit node server.js wird der Server gestartet.


"Node.js project on Cloud9 IDE!"

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.
