"use strict";

// maintain a collection of constants in the form of string literals that can be
// referenced by name
var keyMirror = require('keyMirror');


module.exports = {

    ActionTypes: keyMirror({
        MARK_FAVOURITE: null
    }),

    PayloadSources: keyMirror({
        UI_ACTION: null
    })
}
