import { Component } from '@angular/core';

@Component({
  selector: 'app-dd-rules',
  templateUrl: './dd-rules.component.html',
  styleUrls: ['./dd-rules.component.scss']
})
export class DdRulesComponent {
  public rules = [
// ennemis avec actions speciales et/ou capacités spéciales
// les ennemis peuvent fuir de temps en temps
// decrire le terrain et l'environnement pour interaction

//     }, {
//       title: '',
//       body: `Tomber à 0 points de vie<br>
//           - dégâts à l'armure : CA -2, doit passer 10 minutes à réparer<br>
//           - dégâts à l'arme : touché -2, doit passer 10 minutes à réparer<br>
//           - 1 niveau de fatigue<br>
//           - caractéristique réduite de 2, doit passer un repos long<br>
//           - perte de la moitié des dés de repos<br>
//     }
    {
      title: 'Roleplay & surprises',
      body: `Entre chaque round, possibilité de faire 1 minute de discussion tactique/métagame.
<br>
Aucune discussion au tour de chaque joueur.`
    }, {
      title: 'Personnages très inspirés',
      body: `Suppression de la limite de 1 point pour le "point d'inspiration".
<br>
Libérez votre créativité et votre ingéniosité.`
    }, {
      title: 'La mort reste un secret',
      body: `Les jets de sauvegarde contre la mort se font en secret.`
    }, {
      title: 'Boire une potion',
      body: `Boire une potion ne coûte qu'une action bonus, à la place de prendre l'action principale`
    }, {
      title: 'Action : Attaquer sur la défensive',
      body: `Idem que l'action "Esquiver", mais en pouvant attaquer avec un désavantage`
    }, {
      title: 'Action : Défense totale',
      body: `Idem que l'action "Esquiver", mais ajoute aussi +2 à la classe d'armure`
    }, {
      title: 'Lanceur de sort versatile',
      body: `Le personnage peut lancer 1 sort en dépensant 2 emplacements de niveau inférieur
<br>
<br>
Exemple : Lancer un sort de niveau 2 en dépensant 2 emplacement de sort niveau 1`
}, {
  title: 'Lanceur de sort protecteur',
  body: `Les sorts de protection / amélioration peuvent être lancés sur le "groupe" en dépensant un emplacement de sort d’un niveau +1
<br>
La durée du sort est divisée par le nombre de cible.<br>
<br>
Exemple : Le sort "protection-contre-une-energie" ou "amelioration-de-caracteristique"`
}, {
  title: 'Identification des objets magiques',
  body: `Il faut soit utiliser le sort identification,
<br>
soit expérimenter l'objet pour trouver ses fonctionnalités.`
    }, {
      title: 'Guérison naturelle',
      body: `Les joueurs ne regagnent pas TOUS leurs pv lors d'un repos long.
<br>
<br>
Ils doivent dépenser leurs dés de vies comme lors d'un repos court pour se soigner naturellement.`
    }, {
      title: 'Gain de niveau pour les points de vies',
      body: `
Pour le niveau 1, c'est le maximum sur le dé.
<br>
Ensuite pour chaque niveau :
<ul>
    <li>on lance le dé</li>
    <li>si le résultat ne plait pas :</li>
    <li style="list-style: none;">
    <ul>
        <li>soit on relance le dé</li>
        <li>soit on prend la moitié du maximum du dé</li>
    </ul>
    </li>
</ul>`
    }
  ];
}
