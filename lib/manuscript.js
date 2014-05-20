/*
 * manuscript
 * http://github.com/typesettin/manuscript
 *
 * Copyright (c) 2014 Yaw Joseph Etse. All rights reserved.
 */

'use strict';

var classie = require('classie'),
	extend = require('util-extend'),
	events = require('events'),
	domhelper = require('domhelper'),
	util = require('util');

/**
 * A module that represents a manuscript.
 * @{@link https://github.com/typesettin/manuscript}
 * @author Yaw Joseph Etse
 * @copyright Copyright (c) 2014 Typesettin. All rights reserved.
 * @license MIT
 * @module manuscript
 * @requires module:classie
 * @requires module:util-extent
 * @requires module:util
 * @requires module:domhelper
 * @requires module:events
 * @todo to do later
 */
var manuscript = function(config_options){
	/** module default configuration */
	var options,
		linotypeElement,
		defaults = {
			'verticalCentered' : true
		},
		container;

	//extend default options
	options = extend( defaults,config_options );


	/** The current scroll delay setting */
	this.scrollDelay = function(){
		return false;
	};

	/**
	 * intialize a new linotype
	 */
	this.init = function(){
		console.log('prev');
	}.bind(this);
};

module.exports = manuscript;


// If there is a window object, that at least has a document property,
// define linotype
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.manuscript = manuscript;
}