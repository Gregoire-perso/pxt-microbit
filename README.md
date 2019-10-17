# Pong avec une carte micro:bit (BETA)

![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)


## Comment afficher une image

### Prérequis

1. Posséder une liste représentant la couleur de chaque pixel de l'image.
 - Pour ce faire, il suffit d'utiliser un logiciel (qui n'est pas encore sur le GitHub parce que je sais pas si on a vraiment les droits donc demandez moi directement...) qui transforme chaque pixel en une couleur 
 - Importer l'image, puis aller dans 'Option --> Conversion' (bien choisir la couleur en R5G3B5 au format 16 bits) et enfin cliquer sur "Show preview"
 - Copier / coller la liste incompréhensible qui s'affiche dans un fichier qui devra s'appeler 'colors_in_RGB565.txt'
 - Exécuter ensuite le fichier 'convertisseur.py' (trouvable dans ce GitHub :) )
 - Le fichier de sortie s'appellera 'colors_in_decimal.txt'
 
 ### Comment faire ?

1. Créer un ficher qui regroupera toutes les images d'une même familles (les différentes positions d'un même personnage par exemple). (par convention, on appellera ce fichier du même nom que la famille d'image (différentes positions de pikachu --> displayPikachu.ts), et on nommera cette fonction "display" suivi du nom de votre image en commançant par une majuscule)
2. Cette fonction devra retourner plusieurs variables sous forme de pointeurs ( _'nom des variables'_ ) :      
`return { listOfColor: 'listeDesCouleurs', width: 'largeurImage' "number", height: 'hauteurImage', transparencyColor: 'couleurDeTransparence', numberOfOccurence: 'nombreCouleur' };` (Tous les pointeurs doivent être de type `number` sauf la liste de couleurs qui doit être de type `number[][]`)
> Pour plus de détails sur ces arguements, se référer au fichier "displayPikachu", tout y est commenté ;)

3. Initialiser une variable à l'aide de la fonction correspondant à l'image (`let 'image' = displayVotreImage();`)
4. Appeler la fonction "displayImage()" avec `x` et `y` respectivement l'absisse et l'ordonnée du point en haut à gauche du placement de l'image (comme ci-après).
`displayImage(x, y, image.listOfColor, image.width, image.height, image.transparencyColor, image.numberOfOccurence)` (Vous pouvez remplacer `image.transparencyColor` par `-1` si vous ne voulez pas utiliser de couleur de transparence)
 
5. Magie, l'image s'affiche toute seule aux coordonnées que vous lui avez donnés !

> Crédit : Grégoire Lefaure et Maxime Dautriche


## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] On GitHub, create a new file named LICENSE. Select the MIT License template.


### Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

