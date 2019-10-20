function displayPikachuRun() {
    /*Cette fonction est une fonction d'exemple vous permettant de comprendre comment cette dernière est construite */
    /*Pour construire votre fonction, il vous suffit de copier/coller celle-ci et de ne modifier
    que la liste des couleurs, la largeur, la hauteur ainsi que la couleur de transparence :) */

    //Pour obtenir la largeur dans le bon format, copiez/collez le fichier 'colors_in_decimal.txt' (sortie de 'convertisseur.py')
    let liste_colors = [[64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 58753, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 52354, 63106, 63106, 30976, 64512, 64512, 64512, 64512], [64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 47936, 63106, 63106, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 47936, 63106, 63106, 63106, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 47936, 63106, 63106, 63106, 30976, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 63106, 63106, 30976, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512], [14656, 14656, 64512, 64512, 64512, 64512, 64512, 30976, 63106, 63106, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 14656, 64512, 64512, 30976, 30976, 30976, 63106, 63106, 63106, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 30976, 14656, 64512, 30976, 30976, 63106, 63106, 30976, 14656, 14656, 14656, 52354, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 63106, 63296, 14656, 30976, 63106, 47936, 14656, 14656, 14656, 14656, 14656, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 63296, 63296, 14656, 63106, 47936, 14656, 14656], [47936, 58753, 30976, 14656, 30976, 14656, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 58753, 14656, 14656, 14656, 14656, 47936, 63106, 63296, 63296, 63296, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 47936, 58753, 63106, 63296, 58753, 58753, 63106, 63296, 63296, 47936, 14656, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 58753, 63296, 63296, 63296, 63296, 63296, 63296, 63106, 47936, 14656, 30976, 47936, 63296, 47936, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 47936, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 58753, 30976, 63296, 47936, 63296], [63296, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 63106, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63106, 47936, 63296, 52354, 63106, 63106, 63106, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 63106, 14656, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 52354, 63106, 58753, 58753, 58753, 63106, 63106, 14656, 64512, 64512, 64512, 64512, 64512, 14656, 60033, 14656, 63296, 63296, 63296, 65503, 14656, 63296, 63296, 63296, 58753, 58753, 58753, 52354, 58753, 58753, 58753, 14656, 64512, 64512, 64512, 64512, 14656, 47936, 60033, 63106, 52354, 63296, 63296, 14656, 14656, 60033, 60033, 63296, 63106, 52354, 14656, 14656, 14656, 14656, 14656, 64512], [64512, 64512, 64512, 64512, 14656, 63106, 52354, 63106, 63106, 63106, 63296, 63296, 63296, 60033, 60033, 63106, 58753, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 58753, 58753, 14656, 47936, 52354, 58753, 63106, 63106, 63106, 63106, 52354, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 64512, 14656, 14656, 30976, 47936, 58753, 52354, 47936, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 58753, 63106, 58753, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512], [64512, 64512, 64512, 64512, 64512, 64512, 14656, 63106, 58753, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512]]
    //Pour obtenir la largeur et la hauteur de votre image, ouvrez le fichier 'caracteristiques.txt' et de copier/coller les valeurs correspondantes
    let width = 24;
    let height = 27;

    //C'est à vous de donner la couleur de l'arrière-plan (Cette couleur est souvent la première qui se trouve dans votre liste de couleurs ;) )
    let couleur_transparence = 64512;

    let nombre_occurence: number = (liste_colors.length - 1) * (liste_colors[0].length) + liste_colors[liste_colors.length - 1].length;
    return {
        listOfColor: liste_colors,
        width: width,
        height: height,
        transparencyColor: couleur_transparence,
        numberOfOccurence: nombre_occurence
    };
}




function displayPikachuStay() {
    let liste_colors = [[64512, 64512, 64512, 64512, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 30976, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 63106, 63296, 14656, 64512, 64512, 64512, 64512, 14656, 14656, 14656, 14656, 14656, 64512, 64512, 64512, 64512, 30976, 30976, 64512, 64512, 14656, 63296, 63296, 14656, 64512, 64512, 64512, 14656, 58753, 30976, 14656, 14656, 64512, 64512], [64512, 64512, 30976, 58753, 30976, 64512, 64512, 14656, 58753, 14656, 14656, 14656, 14656, 14656, 63106, 63296, 63296, 14656, 64512, 64512, 64512, 30976, 47936, 58753, 58753, 30976, 64512, 64512, 14656, 47936, 58753, 63106, 63296, 58753, 63106, 63296, 63296, 14656, 64512, 64512, 64512, 30976, 58753, 63106, 63106, 58753, 30976, 64512, 14656, 58753, 63296, 63296, 63296, 63296, 63296, 63296, 58753, 14656, 64512, 64512, 30976, 47936, 58753, 63106, 63106, 63106, 58753, 30976, 64512, 47936, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 47936, 30976, 30976, 58753, 63106, 63106, 63106, 63106, 58753, 52354, 30976, 14656, 63106, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63106], [47936, 14656, 30976, 63106, 63106, 58753, 30976, 14656, 14656, 64512, 14656, 63106, 14656, 63296, 63296, 63296, 63296, 63296, 63296, 63296, 63106, 58753, 14656, 63106, 47936, 14656, 14656, 30976, 64512, 64512, 64512, 14656, 60033, 14656, 63296, 63296, 63296, 65503, 14656, 63296, 63106, 63106, 58753, 47936, 63106, 58753, 30976, 64512, 64512, 64512, 64512, 64512, 14656, 47936, 63106, 52354, 63296, 63296, 14656, 14656, 60033, 58753, 63106, 30976, 47936, 47936, 63106, 30976, 64512, 64512, 64512, 64512, 64512, 14656, 63106, 52354, 63106, 63106, 63106, 63106, 60033, 60033, 63106, 63106, 58753, 47936, 14656, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 14656, 58753, 63296, 47936, 58753, 47936], [47936, 58753, 63296, 63296, 63106, 30976, 30976, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 30976, 47936, 63106, 63106, 63106, 47936, 63296, 63296, 58753, 63106, 52354, 30976, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 52354, 63106, 63106, 63106, 63106, 47936, 47936, 63106, 63106, 47936, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 52354, 63106, 52354, 63106, 63106, 63106, 63106, 58753, 52354, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 30976, 52354, 52354, 52354, 58753, 58753, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512], [64512, 64512, 64512, 64512, 64512, 14656, 14656, 30976, 47936, 52354, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 14656, 14656, 14656, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512, 64512]];
    let width = 21;
    let height = 21;
    let couleur_transparence = 64512;
    let nombre_occurence: number = (liste_colors.length - 1) * (liste_colors[0].length) + liste_colors[liste_colors.length - 1].length;
    return {
        listOfColor: liste_colors,
        width: width,
        height: height,
        transparencyColor: couleur_transparence,
        numberOfOccurence: nombre_occurence
    };
}