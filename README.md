# FiveM Tablet Web Interface

Ce projet est une ressource FiveM qui vous permet d'afficher une interface utilisateur basée sur un navigateur dans un environnement de jeu. L'interface est conçue pour ressembler à une tablette affichant un site web.

## Installation

1. Clonez ce dépôt dans votre dossier `resources` de votre serveur FiveM.
2. Renommez le dossier cloné en `tablette` (si besoin).
3. Ajoutez `ensure tablette` à votre fichier `server.cfg`.

## Utilisation

Après avoir installé la ressource sur votre serveur, vous pouvez utiliser les commandes suivantes en jeu :

- `openUI` : Cette commande ouvre l'interface utilisateur de la tablette et charge l'URL spécifiée dans le fichier __index.html__.
- `closeUI` : Cette commande ferme l'interface utilisateur de la tablette (__La tablette peut être fermée en appuyant sur le bouton de fermeture__).

## Personnalisation

Vous pouvez personnaliser l'apparence de la tablette en modifiant les fichiers HTML, CSS et JavaScript dans le dossier `html`. Par exemple, vous pouvez changer l'image de la tablette en modifiant le chemin du fichier dans le fichier `index.html` et en ajustant les styles en conséquence dans le fichier `style.css`.
De plus, vous pouvez sélectionner le site à afficher en modifiant la ligne `<iframe id="website" src="URL_To_Change"></iframe>` avec l'URL souhaité (__Attention :__ Certains sites ne fonctionneront pas car ils sont protégés par leur politique de sécurité contre l'intégration de ces derniers dans une iframe.)

## Contribution

Si vous trouvez un bug ou si vous souhaitez ajouter une nouvelle fonctionnalité, n'hésitez pas à ouvrir une issue ou une pull request.
