# Pong avec une carte micro:bit

![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)


## Comment afficher une image

1. Créer un ficher avec une seule fonction dedans. (par convention, on appellera ce fichier du même nom que la fonction, et on nommera cette fonction "displayNomImage")
2. Cette fonction devra retourner plusieurs variables sous forme de pointeurs ( _'nom des variables'_ ) :      
`return { listOfColor: 'listeDesCouleurs', weidth: 'largeurImage' "number", height: 'hauteurImage', transparencyColor: 'couleurDeTransparence' };` (Tous les pointeurs doivent être de type `number` sauf la liste de couleurs qui doit être de type `number[]`)
3. Initialiser une variable à l'aide de la fonction correspondant à l'image (`let 'image' = display'NomImage'();`)
4. Appeler la fonction ci-après avec `x` et `y` respectivement l'absisse et l'ordonnée du point en haut à gauche du placement de l'image :
`displayImage(x, y, image.listOfColor, image.width, image.height, image.transparencyColor)` (Vous pouvez remplacer `image.transparencyColor` par `-1` si vous ne voulez pas utiliser de couleur de transparence)
 
5. Magie, l'image s'affiche toute seule !

> Crédit : Grégoire Lefaure et Maxime Dautriche


## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] On GitHub, create a new file named LICENSE. Select the MIT License template.
- [ ] Get your package reviewed and approved https://makecode.microbit.org/extensions/approval

Read more at https://makecode.microbit.org/extensions

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

