#Le fichier d'entrée doit s'appeler 'colors_in_RGB565.txt'
#Le fichier de sortie s'appelera 'encode_image_in_js.txt'

with open("colors_in_RGB565.txt", "r") as file:
    chaine = file.read()

liste = chaine.split(", ")

height = chaine.count("\n")+1 #Obtemption de la hauteur de l'image
width = len(liste) // height #Calcul de la largeur de l'image

colors_decimal = []

for i in liste:
    colors_decimal.append(int(i, 16))

fich = open("colors_in_decimal.txt", "w")
fich.write("[[")

for i in range(len(colors_decimal)):
    if i % 100 == 0 and i != 0:
        fich.write("], [")
        fich.write(str(colors_decimal[i]))
    elif i < len(colors_decimal)-1:
        fich.write(str(colors_decimal[i]) + ", ")

    elif i == len(colors_decimal)-1:
        fich.write(str(colors_decimal[i]))

fich.write("]]")
fich.close()

fichier = open("caracteristiques.txt", "w")

fichier.write("\nHauteur de l'image : " + str(height))
fichier.write("\nLargeur de l'image : " + str(width))
 	 
fichier.close()
