# Bee 🐝 Spider 🕷️

## Description
**Bug Emoji Picker** est une application web simple et interactive. Elle permet à l'utilisateur de choisir une espèce d'insecte/araignée (une abeille ou une araignée) depuis un menu déroulant, et met à jour instantanément l'émoji correspondant sur l'écran.

Ce projet met en pratique les concepts de la programmation orientée objet (POO) avec TypeScript, notamment l'utilisation de classes abstraites et du polymorphisme.

## Technologies utilisées
- **HTML5** : Pour la structure et les éléments de la page.
- **CSS3** : Pour un design moderne et épuré avec des effets de dégradés et de flou d'arrière-plan (Glassmorphism).
- **TypeScript** : Pour la logique métier globale, structurée et typée de manière stricte.
- **JavaScript (ES6)** : Généré automatiquement à partir de TypeScript pour être exécuté par le navigateur.

## Démo en ligne (Live Demo)
Vous pouvez tester l'application directement en ligne via GitHub Pages :
https://ennigro.github.io/Bee-Spider/

## Structure du projet
- `index.html` : La page principale contenant le formulaire de sélection.
- `styles.css` : Le fichier de styles pour l'apparence visuelle.
- `index.ts` : Le code source TypeScript contenant les classes `Bug`, `Bee` et `Spider`.
- `index.js` : Le fichier compilé nécessaire au fonctionnement du site dans le navigateur.

## Comment lancer le projet localement

1. Clonez ou téléchargez ce dépôt (repository) sur votre machine.
2. Assurez-vous d'avoir installé TypeScript globalement si vous souhaitez modifier la logique :
   ```bash
   npm install -g typescript
   tsc index.ts //Pour compiler le fichier TypeScript après une modification

3. Ouvrez simplement le fichier index.html dans votre navigateur pour voir le résultat.