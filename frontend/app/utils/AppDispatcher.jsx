"use strict";

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = require('../constants').PayloadSources;

// App specific dispatcher based off of flux Dispatcher including register,
// dispatch and waitFor methods
var AppDispatcher = assign(new Dispatcher(), {

  handleUIAction: function(action) {
    this.dispatch({
      source: PayloadSources.UI_ACTION,
      action: action
    });
  }

});

module.exports = AppDispatcher;
