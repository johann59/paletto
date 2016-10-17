'use strict';

var Engine = function () {

// private attributes and methods
    var plateau = [];
    var nbBille = 0;
    var joueurBlanc ;
    var joueurNoir ;

    var valeurJoueur = {BLANC:"1", NOIR:"2", VIDE:"0"};

    for (var i = 0; i < 6; i++) {
        plateau[i] = [];
        for (var j = 0; j < 6; j++) {
            plateau[i][j] = valeurJoueur.VIDE;
        }
    }

// public methods
    this.getNbBille = function(){
        return nbBille;
    };

    this.getPlateau = function(){
        return plateau;
    };

    this.getJoueurBlanc = function(){
        return joueurBlanc;
    };

    this.getJoueurNoir = function(){
        return joueurNoir;
    };

    this.getValeurJoueur = function(){
        return valeurJoueur;
    };

    this.setJoueur = function(couleur){
        if(couleur === "1"){
            joueurBlanc = 1;
            joueurNoir = 0;
        }else{
            joueurBlanc = 0;
            joueurNoir = 1;
        }
    };

  //Fonction permettant de définir où est la bille si on donne par exemple "a1"

    this.placerBille= function(position){

        var x = position.charCodeAt(0)-97;
        var y = position.charAt(1)-1;
        var plateauBille = this.getPlateau();

        if(plateauBille[x][y] === valeurJoueur.VIDE) {
            if (joueurBlanc === 1) {
                plateauBille[x][y] = valeurJoueur.BLANC;
            } else if (joueurNoir === 1) {
                plateauBille[x][y] = valeurJoueur.NOIR;
            }
            nbBille ++;
            return true;
        }
        return false;
    };

    this.affichage = function(){
        var chaine;
        for (var i = 0; i < 6; i++) {
            chaine = "";
            for (var j = 0; j < 6; j++) {
                chaine += plateau[i][j] + " ";
                if(j === 2){
                    chaine+= "| ";
                }
            }
            if(i===3){
                console.log("------ ------");
            }
            console.log(chaine);
        }
        console.log("---------------------");
    };

    this.affectationVariablePosition = function(variable){
        if(variable < 3 ){
            variable = 0;
        }else{
            variable = 3;
        }
    };

    this.rotationCoin = function(position){
        var x = position.charCodeAt(0)-97;
        var y = position.charAt(1)-1;
        var plateauBille = this.getPlateau();
        var temp = plateauBille[x][y];

        this.affectationVariablePosition(x);
        this.affectationVariablePosition(y);

        plateauBille[x][y] = plateauBille[x+2][y] ;
        plateauBille[x+2][y] = plateauBille[x+2][y+2] ;
        plateauBille[x+2][y+2] = plateauBille[x][y+2];
        plateauBille[x][y+2] = temp;
    };

    /*this.rotationCote = function(position){

    };*/

    this.rotationSousPLateau = function(position){
        this.rotationCoin(position);
    };

    this.rotationGaucheSousPLateau = function(position){
        var x = position.charCodeAt(0)-97;
        var y = position.charAt(1)-1;
        var compteur = 0;
        var plateauBille = this.getPlateau();

        this.affectationVariablePosition(x);
        this.affectationVariablePosition(y);

        while(compteur < 3){
           this.rotationSousPLateau(position);

            compteur ++;
        }
    };

    this.verificationBille = function(position){
        var x = position.charCodeAt(0)-97;
        var y = position.charAt(1)-1;
        var plateauBille = this.getPlateau();

        if(plateauBille[x][y] === "0"){
            return 0;
        }else{
            return 1;
        }
    };
};
