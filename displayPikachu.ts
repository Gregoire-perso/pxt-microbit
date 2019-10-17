function displayPikachu() {
    //Retourne la liste de couleurs, la largeur et la hauteur de pikachu
    let liste_colors = [[64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 58753, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 52354, 63106, 63106, 30976, 64512, 64512, 64512, 64512], [0]];
    let width = 24;
    let height = 27;
    let couleur_transparence = 0;
    let nombre_occurence = liste_colors.length * 100 + liste_colors[liste_colors.length - 1].length
    return { listOfColor: liste_colors, width: width, height: height, transparencyColor: couleur_transparence,
            numberOfOccurence: nombre_occurence };
}