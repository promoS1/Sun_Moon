"use strict"

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {
	
	var marqueurs;
	var pseudo;
	var mdp
	var page;

	//ALLER A LA PAGE DU LOBBY SOLO

	page = fs.readFileSync ('../html/modele_lobby_solo.html', 'utf-8');

	marqueurs = {};
	marqueurs.erreurs ="";

	marqueurs.pseudo = query.pseudo;	
	marqueurs.mdp = query.mdp;

	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'test/html'});
	res.write(page);
	res.end();

};

module.exports = trait;
