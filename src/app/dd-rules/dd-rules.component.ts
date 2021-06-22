import { Component } from '@angular/core';

@Component({
  selector: 'app-dd-rules',
  templateUrl: './dd-rules.component.html',
  styleUrls: ['./dd-rules.component.scss']
})
export class DdRulesComponent {
  public rules = [
    {
      title: 'Boire une potion',
      body: `Boire une potion ne coûte qu'une action bonus, à la place de prendre l'action principale`
    }, {
      title: 'Lanceur de sort versatile',
      body: `Le personnage peut lancer 1 sort en dépensant 2 emplacements de niveau inférieur
    <br><br>
    Exemple : Lancer un sort de niveau 2 en dépensant 2 emplacement de sort niveau 1`
    }, {
      title: 'Attaquer sur la défensive',
      body: `Permet de faire l'action "Esquiver", mais en pouvant attaquer avec un désavantage`
    }, {
      title: 'Défense totale',
      body: `En prenant l'action "Esquiver", ajoute +2 à la classe d'armure`
    }, {
      title: 'Guérison naturelle',
      body: `Les joueurs ne regagnent pas TOUS leurs pv lors d'un repos long.
<br><br>
Ils doivent dépenser leurs dés de vies comme lors d'un repos court pour se soigner naturellement.`
    }, {
      title: 'Gain de niveau',
      body: `Pour le gain de points de vie :
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
