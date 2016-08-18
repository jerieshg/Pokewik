'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
	mongoose = require('mongoose'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
	_ = require('lodash');

var Pokedex = require('pokedex-promise-v2');
var p = new Pokedex();

/**
 * Create a Pokedex
 */
exports.create = function(req, res) {

};

/**
 * Show the current Pokedex
 */
exports.read = function(req, res) {

};

/**
 * Update a Pokedex
 */
exports.update = function(req, res) {

};

/**
 * Delete an Pokedex
 */
exports.delete = function(req, res) {

};

/**
 * List of Pokedexes
 */
exports.list = function(req, res) {
	var pokemonIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	var promises = [];
	var result = [];

	for (let pokemon of pokemonIds) {
		promises.push(p.getPokemonByName(pokemon));
	}

	Promise.all(promises).then(function(dataArr) {
		dataArr.forEach(function(data) {
			result.push(data);
		});
		res.send(result);
	}).catch(function(err) {
		console.log(err);
	});
};
