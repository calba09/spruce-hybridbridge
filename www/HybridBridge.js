cordova.define("spruce-hybridbridge.HybridBridge", function(require, exports, module) {
var hybridBridge = {
    
    bindListener: function(listener) {
        cordova.exec(
            listener,
            listener,
            "HybridBridge",
            "bindListener",
            []
        );
    },

    setView: function(title) {
        cordova.exec(
            null,
            null,
            "HybridBridge",
            "setView",
            [title]
        );
    }
    
    updateView: function(title) {
        cordova.exec(
            null,
            null,
            "HybridBridge",
            "updateView",
            [title]
        );
    }
};

module.exports = hybridBridge;

});