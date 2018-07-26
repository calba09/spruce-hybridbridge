var NativeEventsListener = {

 onReceivedEvent : function(eventData) {
   console.log('onReceivedEvent :: eventData :: ' + JSON.stringify(eventData));

   var eventHandler = function(){};

   switch (eventData.eventType) { // Add Here more Actions from Native
     case "goTo":
       eventHandler = goToSelectedView;
     break;
     default:
       console.log('onReceivedEvent :: unreconized eventType');
   }
   eventHandler(eventData);
 }
};

// Function Implementations

function goToSelectedView(eventData) {
   var viewId = eventData.viewIndex;

   console.log('Go To Selected View :: viewID ::' + viewId);
};

module.exports = NativeEventsListener;