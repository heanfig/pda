function PagerDutyNotifier()
{

    self.notifSound = true;

    self._construct = function _construct(){

        setInterval(function() {  
            chrome.notifications.create(
                'name-for-notification',{   
                type: 'basic', 
                iconUrl: 'images/icon.png', 
                title: "This is a notification", 
                message: "hello there!" 
                },
            function() {} 

            );
        }, 4000);

        if (self.notifSound)
        {
            var notifSound = new Audio("audio/notification.mp3");
            notifSound.play();
        }
        
    }

    self._construct();
}

/*chrome.runtime.onInstalled.addListener(function(details)
{
    if (details.reason == 'install')
    {
        chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    }
});*/

var _pdNotifier = null;

function reloadNotifier()
{
    _pdNotifier = new PagerDutyNotifier();
}

//chrome.alarms.onAlarm.addListener(function(alarm) { reloadNotifier(); });
//chrome.alarms.create("pagerduty-notifier", { periodInMinutes: 1 });

reloadNotifier();
