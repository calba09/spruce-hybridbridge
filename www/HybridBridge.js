var exec = require('cordova/exec');
var success = function() {}
var fail = function(msg){
    console.error('Bridge exec error: '+msg);
}

var hybridBridge = {
    
    bindListener: function(listener) {
        exec(
            listener,
            listener,
            "HybridBridge",
            "bindListener",
            []
        );
    },

    setView: function(title) {
        exec(
            success,
            fail,
            "HybridBridge",
            "setValue",
            [title]
        );
    },
    
    updateView: function(title) {
        exec(
            success,
            fail,
            "HybridBridge",
            "updateValue",
            [title]
        );
    }
};

module.exports = hybridBridge;