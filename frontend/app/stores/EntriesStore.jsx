"use strict";

var _entries = []

var ConfigStore = {

    init: function(config) {
        _entries = config.entries;
    },

    getEntries: function() {
        // Return a clone so that the state can't be to modified externally
        return _.cloneDeep(_entries);
    }
}

module.exports = ConfigStore
