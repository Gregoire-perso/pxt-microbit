function displayImage(x_depart: number, y_depart: number, taille_pixel: number,
    liste_colors: number[], width: number, height: number, couleur_transparence: number) {

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
    for (let i = 0; i < liste_colors.length; i++) {
        if (liste_colors[i] != couleur_transparence) {
            LCD1IN8.DrawPoint(x_depart + (i % width) * taille_pixel, y_depart + Math.trunc(i / width) * taille_pixel,
                liste_colors[i], affiche_pixel);
        }
    }

    //Rafraichissement de la partie de l'écran correspondant à la taille de l'image
    LCD1IN8.LCD_DisplayWindows(x_depart - taille_pixel, y_depart - taille_pixel,
        width * taille_pixel, height * taille_pixel);
}