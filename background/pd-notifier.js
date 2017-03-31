function PagerDutyNotifier()
{

    self.notifSound = true;
    self.socketURL = "https://zopp-comisiones.herokuapp.com";

    self._construct = function _construct(){

        var socket = io.connect(self.socketURL);

        socket.on('connect', function() {
            console.warn("connected to socket");
        });

        socket.on('notice_comission', function(data) {                
            chrome.notifications.create(
                    'name-for-notification',{   
                    type: 'basic', 
                    iconUrl: 'images/icon.png', 
                    title: "Zopp Digital", 
                    message: "!WOW! Alguien ha hecho una comisión, click para ver mas" 
                },
            function(){
                alert("Hola");      
            });
            //Play Sound
            var notifSound = new Audio("audio/notification.mp3");
            notifSound.play();
        });
    }

    self._construct();
}


var _pdNotifier = null;
function reloadNotifier()
{
    _pdNotifier = new PagerDutyNotifier();
}

//chrome.alarms.onAlarm.addListener(function(alarm) { reloadNotifier(); });
//chrome.alarms.create("pagerduty-notifier", { periodInMinutes: 1 });

reloadNotifier();