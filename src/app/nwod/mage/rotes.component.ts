import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nwod-mage-rotes',
  templateUrl: './rotes.component.html',
  styleUrls: ['./rotes.component.scss']
})
export class NwodMageRotesComponent implements OnInit {
  public selectedOrder: string = '';
  public selectedArcana: string = '';

  public orders = [
    'Gardiens du voile',
    'Mysterium',
    'Echelle d\'argent',
    'Conseil Libre',
  ];
  public arcanas = [
    'Destin',
    'Espace',
    'Esprit',
    'Forces',
    'Matière',
    'Mort',
    'Prime',
    'Psyché',
    'Temps',
    'Vie'
  ];

  public spells = [];
  public allSpells = [
    {
      arcana: 'Mort 1',
      rote: '',
      description: 'Détermine les causes de la mort',
    }, {
      arcana: 'Mort 1',
      rote: 'Echelle d\'argent',
      description: 'Vision du mage',
    }, {
      arcana: 'Mort 1',
      rote: 'Gardiens du voile',
      description: 'Altère la forme d\'une ombre',
    }, {
      arcana: 'Mort 1',
      rote: '',
      description: 'Détecte les âmes dérangées (ex: paranoia)',
    }, {
      arcana: 'Mort 1',
      rote: 'Mysterium',
      description: 'Parler avec les morts',
      alreadyOwned: true,
    }, {
      arcana: 'Mort 2',
      rote: 'Mysterium',
      description: 'Anime les ombres, même sous la lumière',
      vulgar: true,
    }, {
      arcana: 'Mort 2',
      rote: 'Gardiens du voile',
      description: 'Masquer les causes de la mort',
    }, {
      arcana: 'Mort 2',
      rote: 'Gardiens du voile',
      description: 'Corroder, rouiller un objet',
      vulgar: true,
    }, {
      arcana: 'Mort 2',
      rote: '',
      description: 'Bouclier',
    }, {
      arcana: 'Mort 2',
      rote: 'Echelle d\'argent',
      description: 'Convocation de fantome',
    }, {
      arcana: 'Mort 2',
      rote: 'Echelle d\'argent',
      description: 'Créer une jarre, pour y accueilir une âme',
    }, {
      arcana: 'Mort 2',
      rote: 'Gardiens du voile / Mysterium',
      description: 'Supprime son aura',
    }, {
      arcana: 'Mort 2',
      rote: 'Mysterium',
      description: 'Interagir avec les fantomes et leur monde',
      vulgar: true,
    }, {
      arcana: 'Mort 3',
      rote: 'Echelle d\'argent / Mysterium',
      description: 'Donner un ordre à un fantome',
      vulgar: true,
    }, {
      arcana: 'Mort 3',
      rote: 'Gardiens du voile',
      description: 'Détruit un objet',
    }, {
      arcana: 'Mort 3',
      rote: 'Mysterium',
      description: 'Ouvre une porte vers le monde des fantomes',
      vulgar: true,
    }, {
      arcana: 'Mort 3',
      rote: 'Echelle d\'argent',
      description: 'Animer un cadavre #zombie',
      vulgar: true,
    }, {
      arcana: 'Mort 3',
      rote: '',
      description: 'Soigner les fantomes',
      vulgar: true,
    }, {
      arcana: 'Mort 3',
      rote: 'Gardiens du voile',
      description: 'Voler une âme',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Mort 3',
      rote: '',
      description: 'Invocation d\'ombres',
      vulgar: true,
    }, {
      arcana: 'Mort 3',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Supprime sa vie (temporairement)',
    }, {
      arcana: 'Mort 4',
      rote: 'Mysterium',
      description: 'Draine la force d\'une cible',
    }, {
      arcana: 'Mort 4',
      rote: '',
      description: 'Pourrie la chair de la cible (dégâts + malus sociaux)',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Mort 4',
      rote: '',
      description: 'Détruit son aura pour un moment',
    }, {
      arcana: 'Mort 4',
      rote: 'Mysterium',
      description: 'Se téléporte sans portail dans le monde des fantomes',
      costMana: true,
    }, {
      arcana: 'Mort 5',
      rote: '',
      description: 'Détruit la mana',
    }, {
      arcana: 'Mort 5',
      rote: 'Gardiens du voile',
      description: 'Contrecart un sort de nimporte quelle arcane',
    }, {
      arcana: 'Mort 5',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Améliorer un fantome',
      vulgar: true,
    }, {
      arcana: 'Mort 5',
      rote: 'Mysterium / Echelle d\'argent',
      description: 'Siphonner des années de vie',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Mort 5',
      rote: 'Mysterium / Echelle d\'argent',
      description: 'Invocation de fantome',
      vulgar: true,
    },
    {},
    {
      arcana: 'Destin 1', // Winds of Chance
      rote: 'Conseil Libre', // Wits + Subterfuge + Fate
      description: 'Attire un léger vent de chance',
    }, {
      arcana: 'Destin 1', // Quantum Flux
      rote: 'Mysterium',
      description: 'Réduit les malus en se concentrant',
    }, {
      arcana: 'Destin 1',
      rote: 'Mysterium / Gawain',
      description: 'Vision du mage',
      costReduced: true,
    }, {
      arcana: 'Destin 2', // Shifting the Odds
      rote: 'Conseil Libre', // Wits + Subterfuge + Fate
      description: 'Attire une bonne fortune',
      // Wits + Occult or Sci- ence + Fate
    }, {
      arcana: 'Destin 2',
      rote: '',
      description: 'Relance les dés sur 9+',
      costMana: true,
    },  {
      arcana: 'Destin 2',
      rote: 'Echelle d\'argent / Gardiens du voile',
      description: 'Donner des malus à une cible',
      costMana: true,
    },  {
      arcana: 'Destin 2',
      rote: 'Gardiens du voile',
      description: 'Bouclier',
    },  {
      arcana: 'Destin 3', // Bestow Exceptional Luck
      rote: 'Conseil Libre',
      description: 'Donner à quelqun la relance de dés sur 9+',
      costMana: true,
      // Manipulation + Persuasion + Fate
    },  {
      arcana: 'Destin 3',
      rote: 'Mysterium',
      description: 'Bonus d\'utilisation d\'objet',
    },  {
      arcana: 'Destin 3',
      rote: '',
      description: 'Malus d\'utilisation d\'objet',
    },  {
      arcana: 'Destin 3',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Cacher sa destinée',
    },  {
      arcana: 'Destin 3',
      rote: 'Echelle d\'argent',
      description: 'Relance les dés sur 8+',
      vulgar: true,
      costMana: true,
    },  {
      arcana: 'Destin 4',
      rote: 'Gardiens du voile',
      description: 'Détruit l\'attache d\'une âme',
      vulgar: true,
    },  {
      arcana: 'Destin 5',
      rote: 'Gardiens du voile / Mysterium',
      description: 'Se forger une destinée',
      costMana: true,
    },  {
      arcana: 'Destin 5',
      rote: '',
      description: 'Forger un destin funeste',
      vulgar: true,
      costMana: true,
    },  {
      arcana: 'Destin 5',
      rote: 'Mysterium',
      description: 'Protection divine',
      vulgar: true,
      costMana: true,
    },  {
      arcana: 'Destin 5',
      rote: '',
      description: 'Maudit la cible',
      vulgar: true,
      costMana: true,
    },
    {},
    {
      arcana: 'Forces 1',
      rote: 'Mysterium',
      description: 'Influencer la chaleur',
    }, {
      arcana: 'Forces 1',
      rote : 'Echelle d\'argent',
      description: 'Influencer la lumière',
    }, {
      arcana: 'Forces 1',
      rote : '',
      description: 'Vision dans le noir',
    }, {
      arcana: 'Forces 1',
      rote : 'Mysterium / Echelle d\'argent',
      description: 'Vision du mage',
      alreadyOwned: true,
    }, {
      arcana: 'Forces 1',
      rote : 'Gardiens du voile / Mysterium',
      description: 'Ecouter les hautes fréquences (comme les chien)',
    }, {
      arcana: 'Forces 1',
      rote : '',
      description: 'Ecouter les ondes radio',
    }, {
      arcana: 'Forces 2',
      rote : 'Mysterium',
      description: 'Controler la chaleur',
    }, {
      arcana: 'Forces 2',
      rote : 'Gardiens du voile',
      description: 'Controler la lumière',
    }, {
      arcana: 'Forces 2',
      rote : 'Echelle d\'argent',
      description: 'Controler le son',
    }, {
      arcana: 'Forces 2',
      rote : '',
      description: 'Influencer l\'electricité',
      vulgar: true,
    }, {
      arcana: 'Forces 2',
      rote : 'Gardiens du voile',
      description: 'Influencer le feu',
      vulgar: true,
    }, {
      arcana: 'Forces 2',
      rote : 'Gardiens du voile / Echelle d\'argent',
      description: 'Rendre invisible un objet',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 2',
      rote : '',
      description: 'Coup de poing kinetic à distance',
      vulgar: true,
    }, {
      arcana: 'Forces 2',
      rote : 'Mysterium / Gardiens du voile',
      description: 'Transmettre oralement sur une fréquence radio',
    }, {
      arcana: 'Forces 2',
      rote : '',
      description: 'Bouclier',
    }, {
      arcana: 'Forces 3',
      rote : 'Gardiens du voile',
      description: 'Appel la foudre et la fait s\'abatre sur une cible',
    }, {
      arcana: 'Forces 3',
      rote : 'Mysterium',
      description: 'Controler l\'electricité',
    }, {
      arcana: 'Forces 3',
      rote : '',
      description: 'Controler le feu',
    }, {
      arcana: 'Forces 3',
      rote : 'Mysterium',
      description: 'Créer de la lumière',
      vulgar: true,
    }, {
      arcana: 'Forces 3',
      rote : 'Gardiens du voile',
      description: 'Se rendre invisible',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 3',
      rote : 'Gardiens du voile',
      description: 'Créer un son ou un silence',
      vulgar: true,
    }, {
      arcana: 'Forces 3',
      rote : 'Echelle d\'argent',
      description: 'Bouger un objet par telekinesie',
      vulgar: true,
    }, {
      arcana: 'Forces 3',
      rote : '',
      description: 'Lancer une boule de Force telekinetic',
      vulgar: true,
    }, {
      arcana: 'Forces 3',
      rote : '',
      description: 'Redirige des projectiles rapide',
      vulgar: true,
    }, {
      arcana: 'Forces 4',
      rote : 'Gardiens du voile / Echelle d\'argent',
      description: 'Rendre quelqun invisible',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 4',
      rote : 'Mysterium / Gardiens du voile',
      description: 'Augmenter sa propre vitesse',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 4',
      rote : 'Mysterium',
      description: 'Modifier la météo',
    }, {
      arcana: 'Forces 4',
      rote : '',
      description: 'Controler la vélocité d\'un objet',
      vulgar: true,
    }, {
      arcana: 'Forces 4',
      rote : 'Echelle d\'argent',
      description: 'Augmente les forces de friction de l\'air afin de trancher quelqun',
      vulgar: true,
    }, {
      arcana: 'Forces 4',
      rote : 'Gardiens du voile',
      description: 'Lévitation',
      vulgar: true,
    }, {
      arcana: 'Forces 4',
      rote : '',
      description: 'Lancer des éclairs de ses mains',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 4',
      rote : 'Gardiens du voile',
      description: 'Transformer une énergie en une autre, comme du feu en électricité',
      vulgar: true,
    }, {
      arcana: 'Forces 4',
      rote : '',
      description: 'Soulever une cible vivante par telekinesie',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Gardiens du voile',
      description: 'Créer un changement de météo majeur, comme un tsunami ou une mousson',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Echelle d\'argent',
      description: 'Augmenter la vitesse de la cible',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Mysterium',
      description: 'Faire léviter un être vivant',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Gardiens du voile',
      description: 'Devient invisible, sans besoin de rester concentrer',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Mysterium',
      description: 'Contrôler la gravié',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Echelle d\'argent',
      description: 'Créer un mini-soleil',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Gardiens du voile',
      description: 'Créer un tremblement de terre',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Mysterium',
      description: 'Créer un EMP',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : '',
      description: 'Eradiquer les radiations',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Mysterium',
      description: 'Voler dans les airs comme superman',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Mysterium',
      description: 'Annuler la gravité',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : '',
      description: 'Créer des radiations',
      vulgar: true,
    }, {
      arcana: 'Forces 5',
      rote : 'Echelle d\'argent',
      description: 'Maitrise la vélocité environnante, peut arreter les balles comme dans matrix',
      vulgar: true,
    },
    {},
    {
      arcana: 'Vie 1',
      rote: 'Echelle d\'argent',
      description: 'Identifier une espèce',
    }, {
      arcana: 'Vie 1',
      rote: '',
      description: 'Purifier des drogues, toxines et poison',
    }, {
      arcana: 'Vie 1',
      rote: 'Gardiens du voile',
      description: 'Analyser l\'état de vie',
    }, {
      arcana: 'Vie 1',
      rote: 'Mysterium / Gawain',
      description: 'Vision du mage',
      costReduced: true,
      alreadyOwned: true,
    }, {
      arcana: 'Vie 1',
      rote: 'Mystetrium',
      description: 'Détecter la vie',
    }, {
      arcana: 'Vie 2',
      rote: '',
      description: 'Controler son corps : souffle, reflexes, matabolisme et coeur',
    }, {
      arcana: 'Vie 2',
      rote: 'Gardiens du voile',
      description: 'Soigner les animaux et plantes',
    }, {
      arcana: 'Vie 2',
      rote: 'Gardiens du voile / Mysterium',
      description: 'Bouclier',
    }, {
      arcana: 'Vie 2',
      rote: '',
      description: 'Transformer une plante en une autre',
      vulgar: true,
    }, {
      arcana: 'Vie 2',
      rote: 'Mysterium',
      description: 'Purifier une cible des drogues, toxines et poisons',
    }, {
      arcana: 'Vie 2',
      rote: '',
      description: 'Se soigner',
      costMana: true,
    }, {
      arcana: 'Vie 2',
      rote: 'Mysterium',
      description: 'Se purger des maladies',
    }, {
      arcana: 'Vie 2',
      rote: 'Mysterium',
      description: 'Améliorer une compétence physique',
      roll: 'Dextérité + Médecine + Vie',
    }, {
      arcana: 'Vie 3',
      rote: 'Mysterium',
      description: 'Purger les autres des maladies',
    }, {
      arcana: 'Vie 3',
      rote: 'Echelle d\'argent / Gardiens du voile',
      description: 'Donner un ordre à un animal',
    }, {
      arcana: 'Vie 3',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Soigner les autres',
      alreadyOwned: true,
      costMana: true,
    }, {
      arcana: 'Vie 3',
      rote: '',
      description: 'Améliorer ses attributs physique',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 3',
      rote: '',
      description: 'Transformer un animal en un autre',
      vulgar: true,
    }, {
      arcana: 'Vie 3',
      rote: '',
      description: 'Transformer des parties de son corps en plante ou animal',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 3',
      rote: 'Gardiens du voile',
      description: 'Transformer ses yeux, sa couleur de peau, de cheveux, ...',
      vulgar: true,
    }, {
      arcana: 'Vie 4',
      rote: '',
      description: 'Dégrader les attributs physique d\'une plante ou animal',
      vulgar: true,
    }, {
      arcana: 'Vie 4',
      rote: '',
      description: 'Déclenche une maladie',
      costMana: true,
    }, {
      arcana: 'Vie 4',
      rote: 'Gardiens du voile',
      description: 'Copie tout le physique de la cible (doppelganger)',
      vulgar: true,
    }, {
      arcana: 'Vie 4',
      rote: 'Echelle d\'argent',
      description: 'Dégrader les attributs physique d\'une personne',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 4',
      rote: '',
      description: 'Améliorer les attributs physique de la cible',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 4',
      rote: '',
      description: 'Attaque la force vitale de la cible',
      vulgar: true,
    }, {
      arcana: 'Vie 4',
      rote: 'Mysterium',
      description: 'Transformer les yeux, la couleur de peau, de cheveux, ... d\'une personne',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 4',
      rote: 'Echelle d\'argent',
      description: 'Améliorer plusieurs de ses attributs physique',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 5',
      rote: 'Gardiens du voile',
      description: 'Créer une forme de vie',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 5',
      rote: '',
      description: 'Changer une plante ou animal en humain',
      vulgar: true,
    }, {
      arcana: 'Vie 5',
      rote: 'Echelle d\'argent',
      description: 'Créer une bête mystique',
      vulgar: true,
    }, {
      arcana: 'Vie 5',
      rote: 'Echelle d\'argent / Gardiens du voile',
      description: 'Contrôle le corps de la cible',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 5',
      rote: '',
      description: 'Régénération',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Vie 5',
      rote: '',
      description: 'Dégrader plusieurs attributs physiques de la cible',
      vulgar: true,
    }, {
      arcana: 'Vie 5',
      rote: '',
      description: 'Améliorer plusieurs attribts physiques de la cible',
      vulgar: true,
      costMana: true,
    },
    {},
    {
      arcana: 'Matière 1',
      rote: '',
      description: 'Altérer la conductivité',
    }, {
      arcana: 'Matière 1',
      rote: 'Mysterium',
      description: 'Découvrir le mode de fonctionnement d\'un objet',
    }, {
      arcana: 'Matière 1',
      rote: 'Gardiens du voile',
      description: 'Vision du mage',
    }, {
      arcana: 'Matière 1',
      rote: 'Echelle d\'argent',
      description: 'Déetcter les substances',
      alreadyOwned: true,
    }, {
      arcana: 'Matière 1',
      rote: 'Mysterium',
      description: 'Trouver des compartiments secrets',
    }, {
      arcana: 'Matière 2',
      rote: '',
      description: 'Altérer la précision d\'un objet, il peut relancer les dés sur 9+',
      costMana: true,
    }, {
      arcana: 'Matière 2',
      rote: 'Mysterium',
      description: 'Faconner un liquide',
    }, {
      arcana: 'Matière 2',
      rote: 'Gardiens du voile',
      description: 'Transmuter un liquide en un autre',
      vulgar: true,
    }, {
      arcana: 'Matière 2',
      rote: 'Gardiens du voile',
      description: 'Rend transparent un objet',
      vulgar: true,
    }, {
      arcana: 'Matière 2',
      rote: 'Mysterium',
      description: 'Bouclier',
    }, {
      arcana: 'Matière 3',
      rote: 'Echelle d\'argent',
      description: 'Renforcer ou dégrader la durabilité d\'un objet',
      costMana: true,
    }, {
      arcana: 'Matière 3',
      rote: 'Gardiens du voile',
      description: 'Donner des bonus sur la prochaine action',
    }, {
      arcana: 'Matière 3',
      rote: 'Mysterium',
      description: 'Altère la substance d\'un objet, comme rendre une route "plastique"',
      vulgar: true,
    }, {
      arcana: 'Matière 3',
      rote: 'Mysterium',
      description: 'Réparer un objet',
    }, {
      arcana: 'Matière 3',
      rote: 'Echelle d\'argent',
      description: 'Transmuter un solide en un autre, comme du bois en pierre',
      vulgar: true,
    }, {
      arcana: 'Matière 4',
      rote: 'Gardiens du voile',
      description: 'Altérer l\'efficacité d\'un objet',
      costMana: true,
    }, {
      arcana: 'Matière 4',
      rote: '',
      description: 'Détruire une matière',
      vulgar: true,
    }, {
      arcana: 'Matière 4',
      rote: 'Echelle d\'argent',
      description: 'Transmuter ue liquide en solide et vice-versa',
      vulgar: true,
    }, {
      arcana: 'Matière 4',
      rote: 'Echelle d\'argent',
      description: 'Reconfigurer un objet, comme une batte de baseball en épée',
      vulgar: true,
    }, {
      arcana: 'Matière 4',
      rote: '',
      description: 'Altérer l\'air et les gaz',
    }, {
      arcana: 'Matière 4',
      rote: 'Mysterium',
      description: 'Transmuter un gaz en un autre, comme du gaz sarin en oxygène',
      vulgar: true,
    }, {
      arcana: 'Matière 4',
      rote: 'Gardiens du voile',
      description: 'Transmutter unue matière précieuse en une autre, comme de l\'or en bois',
      vulgar: true,
    }, {
      arcana: 'Matière 5',
      rote: '',
      description: 'Altérer la taille d\'un objet',
      vulgar: true,
    }, {
      arcana: 'Matière 5',
      rote: '',
      description: 'Détruit la matière, même magique',
      vulgar: true,
    }, {
      arcana: 'Matière 5',
      rote: 'Gardiens du voile',
      description: 'Transmuter les gaz en solide ou en liquide, vice-versa',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Matière 5',
      rote: 'Echelle d\'argent',
      description: 'Créer un objet à partir de rien',
      vulgar: true,
    }, {
      arcana: 'Matière 5',
      rote: 'Mysterium / Echelle d\'argent',
      description: 'Donne à un objet la capacité de se réparer tout seul',
      vulgar: true,
    },
    {},
    {
      arcana: 'Psyché 1',
      rote: 'Echelle d\'argent / Conseil Libre',
      description: 'Discener l\'état émotionnel d\'une personne',
    }, {
      arcana: 'Psyché 1',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Détecter les conciensce autour de soi',
      alreadyOwned: true,
    }, {
      arcana: 'Psyché 1', // Third Eye
      rote: 'Gardiens du voile / Conseil Libre',
      description: 'Vision du mage',
      alreadyOwned: true,
      // Wits + Empathy + Mind
    }, {
      arcana: 'Psyché 2',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Altérer son aura',
    }, {
      arcana: 'Psyché 2',
      rote: 'Echelle d\'argent',
      description: 'Manipuler l\'esprit d\'un animal',
    }, {
      arcana: 'Psyché 2',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Suggérer un état émotionnel',
    }, {
      arcana: 'Psyché 2',
      rote: 'Gardiens du voile',
      description: 'Présence incognito',
      alreadyOwned: true,
    }, {
      arcana: 'Psyché 2',
      rote: 'Echelle d\'argent',
      description: 'Bouclier mental',
    }, {
      arcana: 'Psyché 2',
      rote: '',
      description: 'Bouclier',
    }, {
      arcana: 'Psyché 3',
      rote: 'Gardiens du voile',
      description: 'Augmenter l\'une de ses capacité mentale ou sociale',
      costMana: true,
    }, {
      arcana: 'Psyché 3',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Altérer l\'aura d\'une autre personne',
    }, {
      arcana: 'Psyché 3',
      rote: 'Gardiens du voile',
      description: 'Faire croire à une personne que l\'on est une autre personne',
    }, {
      arcana: 'Psyché 3',
      rote: '',
      description: 'Assaut psychique',
      vulgar: true,
    }, {
      arcana: 'Psyché 3',
      rote: '',
      description: 'Parler par télépathie',
    }, {
      arcana: 'Psyché 4',
      rote: 'Echelle d\'argent',
      description: 'Augmenter une des capacité mentale ou sociale d\'une autre personne',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Psyché 4',
      rote: 'Echelle d\'argent',
      description: 'Dégrader une des capacité mentale ou sociale d\'une autre personne',
      costMana: true,
    }, {
      arcana: 'Psyché 4',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Altérer la mémoie d\'une personne',
    }, {
      arcana: 'Psyché 4',
      rote: 'Mysterium',
      description: 'Entrer dans le rêve de quelqun',
    }, {
      arcana: 'Psyché 4',
      rote: 'Gardiens du voile',
      description: 'Créer une hallucination sensitive',
    }, {
      arcana: 'Psyché 4',
      rote: 'Echelle d\'argent',
      description: 'Entrer dans la conscience de la cible',
    }, {
      arcana: 'Psyché 4',
      rote: 'Mysterium',
      description: 'Projeter son esprit dans le monde des fantomes',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Psyché 4',
      rote: 'Gardiens du voile',
      description: 'Assaut psychic supérieur (léthal)',
    }, {
      arcana: 'Psyché 4',
      rote: 'Mysterium',
      description: 'Augmenter plusieurs de ses attributs mentaux et sociaux',
      costMana: true,
    }, {
      arcana: 'Psyché 4',
      rote: 'Echelle d\'argent',
      description: 'Donne des ordres téléphatique à une personne',
      costMana: true,
    }, {
      arcana: 'Psyché 5',
      rote: '',
      description: 'Créer un canal multiple de téléphatie',
    }, {
      arcana: 'Psyché 5',
      rote: 'Echelle d\'argent',
      description: 'Prendre posssession d\'une personne',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Psyché 5',
      rote: 'Gardiens du voile',
      description: 'Créer une conscience',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Psyché 5',
      rote: 'Gardiens du voile',
      description: 'Reprogrammer psychiquement une personne',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Psyché 5',
      rote: 'Mysterium',
      description: 'Projeter sa conscience à travers le Gantelet',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Psyché 5',
      rote: '',
      description: 'Créer un temple psychique dans le monde des fantome',
      vulgar: true,
    },
    {},
    {
      arcana: 'Prime 1',
      rote: '',
      description: 'Analyser un enchantement'
    }, {
      arcana: 'Prime 1',
      rote: 'Echelle d\'argent',
      description: 'Percevoir les illusions',
    }, {
      arcana: 'Prime 1',
      rote: 'Gardiens du voile',
      description: 'Dissipation de la magie (il faut posséder l\'arcane à dissiper)',
      costMana: true,
    }, {
      arcana: 'Prime 1',
      rote: 'Echelle d\'argent',
      description: 'Inscription de routine dans un grimoire',
    }, {
      arcana: 'Prime 1',
      rote: 'Mysterium / Echelle d\'argent / Gawain',
      description: 'Vision du mage',
      costReduced: true,
      alreadyOwned: true,
    }, {
      arcana: 'Prime 2',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Contresort primaire',
      costMana: true,
    }, {
      arcana: 'Prime 2',
      rote: 'Echelle d\'argent',
      description: 'Bouclier',
      alreadyOwned: true,
    }, {
      arcana: 'Prime 2',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Tracer le cercle pour un duel magique',
      costMana: true,
    }, {
      arcana: 'Prime 2',
      rote: 'Gardiens du voile',
      description: 'Transformer son aura',
    }, {
      arcana: 'Prime 2',
      rote: 'Gardiens du voile',
      description: 'Se cacher des détection magiques',
    }, {
      arcana: 'Prime 3',
      rote: 'Gardiens du voile',
      description: 'Bouclier qui protège son âme',
    }, {
      arcana: 'Prime 3',
      rote: '',
      description: 'Attaque au feu céleste',
      vulgar: true,
    }, {
      arcana: 'Prime 3',
      rote: 'Echelle d\'argent',
      description: 'Canaliser du mana depuis une cible, comme une fontaine',
    }, {
      arcana: 'Prime 3',
      rote: '',
      description: 'Créer de la mana solide',
    }, {
      arcana: 'Prime 3',
      rote: 'Mysterium',
      description: 'Camoufler les auras magique',
    }, {
      arcana: 'Prime 3',
      rote: 'Gardiens du voile',
      description: 'Dissoudre la mana solide',
    }, {
      arcana: 'Prime 3',
      rote: 'Mysterium',
      description: 'Echanter un objet pour attaquer ou se défendre dans le monde des fantomes et des esprits',
      vulgar: true,
    }, {
      arcana: 'Prime 3',
      rote: 'Mysterium / Echelle d\'argent',
      description: 'Echanter un objet pour lui ajouter des pouvoirs magiques',
      costMana: true,
    }, {
      arcana: 'Prime 3',
      rote: 'Echelle d\'argent',
      description: 'Créer une illusion inanimée',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Prime 3',
      rote: '',
      description: 'Transformer l\'aura d\'une personne',
    }, {
      arcana: 'Prime 4',
      rote: 'Mysterium',
      description: 'Réveiller une fontainer de mana endormie',
      costMana: true,
    }, {
      arcana: 'Prime 4',
      rote: 'Echelle d\'argent',
      description: 'Créer une illusion qui peut faire des actions mondaines',
      vulgar: true,
    }, {
      arcana: 'Prime 4',
      rote: 'Gardiens du voile',
      description: 'Siphonner l\'essence d\'un esprit, fantome ou locus, en la transformant en mana',
      vulgar: true,
    }, {
      arcana: 'Prime 4',
      rote: 'Gardiens du voile',
      description: 'Dissipation suprème, sans avoir besoin de connaitre les arcanes',
    }, {
      arcana: 'Prime 4',
      rote: 'Gardiens du voile',
      description: 'Désactiver une fontaine de mana',
    }, {
      arcana: 'Prime 5',
      rote: 'Mysterium',
      description: 'Créer une illusion complexe, qui peut copier une personne',
      vulgar: true,
    }, {
      arcana: 'Prime 5',
      rote: 'Mysterium / Echelle d\'argent',
      vulgar: true,
      description: 'Créer une fontaine de mana',
      costMana: true,
    }, {
      arcana: 'Prime 5',
      rote: 'Gardiens du voile',
      description: 'Créer une zone d\'anti-magie',
      vulgar: true,
    }, {
      arcana: 'Prime 5',
      rote: 'Echelle d\'argent / Gardiens du voile',
      description: 'Siphonner la mana à distance',
      vulgar: true,
    },
    {},
    {
      arcana: 'Espace 1',
      rote: 'Gardiens du voile',
      description: 'Analyser les connections entre les objets, personnes, lieux',
    }, {
      arcana: 'Espace 1',
      rote: 'Mysterium',
      description: 'Trouver un objet proche',
    }, {
      arcana: 'Espace 1',
      rote: 'Gawain',
      description: 'Voir à 360°',
      costReduced: true,
    }, {
      arcana: 'Espace 1',
      rote: 'Echelle d\'argent / Mysterium',
      description: 'Vision du mage',
    }, {
      arcana: 'Espace 2',
      rote: 'Mysterium',
      description: 'Traverser un portail récemment créé',
      vulgar: true,
    }, {
      arcana: 'Espace 2',
      rote: 'Gardiens du voile / Mysterium',
      description: 'Voir à distance',
      alreadyOwned: true,
    }, {
      arcana: 'Espace 2',
      rote: 'Echelle d\'argent / Gawain',
      description: 'Bouclier',
      costReduced: true,
    }, {
      arcana: 'Espace 2',
      rote: 'Echelle d\'argent',
      description: 'Barrière magique contre l\'arcane d\'Espace',
    }, {
      arcana: 'Espace 3',
      rote: 'Echelle d\'argent / Gardiens du voile',
      description: 'Barrière magique améliorée, qui combinée avec une autre arcane, bloque ce qui y est lié, exemple avec Vie bloque les humains',
    }, {
      arcana: 'Espace 3',
      rote: '',
      description: 'Voir plusieurs endroits à distance en même temps',
    }, {
      arcana: 'Espace 3',
      rote: 'Mysterium / Echelle d\'argent',
      description: 'Créer un portail',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Espace 3',
      rote: '',
      description: 'Utiliser "Bagarre" à distance',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Espace 4',
      rote: 'Gardiens du voile',
      description: 'Être à 2 endroits en même temps',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Espace 4',
      rote: '',
      description: 'Cacher des objets dans un "sac sans fond"',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Espace 4',
      rote: 'Mysterium / Echelle d\'argent / Gawain',
      description: 'Se téléporte, sans portail',
      vulgar: true,
      costReduced: true,
      costMana: true,
    }, {
      arcana: 'Espace 5',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Cacher un lieu',
    }, {
      arcana: 'Espace 5',
      rote: 'Gardiens du voile',
      description: 'Transformer le lieu en labyrinthe',
      vulgar: true,
    },
    {},
    {
      arcana: 'Esprit 1',
      rote: 'Gardiens du voile / Mysterium',
      description: 'Détecter les esprits',
    }, {
      arcana: 'Esprit 1',
      rote: 'Echelle d\'argent / Mysterium',
      description: 'Vision du mage',
    }, {
      arcana: 'Esprit 1',
      rote: 'Mysterium / Echelle d\'argent',
      description: 'Parler aux esprits',
      alreadyOwned: true,
    }, {
      arcana: 'Esprit 2',
      rote: 'Gardiens du voile',
      description: 'Bouclier',
    }, {
      arcana: 'Esprit 2',
      rote: '',
      description: 'Peut physiquement interagir avec les esprits dans le monde des fantomes',
      vulgar: true,
    }, {
      arcana: 'Esprit 2',
      rote: 'Echelle d\'argent / Mysterium',
      description: 'Convocation d\'esprit',
    }, {
      arcana: 'Esprit 2',
      rote: 'Mysterium',
      description: 'Voir à travers le Gantelet',
    }, {
      arcana: 'Esprit 2',
      rote: 'Mysterium',
      description: 'Analyser un esprit pour connaitre ses forces / faiblesses / pouvoirs',
      roll: 'Intelligence + Occulte + Esprit',
      details: `
<ul>
  <li>1 = Rang + Influence majeure + ~Essence</li>
  <li>2 = Attributs + Influences</li>
  <li>3+ = Numina</li>
</ul>
      `,
    }, {
      arcana: 'Esprit 3',
      rote: 'Mysterium',
      description: 'Donner un ordre à un esprit',
    }, {
      arcana: 'Esprit 3',
      rote: 'Echelle d\'argent / Gardiens du voile',
      description: 'Convocation d\'esprit supérieur',
      vulgar: true,
    }, {
      arcana: 'Esprit 3',
      rote: 'Gardiens du voile',
      description: 'Endommager un esprit dans le monde des morts',
      vulgar: true,
    }, {
      arcana: 'Esprit 3',
      rote: 'Echelle d\'argent',
      description: 'Bouclier contre les pouvoirs des esprits',
    }, {
      arcana: 'Esprit 3',
      rote: 'Mysterium',
      description: 'Soigner un esprit',
      vulgar: true,
    }, {
      arcana: 'Esprit 3',
      rote: 'Gardiens du voile',
      description: 'Restaurer une âme perdue',
      vulgar: true,
    }, {
      arcana: 'Esprit 4',
      rote: 'Gardiens du voile / Mysterium',
      description: 'Créer un objet pour y stocker de l\'essence',
      costMana: true,
    }, {
      arcana: 'Esprit 4',
      rote: 'Mysterium',
      description: 'Canalise de l\'essence d\'une source vers une autre',
    }, {
      arcana: 'Esprit 4',
      rote: 'Mysterium',
      description: 'Appel un esprit gardien pour protéger le mage',
      vulgar: true,
    }, {
      arcana: 'Esprit 4',
      rote: 'Gardiens du voile',
      description: 'Controler la force du Gantelet',
      vulgar: true,
    }, {
      arcana: 'Esprit 5',
      rote: 'Echelle d\'argent',
      description: 'Créer une nouvelle lignée d\'esprit dont le mage en est le parent',
    }, {
      arcana: 'Esprit 5',
      rote: 'Mysterium',
      description: 'Créer un sanctuaire dans le monde des esprits',
      vulgar: true,
    },
    {},
    {
      arcana: 'Temps 1',
      rote: '',
      description: 'Effectue une action au moment parfait, bonus sur l\'action suivante',
      costMana: true,
    }, {
      arcana: 'Temps 1', // Temporal Eddies
      rote: 'Gawain / Conseil Libre',
      description: 'Vision du mage',
      costReduced: true,
      // Wits + Investigation + Time
    }, {
      arcana: 'Temps 2',
      rote: 'Echelle d\'argent / Gawain',
      description: 'Entrevoi un avenir potentiel',
      vulgar: true,
      costReduced: true,
      costMana: true,
    }, {
      arcana: 'Temps 2',
      rote: 'Conseil Libre',
      description: 'Regarde vers l\'avenir et entrevoie l\'issue d\'une action, avec 2 variables',
      costMana: true,
      // Wits + Investigation + Time
    }, {
      arcana: 'Temps 2',
      rote: 'Mysterium / Gardiens du voile',
      description: 'Voir ce qu\'il s\'est passé',
      alreadyOwned: true,
    }, {
      arcana: 'Temps 2',
      rote: 'Gardiens du voile / Echelle d\'argent',
      description: 'Bouclier',
    }, {
      arcana: 'Temps 3',
      rote: 'Gawain',
      description: 'Boost tes capacités de vitesse et d\'actions.',
      vulgar: true,
      costReduced: true,
      costMana: true,
    }, {
      arcana: 'Temps 3',
      rote: 'Gardiens du voile, Echelle d\'argent',
      description: 'Entrevoi un avenir potentiel, avec + de détails',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Temps 3',
      rote: 'Echelle d\'argent',
      description: 'Revenir 1 tour en arrière',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Temps 4',
      rote: 'Echelle d\'argent / Mysterium',
      description: 'Ralenti une personne (defense, vitesse, anticipation)',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Temps 4',
      rote: 'Echelle d\'argent',
      description: 'Prévoir le futur proche avec grande précision',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Temps 5',
      rote: '',
      description: 'Envoyer un objet dans le futur',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Temps 5',
      rote: 'Echelle d\'argent',
      description: 'Réécrire l\'histoire',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Temps 5',
      rote: '',
      description: 'Arrêt du temps',
      vulgar: true,
      costMana: true,
    },
    {},
    {
      arcana: 'Destin 1 + Espace 1 + Vie 1',
      rote: 'Gardiens du voile',
      description: 'Vise un être vivant à la perfection, quelque soit la distance',
      costMana: true,
    }, {
      arcana: 'Forces 3 + Psyché 1-5',
      rote: '',
      description: 'Créé un automate magique qui peut effectuer des actions magique de Force',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Forces 4 + Vie 4',
      rote: 'Mysterium',
      description: 'Se métamorpphoser en un être d\'énergie, comme un élémentaire de feu',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Matière 5 + Prime 3',
      rote: 'Echelle d\'argent',
      description: 'Créer la matière la plus précieuse au monde, à base d\'orichalque, de lunargent et de mercure, qui brille au contact de la magie',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Prime 2 + Espace 2',
      rote: '',
      description: 'Détecter toute utilisation de magie dans les environs',
      costMana: true,
    }, {
      arcana: 'Espace 2 + ARCANE',
      rote: '',
      description: 'Lancer un sort à distance',
      costMana: true,
    }, {
      arcana: 'Espace 5 + Forces 3 + Psyché 4 + Temps 4',
      rote: 'Mysterium, Gardiens du voile',
      description: 'Efface complétement une mémoire',
      vulgar: true,
      costMana: true,
    }, {
      arcana: 'Esprit 4 + Prime 4',
      rote: 'Mysterium',
      description: 'Converti de la mana en essence et peut la donner à un esprit',
      costMana: true,
    }, {
      arcana: 'X',
      rote: 'Artefact',
      description: 'Capacité étrange de l\'artefact, sans que cela déchire l\'âme du mage',
      costMana: true,
      alreadyOwned: true,
    }
  ];

  public ngOnInit(): void {
    this.spells = JSON.parse(JSON.stringify(this.allSpells));
  }

  public updateFilter(): void {
    this.spells = JSON.parse(JSON.stringify(this.allSpells));

    if (this.selectedOrder) {
      this.spells = this.spells.filter((spell) => {
        return spell.rote && (spell.rote.indexOf(this.selectedOrder) !== -1 || spell.rote.indexOf('Gawain') !== -1 || spell.rote.indexOf('Artefact') !== -1);
      });
    }

    if (this.selectedArcana) {
      this.spells = this.spells.filter((spell) => {
        return spell.arcana && (spell.arcana.indexOf(this.selectedArcana) !== -1 || spell.arcana === 'X');
      });
    }
  }
}
