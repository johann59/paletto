'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testPlateau = function () {
    var moteur = new Engine();
    var plateauTest = moteur.getPlateau();

    assertTrue(moteur.getNbBille() == 0);

    for(var i=0; i<6; i++) {
        for(var j=0; j<6; j++) {
            assertTrue(plateauTest[i][j] === "0");
        }
    }
};

PalettoTestCase.prototype.testJoueurBlanc = function () {
    var moteur = new Engine();
    moteur.setJoueur("1");
    assertTrue(moteur.getJoueurBlanc() == 1);

};

PalettoTestCase.prototype.testPlacerBilleBlanc = function () {
    var moteur = new Engine();
    assertTrue(moteur.placerBille("a1") === true);
};

PalettoTestCase.prototype.testNbBille = function () {
    var moteur = new Engine();
    moteur.placerBille("a5");
    assertTrue(moteur.getNbBille() === 1);
};

PalettoTestCase.prototype.testRotationBlanc = function () {
    var moteur = new Engine();
    var plateauBille = moteur.getPlateau();
    var valeurJoueur = moteur.getValeurJoueur();

    moteur.setJoueur("1");
    moteur.placerBille("a1");
    moteur.rotationSousPLateau("a1");
    //sertTrue(plateauBille[2][0] == valeurJoueur.BLANC) ;
    moteur.affichage();
};

PalettoTestCase.prototype.testJoueurNoir = function () {
    var moteur = new Engine();
    moteur.setJoueur("2");
    assertTrue(moteur.getJoueurNoir() === 1);

};

PalettoTestCase.prototype.testPlacerBilleNoire = function () {
    var moteur = new Engine();
    assertTrue(moteur.placerBille("a1") == true);

};

PalettoTestCase.prototype.testRotationGauche = function () {
    var moteur = new Engine();
    var plateauBille = moteur.getPlateau();
    var valeurJoueur = moteur.getValeurJoueur();

    moteur.setJoueur("blanc");
    moteur.placerBille("a1");
    moteur.rotationSousPLateau("a1");

    moteur.setJoueur("noir");
    moteur.placerBille("a1");
    moteur.rotationGaucheSousPLateau("a1");
    moteur.affichage();
    //[0][2] -> a3
    //sertTrue(plateauBille[0][2] == valeurJoueur.VIDE);
};

PalettoTestCase.prototype.verificationBille = function(){
    var moteur = new Engine();
    var test = moteur.verificationBille("a1");
    moteur.setJoueur("1");
    if(test === 0){
        console.log("Il y a dejà une valeur dans cette case");
    }
    moteur.affichage();
};