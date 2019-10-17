function displayImage(x_depart: number, y_depart: number, taille_pixel: number,
    liste_colors: number[][], width: number, height: number,
    couleur_transparence: number, nombre_occurence: number,
    replace_color: number) {
    /*Explication des arguments : 
        x_depart, y_depart --> coordonnée de l'image (voir avec taille pixel)
        taille_pixel --> taille de chaque pixel
        liste_colors --> liste des couleurs de chaque pixel de l'image
        width --> largeur de l'image
        height --> hauteur de l'image
        couleur_transparence --> couleur de 'liste_colors' à ne pas afficher
        nombre_occurence --> nombre de pixel de l'image
        replace_color --> couleur à afficher à la place de la couleur de transparence
    */

    //Définition de la taille de chaque pixel (via fonction DOT_PIXEL)
    let affiche_pixel;
    switch (taille_pixel) {
        case 1:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_1;
            break;

        case 2:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_2;
            break;

        case 3:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_3;
            break;

        case 4:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_4;
            break;

        default:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_1;
            break;
    }

    //Affichage des points 1 par 1
    for (let i = 0; i < nombre_occurence; i++) {
        if (liste_colors[Math.trunc(i / 100)][i % 100] != couleur_transparence) {
            LCD1IN8.DrawPoint(x_depart + (i % width) * taille_pixel, y_depart + Math.trunc(i / width) * taille_pixel,
                liste_colors[Math.trunc(i / 100)][i % 100], affiche_pixel);
        }
        else {
            LCD1IN8.DrawPoint(x_depart + (i % width) * taille_pixel, y_depart + Math.trunc(i / width) * taille_pixel,
                replace_color, affiche_pixel);
        }
    }

    //Rafraichissement de la partie de l'écran correspondant à la taille de l'image
    LCD1IN8.LCD_DisplayWindows(x_depart - taille_pixel, y_depart - taille_pixel,
        (width + 1) * taille_pixel, (height + 1) * taille_pixel);
}