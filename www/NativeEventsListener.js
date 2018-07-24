cordova.define("spruce-hybridbridge.NativeEventsListener", function(require, exports, module) {
var NativeEventsListener = {

	onReceivedEvent = function(eventData) {
		logger.log("onReceivedEvent :: eventData :: " + JSON.stringify(eventData));

		var eventHandler = function(){};

		switch (eventData.eventType) { // Add Here more Actions from Native
			case "goTo":
				eventHandler = processSegmentedClickEvent;
			break;
			default:
				logger.log("onReceivedEvent :: unreconized eventType");
		}
		eventHandler(eventData);
	};

	// Function Implementations

	function processSegmentedClickEvent(eventData) {
		var viewId = eventData.viewIndex;

		logger.log("Go To Selected View :: viewID :: " + viewId);
	}
};

module.exports = NativeEventsListener;

});