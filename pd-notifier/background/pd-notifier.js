function PagerDutyNotifier()
{

    self.notifSound = true;
    self.socketURL = "https://zopp-comisiones.herokuapp.com";

    self._construct = function _construct(){

        var socket = io.connect(self.socketURL);

        socket.on('connect', function() {
            console.warn("connected to socket");
        });

        socket.on('connect', function() {
            console.warn("connected to socket");
        });

        /*setInterval(function() {  
            chrome.notifications.create(
                'name-for-notification',{   
                type: 'basic', 
                iconUrl: 'images/icon.png', 
                title: "This is a notification", 
                message: "hello there!" 
                },
            function() {} 

            );
        }, 4000);*/

        if (self.notifSound)
        {
            var notifSound = new Audio("audio/notification.mp3");
            notifSound.play();
        }
        
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
