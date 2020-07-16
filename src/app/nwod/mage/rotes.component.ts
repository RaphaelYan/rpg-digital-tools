import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nwod-mage-rotes',
  templateUrl: './rotes.component.html',
  styleUrls: ['./rotes.component.scss']
})
export class NwodMageRotesComponent implements OnInit {
  public selectedOrder: string = '';
  public selectedArcana: string = '';
  public rotes = {
    adamantine_arrow: {
      destin: {
      }, espace: {
      }, esprit: {
      }, forces: {
      }, matiere: {
      }, mort: {
      }, prime: {
      }, psyche: {
      }, temps: {
      }, vie: {
      }
    },

    free_council: {
      destin: {
        rotes_1: [
          {
            name: 'Flux quantique',
            roll: 'Astuce + Occulte + Destin',
            description: 'Lit les probabilités et mitige les actions imparfaites.<br>Réduit de 1 les malus d\'une action pour chaque tour de "concentration".',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Chance exceptionnelle',
            roll: 'Manipulation + Occulte + Destin',
            cost: '1 mana',
            description: 'Tu peux relancer les dés sur 9 à la place de 10',
            duration: 'Scène'
          }, {
            name: 'Protection de chance', // Fortune’s Protection
            roll: 'Résolution + Athlétisme + Destin',
            cost: '1 mana optionnel, pour faire durer 24h',
            description: 'Bouclier, tu évites les attaques au bon moment',
            duration: 'Scène'
          }
        ]
      }, espace: {
      }, esprit: {
      }, forces: {
      }, matiere: {
      }, mort: {
      }, prime: {
      }, psyche: {
      }, temps: {
        rotes_1: [
          {
            name: 'Tourbillons temporels', // Temporal Eddies
            roll: 'Astuce + Investigation + Temps',
            description: 'Vision du mage, détecte les influences de temps aux alentours',
            duration: 'Scène'
          }, {
            name: 'Timing parfait',
            roll: 'Intelligence + Calme + Temps',
            cost: '1 mana',
            description: 'Effectue une action au moment parfait, chaque succès sera un dé bonus sur l\'action suivante',
            duration: 'Réaction'
          }
        ], rotes_2: [
          {
            name: 'Pile ou face',
            roll: 'Astuce + Investigation + Temps',
            cost: '1 mana',
            description: 'Regarde vers l\'avenir et entrevoie l\'issue d\'une action, avec 2 variables',
            duration: 'Concentration'
          }, {
            name: 'Esquive temporelle',
            roll: 'Dextérité + Athlétisme + Temps',
            cost: '1 mana optionnel, pour faire durer 24h',
            description: 'Bouclier, manipule légèrement le temps autour de toi pour te protéger des attaques',
            duration: 'Scène'
          }
        ], rotes_3: [
          {
            name: 'Accélération', // Acceleration
            roll: 'Vigueur + Athlétisme + Temps',
            cost: 'VULGAIRE',
            description: 'Boost tes capacités de vitesse et d\'actions.<br>Donne un malus de {Temps} à tes attaquants, ajoute {Temps} initiative, multiplie ta vitesse par {Temps}',
            duration: 'Scène'
          }
        ]
      }, vie: {
        rotes_1: [
          {
            name: 'Pulsation de la vie', // Pulse of the Living World
            roll: 'Astuce + (Médecine ou Science) + Vie',
            description: 'Vision du mage, détecte les énergies vitales magiques',
            duration: 'Scène'
          }, {
            name: 'Pas de repos',
            roll: 'Résolution + Artisanat + Vie',
            description: 'Chaque succès permet de rester en forme 6H supplémentaires',
            duration: 'Maximum {Vigueur} ou {Résolution} Jours (le plus petit score)'
          }
        ]
      }
    },

    guardians_of_the__veil: {
      destin: {
      }, espace: {
        rotes_1: [
          {
            name: 'Correspondance',
            roll: 'Astuce + Occulte + Espace',
            description: 'Détecte les liens entre des objets, des gens, des lieux, ...',
            duration: 'Concentration'
          }
        ], rotes_2: [
          {
            name: 'Dissimuler les liens',
            roll: 'Calme + Subterfuge + Espace',
            description: 'Dégrade le lien du mage avec un objet, une personne, un lieu, ...',
            duration: 'Scène'
          }, {
            name: 'Scrutation',
            roll: 'Intelligence + Investigation + Espace',
            description: 'Regarder un lieu à distance',
            duration: 'Instantané'
          }
        ]
      }, esprit: {
      }, forces: {
      }, matiere: {
      }, mort: {
      }, prime: {
      }, psyche: {
        rotes_1: [
          {
            name: 'Détection de conscience',
            roll: 'Astuce + Empathie + Psyché',
            description: 'Détecte les présences pensante, bêtes, humains, esprits, etc. à portée sensorielle',
            duration: 'Scène'
          }, {
            name: 'Troisième oeil',
            roll: 'Astuce + Empathie + Psyché',
            description: 'Vision du mage, ressens l\'utilisation de capacités psychiques ainsi que l\'état émotionnel des gens',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Altération d\'aura',
            roll: 'Manipulation + Subterfuge + Psyché',
            description: 'Cache l\'émotion du mage pour en faire paraitre une autre',
            duration: 'Scène'
          }, {
            name: 'Urgence émotionnelle',
            roll: 'Astuce + Empathie + Psyché VS Calme + Gnose',
            description: 'Suggère fortement un état émotionnel',
            duration: 'Scène'
          }, {
            name: 'Présence incognito',
            roll: 'Astuce + Subterfuge + Psyché',
            description: 'Les gens ne portent aucune attention à toi et t\'oublient vite',
            duration: 'Scène'
          }, {
            name: 'Ouverture du troisième oeil',
            roll: 'Astuce + Persuasion + Psyché',
            description: 'Donne la vision du mage à quelqu\'un',
            duration: 'Scène'
          }
        ], rotes_3: [
          {
            name: 'Amélioration mentale',
            roll: 'Résolution + Erudition + Psyché',
            cost: '1 mana',
            description: 'Augmente un de tes attribut mental ou social, de X succès, maximum le rang en arcane Psyché',
            duration: 'Scène'
          }, {
            name: 'Altération d\'une autre aura',
            roll: 'Manipulation + Subterfuge + Psyché',
            description: 'Cache l\'émotion d\'une personne pour en faire paraitre une autre',
            duration: 'Scène'
          }, {
            name: 'Imposteur',
            roll: 'Intelligence + Subterfuge + Psyché vs. Calme + Gnose',
            description: 'Le mage modifie la perception que les autres ont de lui, chaque succès modifie un sens : la vue, le son, le touché, ...<br>Il peut donc se faire passer pour quelqu\'un d\'autre visuellement, avoir sa voix, ...',
            duration: 'Scène'
          }, {
            name: 'Mur mental',
            roll: 'Présence + Occulte + Psyché',
            description: 'Donne un bouclier de Psyché à une personne',
            duration: 'Scène'
          }, {
            name: 'Multi-Tasking',
            roll: 'Intelligence + Erudition + Psyché',
            description: 'Permet d\'executer plusieurs tâches mentales à la fois',
            duration: 'Scène'
          }
        ]
      }, temps: {
        rotes_1: [
          {
            name: 'Temporal Wrinkles',
            roll: 'Astuce + Occulte + Temps',
            description: 'Détecte les perturbations temporelles',
            duration: 'Scène'
          }
        ]
      }, vie: {
      }
    },

    mysterium: {
      destin: {
        rotes_1: [
          {
            name: 'Flux quantique',
            roll: 'Résolution + Occulte + Destin',
            description: 'Lit les probabilités et mitige les actions imparfaites.<br>Réduit de 1 les malus d\'une action pour chaque tour de "concentration".',
            duration: 'Scène'
          }, {
            name: 'Vision de la Sybile',
            roll: 'Astuce + Occulte + Destin',
            description: 'Vision du mage',
            duration: 'Scène'
          }
        ]
      }, espace: {
      }, esprit: {
        rotes_1: [
          {
            name: 'Oeil de l\'exorciste',
            roll: 'Astuce + Occulte + Esprit',
            description: 'Detecte la présence d\'esprits',
            duration: 'Concentration'
          }, {
            name: 'Double vue',
            roll: 'Astuce + Occulte + Esprit',
            description: 'Vision du mage, percoit la force du Gantelet',
            duration: 'Scène'
          }, {
            name: 'Langue des esprits',
            roll: 'Présence + Entregent + Esprit',
            description: 'Peut parler avec les esprits',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Lesser Spirit Summons',
            roll: 'Intelligence + Persuasion + Esprit',
            description: 'Lance un appel à un esprit spécifique ou à n\'importe qui',
            duration: 'Scène'
          }, {
            name: 'Voir à travers le gantelet',
            roll: 'Astuce + Occulte + Esprit',
            description: 'Voir à travers le gantelet (avec malus de la force du gantelet)',
            duration: 'Scène'
          }
        ], rotes_3: [
          {
            name: 'Contrôle d\'esprit',
            roll: 'Présence + Intimidation + Esprit',
            description: 'Donne un ordre simple (attaque, fui, ...)',
            duration: 'Scène'
          }, {
            name: 'Restauration du Corpus',
            roll: 'Résolution + Empathue + Esprit',
            cost: 'VULGAIRE',
            description: 'Soigne {Succès} Corpus à l\'esprit',
            duration: 'Instantané'
          }
        ]
      }, forces: {
      }, matiere: {
      }, mort: {
        rotes_1: [
          {
            name: 'Ectoplasmic Shaping',
            roll: 'Présence + Occulte + Mort vs. (Résolution + Gnose (mage) ou Résistance (fantome))',
            description: 'Altere la forme d\'un ectoplasme',
            duration: 'Scène'
          }, {
            name: 'Parler avec les morts',
            roll: 'Astuce + Occulte + Mort',
            description: 'Parler avec les morts',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Animation d\'ombres',
            roll: 'Astuce + Occulte + Mort',
            cost: 'VULGAIRE',
            description: 'Déplace une ombre, même sous une lumière',
            duration: 'Scène'
          }, {
            name: 'Suppression d\'aura',
            roll: 'Manipulation + Subterfuge + Mort',
            description: 'Chaque succès donne -1 pour percevoir l\'aura',
            duration: 'Scène'
          }, {
            name: 'Touché de la tombe',
            roll: 'Dextérité + Survie + Mort',
            description: 'Peut physiquement intéragir avec les fantômes et leur monde',
            duration: 'Scène'
          }
        ]
      }, prime: {
      }, psyche: {
      }, temps: {
      }, vie: {
        rotes_1: [
          {
            name: 'Pulsation de la vie',
            roll: 'Intelligence + (Médecine ou Science) + Vie',
            description: 'Vision du mage, détecte les énergies vitales magiques',
            duration: 'Scène'
          }, {
            name: 'Sentir la vie',
            roll: 'Astuce + (Médecine ou Survie) + Vie',
            description: 'Détecte les vivants à portée',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Résilience organique',
            roll: 'Résolution + Athletisme + Vie',
            cost: '1 mana optionnel, pour faire durer 24h',
            description: 'Bouclier qui protège',
            duration: 'Scène'
          }, {
            name: 'Purification du corps',
            roll: 'Intelligence + Médecine + Vie',
            description: 'Purifie des drogues, toxines, poisons',
            duration: 'Instantané'
          }, {
            name: 'Auto-purge',
            roll: 'Stamina + Médecine + Vie',
            description: 'Soigne les maladies du mage',
            duration: 'Rituel'
          }, {
            name: 'Visions du monde vivant',
            roll: 'Manipulation + (Animaux or Survie) + Vie',
            description: 'Donner la vision du mage',
            duration: 'Scène'
          }
        ], rotes_3: [
          {
            name: 'Banissement des maladies',
            roll: 'Astuce + Médecine + Vie',
            description: 'Soigne les maladies d\'une personne',
            duration: 'Rituel'
          }, {
            name: 'Guérison du coeur',
            roll: 'Calme + Médecine + Vie',
            cost: '1 mana',
            description: 'Soigne les blessures d\'une personne, 1 dégât contondant ou léthal par succès',
            duration: 'Instantané'
          }
        ], rotes_4: [
          {
            name: 'Visages multiples',
            roll: 'Changer l\'apparence physique d\'une personne',
            cost: 'VULGAIRE',
            description: 'Manipulation + Subterfuge + Vie',
            duration: 'Scène'
          }
        ]
      }
    },

    silver_ladder: {
      destin: {
      }, espace: {
      }, esprit: {
      }, forces: {
        rotes_1: [
          {
            name: 'Influencer la lumière',
            roll: 'Intelligence + (Occulte ou Science) + Forces',
            description: 'Redirige un flux de lumière',
            duration: 'Scène'
          }, {
            name: 'Influence le son',
            roll: 'Intelligence + (Occulte ou Science) + Forces',
            description: 'Redirige un flux de son',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Contrôler le son',
            roll: 'Intelligence + (Occulte ou Science) + Forces',
            description: 'Augmenter ou diminuer le son',
            duration: 'Scène'
          }, {
            name: 'Oeils de la Matrice',
            roll: 'Présence + Science + Forces',
            description: 'Vision du mage, détecte les énergies (chaleur, gravité, magnétisme, radiations, ...)<br>Ce sort peut être lancé sur une autre personne',
            duration: 'Scène'
          }, {
            name: 'Objet invisible',
            roll: 'Manipulation + Subterfuge + Forces',
            cost: '1 mana & VULGAIRE',
            description: 'Rend invisible un objet inanimé',
            duration: 'Scène'
          }
        ]
      }, matiere: {
        rotes_1: [
          {
            name: 'Detection de substance',
            roll: 'Astuce + Calme + Matière',
            description: 'Détecte les substances aux alentours (métal, eau, plastique, poudre, ...)',
            duration: 'Concentration'
          }
        ]
      }, mort: {
      }, prime: {
        rotes_1: [
          {
            name: 'Percer les illusions',
            roll: 'Astuce + Occulte + Prime',
            description: 'Détecte les illusions crées à partir de mana',
            duration: 'Concentration'
          }, {
            name: 'Inscription de Grimoire',
            roll: 'Intelligence + Expression + Prime',
            description: 'Oublie une routine pour l\'inscrire dans un grimoire, afin que d\'autres puissent l\'apprendre',
            duration: 'Rituel'
          }, {
            name: 'Vision céleste', // Supernal Vision
            roll: 'Astuce + Occulte + Prime',
            description: 'Vision du mage, détecte tout ce qui est lié à la magie',
            duration: 'Scène'
          }
        ], rotes_2: [
          {
            name: 'Contresort primaire',
            roll: 'Résolution + Occulte + Prime',
            cost: '1 mana',
            description: 'Peut contrer un sort de n\'importe quelle arcane', // Counterspell, p. 123
            duration: 'Instantané'
          }, {
            name: 'Bouclier magique', // Magic Shield
            roll: 'Résolution + Occulte + Prime',
            cost: '1 mana optionnel, pour faire durer 24h',
            description: 'Armure magique',
            duration: 'Scène'
          }, {
            name: 'Quadrature du cercle',
            roll: 'Résolution + Occulte + Prime',
            cost: '1 mana',
            description: 'Trace un espace où 2 mages peuvent effectuer un "duel d\'arcane"', // Duel Arcane,” p. 286
            duration: 'Scène'
          }
        ], rotes_3: [
          {
            name: 'Canalisation de mana',
            roll: 'Manipulation + Occulte + Prime',
            description: 'Siphonne {Succès} (max {Prime}) points de mana d\'une fontaine de mana, de mana solide ou d\'un objet magique',
            duration: 'Insantané'
          }, {
            name: 'Illusion',
            roll: 'Intelligence + Artisanat + Prime',
            cost: '1 mana & VULGAIRE',
            description: 'Créé une illusion solide (mais fragile) inanimée, qui peut aller jusqu\'à une taille humaine',
            duration: 'Scène'
          }
        ]
      }, psyche: {
      }, temps: {
      }, vie: {
      }
    }
  };

  public orders = [
    // 'Flèche d\'adamantine',
    // 'Conseil libre',
    'Gardiens du voile',
    'Mysterium',
    'Echelle d\'argent',
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
  public arrayOfFive = [1, 2, 3, 4, 5];

  public spells = [];
  public allSpells = [
    [
      'Mort 1',
      '',
      'Détermine les causes de la mort',
    ], [
      'Mort 1',
      'Echelle d\'argent',
      'Vision du mage',
    ], [
      'Mort 1',
      'Gardiens du voile',
      'Altère la forme d\'une ombre',
    ], [
      'Mort 1',
      '',
      'Détecte les âmes dérangées (ex: paranoia)',
    ], [
      'Mort 1',
      'Mysterium',
      'Parler avec les morts',
    ], [
      'Mort 2',
      'Mysterium',
      'Anime les ombres, même sous la lumière',
    ], [
      'Mort 2',
      'Gardiens du voile',
      'Masquer les causes de la mort',
    ], [
      'Mort 2',
      'Gardiens du voile',
      'Corroderr, rouiller un objet',
    ], [
      'Mort 2',
      '',
      'Bouclier',
    ], [
      'Mort 2',
      'Echelle d\'argent',
      'Convocation de fantome',
    ], [
      'Mort 2',
      'Echelle d\'argent',
      'Créer une jarre, pour y accueilir une âme',
    ], [
      'Mort 2',
      'Gardiens du voile / Mysterium',
      'Supprime son aura',
    ], [
      'Mort 2',
      'Mysterium',
      'Interagir avec les fantomes et leur monde',
    ], [
      'Mort 3',
      'Echelle d\'argent / Mysterium',
      'Donner un ordre à un fantome',
    ], [
      'Mort 3',
      'Gardiens du voile',
      'Détruit un objet',
    ], [
      'Mort 3',
      'Mysterium',
      'Ouvre une porte vers le monde des fantomes',
    ], [
      'Mort 3',
      'Echelle d\'argent',
      'Animer un cadavre #zombie',
    ], [
      'Mort 3',
      '',
      'Soigner les fanttomes',
    ], [
      'Mort 3',
      'Gardiens du voile',
      'Voler une âme',
    ], [
      'Mort 3',
      '',
      'Invocation d\'ombres',
    ], [
      'Mort 3',
      'Gardiens du voile / Echelle d\'argent',
      'Supprime sa vie (temporairement)',
    ], [
      'Mort 4',
      'Mysterium',
      'Draine la force d\'une cible',
    ], [
      'Mort 4',
      '',
      'Pourrie la chair de la cible (dégâts + malus sociaux)',
    ], [
      'Mort 4',
      '',
      'Détruit son aura pour un moment',
    ], [
      'Mort 4',
      'Mysterium',
      'Se téléporte sans portail dans le monde des fantomes',
    ], [
      'Mort 5',
      '',
      'Détruit la mana',
    ], [
      'Mort 5',
      'Gardiens du voile',
      'Contrecart un sort de nimporte quelle arcane',
    ], [
      'Mort 5',
      'Mysterium / Gardiens du voile',
      'Améliorer un fantome',
    ], [
      'Mort 5',
      'Mysterium / Echelle d\'argent',
      'Siphonner des années de vie',
    ], [
      'Mort 5',
      'Mysterium / Echelle d\'argent',
      'Invocation de fantome',
    ],
    ['SEPARATOR'],
    [
      'Destin 1',
      'Mysterium',
      'Réduit les malus en se concentrant',
    ], [
      'Destin 1',
      'Mysterium',
      'Vision du mage',
    ], [
      'Destin 2',
      '',
      'Relance les dés sur 9+',
    ], [
      'Destin 2',
      'Echelle d\'argent / Gardiens du voile',
      'Donner des malus à une cible',
    ], [
      'Destin 2',
      'Gardiens du voile',
      'Bouclier',
    ], [
      'Destin 3',
      '',
      'Donner à qulqun la rrelance de dés sur 9+',
    ], [
      'Destin 3',
      'Mysterium',
      'Bonus d\'utilisation d\'objet',
    ], [
      'Destin 3',
      '',
      'Malus d\'utilisation d\'objet',
    ], [
      'Destin 3',
      'Gardiens du voile / Echelle d\'argent',
      'Cacher sa destinée',
    ], [
      'Destin 3',
      'Echelle d\'argent',
      'Relance les dés sur 8+',
    ], [
      'Destin 4',
      'Gardiens du voile',
      'Détruit l\'attache d\'une âme',
    ], [
      'Destin 5',
      'Gardiens du voile / Mysterium',
      'Se forger une destinée',
    ], [
      'Destin 5',
      '',
      'Forger un destin funeste',
    ], [
      'Destin 5',
      'Mysterium',
      'Protection divine',
    ], [
      'Destin 5',
      '',
      'Maudit la cible',
    ],

    ['SEPARATOR'],
    [
      'Forces 1',
      'Mysterium',
      'Influencer la chaleur',
    ], [
      'Forces 1',
      'Echelle d\'argent',
      'Influencer la lumière',
    ], [
      'Forces 1',
      '',
      'Vision dans le noir',
    ], [
      'Forces 1',
      'Mysterium',
      'Vision du mage',
    ], [
      'Forces 1',
      'Gardiens du voile / Mysterium',
      'Ecouter les hautes fréquences (comme les chien)',
    ], [
      'Forces 1',
      '',
      'Ecouter les ondes radio',
    ], [
      'Forces 2',
      'Mysterium',
      'Controler la chaleur',
    ], [
      'Forces 2',
      'Gardiens du voile',
      'Controler la lumière',
    ], [
      'Forces 2',
      'Echelle d\'argent',
      'Controler le son',
    ], [
      'Forces 2',
      '',
      'Influencer l\'electricité',
    ], [
      'Forces 2',
      'Gardiens du voile',
      'Influencer le feu',
    ], [
      'Forces 2',
      'Gardiens du voile / Echelle d\'argent',
      'Rendre invisible un objet',
    ], [
      'Forces 2',
      '',
      'Coup de poing kinetic à distance',
    ], [
      'Forces 2',
      'Mysterium / Gardiens du voile',
      'Transmettre oralement sur une fréquence radio',
    ], [
      'Forces 2',
      '',
      'Bouclier',
    ], [
      'Forces 3',
      'Gardiens du voile',
      'Appel la foudre et la fait s\'abatre sur une cible',
    ], [
      'Forces 3',
      'Mysterium',
      'Controler l\'electricité',
    ], [
      'Forces 3',
      '',
      'Controler le feu',
    ], [
      'Forces 3',
      'Mysterium',
      'Créer de la lumière',
    ], [
      'Forces 3',
      'Gardiens du voile',
      'Se rendre invisible',
    ], [
      'Forces 3',
      'Gardiens du voile',
      'Créer un son ou un silence',
    ], [
      'Forces 3',
      'Echelle d\'argent',
      'Bouger un objet par telekinesie',
    ], [
      'Forces 3',
      '',
      'Lancer une boule de Force telekinetic',
    ], [
      'Forces 3',
      '',
      'Redirige des projectiles rapide',
    ], [
      'Forces 4',
      'Gardiens du voile / Echelle d\'argent',
      'Rendre quelqun invisible',
    ], [
      'Forces 4',
      'Mysterium / Gardiens du voile',
      'Augmenter sa propre vitesse',
    ], [
      'Forces 4',
      'Mysterium',
      'Modifier la météo',
    ], [
      'Forces 4',
      '',
      'Controler la vélocité d\'un objet',
    ], [
      'Forces 4',
      'Echelle d\'argent',
      'Augmente les forces de friction de l\'air afin de trancher quelqun',
    ], [
      'Forces 4',
      'Gardiens du voile',
      'Lévitation',
    ], [
      'Forces 4',
      '',
      'Lancer des éclairs de ses mains',
    ], [
      'Forces 4',
      'Gardiens du voile',
      'Transformer une énergie en une autre, comme du feu en électricité',
    ], [
      'Forces 4',
      '',
      'Soulever une cible vivante par telekinesie',
    ], [
      'Forces 5',
      'Gardiens du voile',
      'Créer un changement de météo majeur, comme un tsunami ou une mousson',
    ], [
      'Forces 5',
      'Echelle d\'argent',
      'Augmenter la vitesse de la cible',
    ], [
      'Forces 5',
      'Mysterium',
      'Faire léviter un être vivant',
    ], [
      'Forces 5',
      'Gardiens du voile',
      'Devient invisible, sans besoin de rester concentrer',
    ], [
      'Forces 5',
      'Mysterium',
      'Contrôler la gravié',
    ], [
      'Forces 5',
      'Echelle d\'argent',
      'Créer un mini-soleil',
    ], [
      'Forces 5',
      'Gardiens du voile',
      'Créer un tremblement de terre',
    ], [
      'Forces 5',
      'Mysterium',
      'Créer un EMP',
    ], [
      'Forces 5',
      '',
      'Eradiquer les radiations',
    ], [
      'Forces 5',
      'Mysterium',
      'Voler dans les airs comme superman',
    ], [
      'Forces 5',
      'Mysterium',
      'Annuler la gravité',
    ], [
      'Forces 5',
      '',
      'Créer des radiations',
    ], [
      'Forces 5',
      'Echelle d\'argent',
      'Maitrise la vélocité environnante, peut arreter les balles comme dans matrix',
    ],

    ['SEPARATOR'],
    [
      'Vie 1',
      'Echelle d\'argent',
      'Identifier une espèce',
    ], [
      'Vie 1',
      '',
      'Purifier des drogues, toxines et poison',
    ], [
      'Vie 1',
      'Gardiens du voile',
      'Analyser l\'état de vie',
    ], [
      'Vie 1',
      'Mysterium',
      'Vision du mage',
    ], [
      'Vie 1',
      'Mystetrium',
      'Détecter la vie',
    ], [
      'Vie 2',
      '',
      'Controler son corps : souffle, reflexes, matabolisme et coeur',
    ], [
      'Vie 2',
      'Gardiens du voile',
      'Soigner les animaux et plantes',
    ], [
      'Vie 2',
      'Gardiens du voile / Mysterium',
      'Bouclier',
    ], [
      'Vie 2',
      '',
      'Transformer une plante en une autre',
    ], [
      'Vie 2',
      'Mysterium',
      'Puurifier une cible des drogues, toxines et poisons',
    ], [
      'Vie 2',
      '',
      'Se soigner',
    ], [
      'Vie 2',
      'Mysterium',
      'Se purger des maladies',
    ], [
      'Vie 3',
      'Mysterium',
      'Purger les autres des maladies',
    ], [
      'Vie 3',
      'Echelle d\'argent / Gardiens du voile',
      'Donner un ordre à un animal',
    ], [
      'Vie 3',
      'Mysterium / Gardiens du voile',
      'Soigner les autres',
    ], [
      'Vie 3',
      '',
      'Améliorer ses attributs physique',
    ], [
      'Vie 3',
      '',
      'Transformer un animal en un autre',
    ], [
      'Vie 3',
      '',
      'Transformer des parties de son corps en plante ou animal',
    ], [
      'Vie 3',
      'Gardiens du voile',
      'Transformer ses yeux, sa couleur de peau, de cheveux, ...',
    ], [
      'Vie 4',
      '',
      'Dégrader les attributs physique d\'une plante ou animal',
    ], [
      'Vie 4',
      '',
      'Déclenche une maladie',
    ], [
      'Vie 4',
      'Gardiens du voile',
      'Copie tout le physique de la cible (doppelganger)',
    ], [
      'Vie 4',
      'Echelle d\'argent',
      'Dégrader les attributs physique d\'une personne',
    ], [
      'Vie 4',
      '',
      'Améliorer les attributs physique de la cible',
    ], [
      'Vie 4',
      '',
      'Attaque la force vitale de la cible',
    ], [
      'Vie 4',
      'Mysterium',
      'Transformer les yeux, la couleur de peau, de cheveux, ... d\'une personne',
    ], [
      'Vie 4',
      'Echelle d\'argent',
      'Améliorer plusieurs de ses attributs physique',
    ], [
      'Vie 5',
      'Gardiens du voile',
      'Créer une forme de vie',
    ], [
      'Vie 5',
      '',
      'Changer une plante ou animal en humain',
    ], [
      'Vie 5',
      'Echelle d\'argent',
      'Créer une bête mystique',
    ], [
      'Vie 5',
      'Echelle d\'argent / Gardiens du voile',
      'Contrôle le corps de la cible',
    ], [
      'Vie 5',
      '',
      'Régénération',
    ], [
      'Vie 5',
      '',
      'Dégrader plusieurs attributs physiques de la cible',
    ], [
      'Vie 5',
      '',
      'Améliorer plusieurs attribts physiques de la cible',
    ],

    ['SEPARATOR'],
    [
      'Matière 1',
      '',
      'Altérer la conductivité',
    ], [
      'Matière 1',
      'Mysterium',
      'Découvrir le mode de fonctionnement d\'un objet',
    ], [
      'Matière 1',
      'Gardiens du voile',
      'Vision du mage',
    ], [
      'Matière 1',
      'Echelle d\'argent',
      'Déetcter les substances',
    ], [
      'Matière 1',
      'Mysterium',
      'Trouver des compartiments secrets',
    ], [
      'Matière 2',
      '',
      'Altérer la précision d\'un objet, il peut relancer les dés sur 9+',
    ], [
      'Matière 2',
      'Mysterium',
      'Faconner un liquide',
    ], [
      'Matière 2',
      'Gardiens du voile',
      'Transmuter un liquide en un autre',
    ], [
      'Matière 2',
      'Gardiens du voile',
      'Rend transparent un objet',
    ], [
      'Matière 2',
      'Mysterium',
      'Bouclier',
    ], [
      'Matière 3',
      'Echelle d\'argent',
      'Renforcer ou dégrader la durabilité d\'un objet',
    ], [
      'Matière 3',
      'Gardiens du voile',
      'Donner des bonus sur la prochaine action',
    ], [
      'Matière 3',
      'Mysterium',
      'Altère la substance d\'un objet, comme rende une route "plastique"',
    ], [
      'Matière 3',
      'Mysterium',
      'Réparer un objet',
    ], [
      'Matière 3',
      'Echelle d\'argent',
      'Transmuter un solide en un autre, comme du bois en pierre',
    ], [
      'Matière 4',
      'Gardiens du voile',
      'Altérer l\'efficacité d\'un objet',
    ], [
      'Matière 4',
      '',
      'Détruire une matière',
    ], [
      'Matière 4',
      'Echelle d\'argent',
      'Transmuter ue liquide en solide et vice-versa',
    ], [
      'Matière 4',
      'Echelle d\'argent',
      'Reconfigurer un objet, comme une batte de baseball en épée',
    ], [
      'Matière 4',
      '',
      'Altérer l\'air et les gaz',
    ], [
      'Matière 4',
      'Mysterium',
      'Transmuter un gaz en un autre, comme du gaz sarin en oxygène',
    ], [
      'Matière 4',
      'Gardiens du voile',
      'Transmutter unue matière précieuse en une autre, comme de l\'or en bois',
    ], [
      'Matière 5',
      '',
      'Altérer la taille d\'un objet',
    ], [
      'Matière 5',
      '',
      'Détruit la matière, même magique',
    ], [
      'Matière 5',
      'Gardiens du voile',
      'Transmuter les gaz en solide ou en liquide, vice-versa',
    ], [
      'Matière 5',
      'Echelle d\'argent',
      'Créer un objet à partir de rien',
    ], [
      'Matière 5',
      'Mysterium / Echelle d\'argent',
      'Donne à un objet la capacité de se réparer tout seul',
    ],

    [
      'Psyché 1',
      'Echelle d\'argent',
      'Discener l\'état émotionnel d\'une personne',
    ], [
      'Psyché 1',
      'Mysterium / Gardiens du voile',
      'Détecter les conciensce autour de soi',
    ], [
      'Psyché 1',
      'Gardiens du voile',
      'Vision du mage',
    ], [
      'Psyché 2',
      'Gardiens du voile / Echelle d\'argent',
      'Altérer son aura',
    ], [
      'Psyché 2',
      'Echelle d\'argent',
      'Manipuler l\'esprit d\'un animal',
    ], [
      'Psyché 2',
      'Mysterium / Gardiens du voile',
      'Suggérer un état émotionnel',
    ], [
      'Psyché 2',
      'Gardiens du voile',
      'Présence incognito',
    ], [
      'Psyché 2',
      'Echelle d\'argent',
      'Bouclier mental',
    ], [
      'Psyché 2',
      '',
      'Bouclier',
    ], [
      'Psyché 3',
      'Gardiens du voile',
      'Augmenter l\'une de ses capacité mentale ou sociale',
    ], [
      'Psyché 3',
      'Mysterium / Gardiens du voile',
      'Altérer l\'aura d\'une autre personne',
    ], [
      'Psyché 3',
      'Gardiens du voile',
      'Faire croire à une personne que l\'on est une autre personne',
    ], [
      'Psyché 3',
      '',
      'Assaut psychique',
    ], [
      'Psyché 3',
      '',
      'Parler par télépathie',
    ], [
      'Psyché 4',
      'Echelle d\'argent',
      'Augmenter une des capacité mentale ou sociale d\'une autre personne',
    ], [
      'Psyché 4',
      'Echelle d\'argent',
      'Dégrader une des capacité mentale ou sociale d\'une autre personne',
    ], [
      'Psyché 4',
      'Gardiens du voile / Echelle d\'argent',
      'Altérer la mémoie d\'une personne',
    ], [
      'Psyché 4',
      'Mysterium',
      'Entrer dans le rêve de quelqun',
    ], [
      'Psyché 4',
      'Gardiens du voile',
      'Créer une hallucination sensitive',
    ], [
      'Psyché 4',
      'Echelle d\'argent',
      'Entrer dans la conscience de la cible',
    ], [
      'Psyché 4',
      'Mysterium',
      'Projeter son esprit dans le monde des fantomes',
    ], [
      'Psyché 4',
      'Gardiens du voile',
      'Assaut psychic supérieur (léthal)',
    ], [
      'Psyché 4',
      'Mysterium',
      'Augmenter plusieurs de ses attributs mentaux et sociaux',
    ], [
      'Psyché 4',
      'Echelle d\'argent',
      'Donne des ordres téléphatique à une personne',
    ], [
      'Psyché 5',
      '',
      'Créer un canal multiple de téléphatie',
    ], [
      'Psyché 5',
      'Echelle d\'argent',
      'Prendre posssession d\'une personne',
    ], [
      'Psyché 5',
      'Gardiens du voile',
      'Créer une conscience',
    ], [
      'Psyché 5',
      'Gardiens du voile',
      'Reprogrammer psychiquement une personne',
    ], [
      'Psyché 5',
      'Mysterium',
      'Projeter sa conscience à travers le Gantelet',
    ], [
      'Psyché 5',
      '',
      'Créer un temple psychique dans le monde des fantome',
    ],

    ['SEPARATOR'],
    [
      'Prime 1',
      '',
      'Analyser un enchantement',
    ], [
      'Prime 1',
      'Echelle d\'argent',
      'Percevoir les illusions',
    ], [
      'Prime 1',
      'Gardiens du voile',
      'Dissipation de la magie (il faut posséder l\'arcane à dissiper)',
    ], [
      'Prime 1',
      'Echelle d\'argent',
      'Inscription de routine dans un grimoire',
    ], [
      'Prime 1',
      'Mysterium / Echelle d\'argent',
      'Vision du mage',
    ], [
      'Prime 2',
      'Gardiens du voile / Echelle d\'argent',
      'Contresort primaire',
    ], [
      'Prime 2',
      'Echelle d\'argent',
      'Bouclier',
    ], [
      'Prime 2',
      'Gardiens du voile / Echelle d\'argent',
      'Tracer le cercle pour un duel magique',
    ], [
      'Prime 2',
      'Gardiens du voile',
      'Transformer son aura',
    ], [
      'Prime 2',
      'Gardiens du voile',
      'Se cacher des détection magiques',
    ], [
      'Prime 3',
      'Gardiens du voile',
      'Bouclier qui protège son âme',
    ], [
      'Prime 3',
      '',
      'Attaque au feu céleste',
    ], [
      'Prime 3',
      'Echelle d\'argent',
      'Canaliser du mana depuis une cible, comme une fontaine',
    ], [
      'Prime 3',
      '',
      'Créer de la mana solide',
    ], [
      'Prime 3',
      'Mysterium',
      'Camoufler les auras magique',
    ], [
      'Prime 3',
      'Gardiens du voile',
      'Dissoudre la mana solide',
    ], [
      'Prime 3',
      'Mysterium',
      'Echanter un objet pour attaquer ou se défendre dans le monde des fantomes et des esprits',
    ], [
      'Prime 3',
      'Mysterium / Echelle d\'argent',
      'Echanter un objet pour lui ajouter des pouvoirs magiques',
    ], [
      'Prime 3',
      'Echelle d\'argent',
      'Créer une illusion inanimée',
    ], [
      'Prime 3',
      '',
      'Transformer l\'aura d\'une personne',
    ], [
      'Prime 4',
      'Mysterium',
      'Réveiller une fontainer de mana endormie',
    ], [
      'Prime 4',
      'Echelle d\'argent',
      'Créer une illusion qui peut faire des actions mondaines',
    ], [
      'Prime 4',
      'Gardiens du voile',
      'Siphonner l\'essence d\'un esprit, fantome ou locus, en la transformant en mana',
    ], [
      'Prime 4',
      'Gardiens du voile',
      'Dissipation suprème, sans avoir besoin de connaitre les arcanes',
    ], [
      'Prime 4',
      'Gardiens du voile',
      'Désactiver une fontaine de mana',
    ], [
      'Prime 5',
      'Mysterium',
      'Créer une illusion complexe, qui peut copier une personne',
    ], [
      'Prime 5',
      'Mysterium / Echelle d\'argent',
      'Créer une fontaine de mana',
    ], [
      'Prime 5',
      'Gardiens du voile',
      'Créer une zone d\'anti-magie',
    ], [
      'Prime 5',
      'Echelle d\'argent / Gardiens du voile',
      'Siphonner la mana à distance',
    ],

    ['SEPARATOR'],
    [
      'Espace 1',
      'Gardiens du voile',
      'Analyser les connections entre les objets, personnes, lieux',
    ], [
      'Espace 1',
      'Mysterium',
      'Trouver un objet proche',
    ], [
      'Espace 1',
      '',
      'Voir à 360°',
    ], [
      'Espace 1',
      'Echelle d\'argent / Mysterium',
      'Vision du mage',
    ], [
      'Espace 2',
      'Mysterium',
      'Traverser un portail récemment créé',
    ], [
      'Espace 2',
      'Gardiens du voile / Mysterium',
      'Voir à distance',
    ], [
      'Espace 2',
      'Echelle d\'argent',
      'Bouclier',
    ], [
      'Espace 2',
      'Echelle d\'argent',
      'Barrière magique contre l\'arcane d\'Espace',
    ], [
      'Espace 3',
      'Echelle d\'argent / Gardiens du voile',
      'Barrière magique améliorée, qui combinée avec une autre arcane, bloque ce qui y est lié, exemple avec Vie bloque les humains',
    ], [
      'Espace 3',
      '',
      'Voir plusieurs endroits à distance en même temps',
    ], [
      'Espace 3',
      'Mysterium / Echelle d\'argent',
      'Créer un portail',
    ], [
      'Espace 3',
      '',
      'Utiliser "Bagarre" à distance',
    ], [
      'Espace 4',
      'Gardiens du voile',
      'Être à 2 endroits en même temps',
    ], [
      'Espace 4',
      '',
      'Cacher des objets dans un "sac sans fond"',
    ], [
      'Espace 4',
      'Mysterium / Echelle d\'argent',
      'Se téléporte, sans portail',
    ], [
      'Espace 5',
      'Mysterium / Gardiens du voile',
      'Cacher un lieu',
    ], [
      'Espace 5',
      'Gardiens du voile',
      'Transformer le lie en labyrinthe',
    ],

    ['SEPARATOR'],
    [
      'Esprit 1',
      'Gardiens du voile / Mysterium',
      'Détecter les esprits',
    ], [
      'Esprit 1',
      'Echelle d\'argent / Mysterium',
      'Vision du mage',
    ], [
      'Esprit 1',
      'Mysterium / Echelle d\'argent',
      'Parler aux esprits',
    ], [
      'Esprit 2',
      'Gardiens du voile',
      'Bouclier',
    ], [
      'Esprit 2',
      '',
      'Peut physiquement interagir avec les esprits dans le monde des fantomes',
    ], [
      'Esprit 2',
      'Echelle d\'argent / Mysterium',
      'Convocation d\'esprit',
    ], [
      'Esprit 2',
      'Mysterium',
      'Voir à travers le Gantelet',
    ], [
      'Esprit 3',
      'Mysterium',
      'Donner un ordre à un esprit',
    ], [
      'Esprit 3',
      'Echelle d\'argent / Gardiens du voile',
      'Convocation d\'esprit supérieur',
    ], [
      'Esprit 3',
      'Gardiens du voile',
      'Endommager un esprit dans le monde des morts',
    ], [
      'Esprit 3',
      'Echelle d\'argent',
      'Bouclier contre les pouvoirs des esprits',
    ], [
      'Esprit 3',
      'Mysterium',
      'Soigner un esprit',
    ], [
      'Esprit 3',
      'Gardiens du voile',
      'Restaurer une âme perdue',
    ], [
      'Esprit 4',
      'Gardiens du voile / Mysterium',
      'Créer un objet pour y stocker de l\'essence',
    ], [
      'Esprit 4',
      'Mysterium',
      'Canalise de l\'essence d\'une source vers une autre',
    ], [
      'Esprit 4',
      'Mysterium',
      'Appel un esprit gardien pour protéger le mage',
    ], [
      'Esprit 4',
      'Gardiens du voile',
      'Controler la force du Gantelet',
    ], [
      'Esprit 5',
      'Echelle d\'argent',
      'Créer une nouvelle lignée d\'esprit dont le mage en est le parent',
    ], [
      'Esprit 5',
      'Mysterium',
      'Créer un sanctuaire dans le monde des esprits',
    ],

    ['SEPARATOR'],
    [
      'Temps 1',
      '',
      'Effectue une action au moment parfait, bonus sur l\'action suivante',
    ], [
      'Temps 1',
      '',
      'Vision du mage',
    ], [
      'Temps 2',
      'Echelle d\'argent',
      'Entrevoi un avenir potentiel',
    ], [
      'Temps 2',
      '',
      'Regarde vers l\'avenir et entrevoie l\'issue d\'une action, avec 2 variables',
    ], [
      'Temps 2',
      'Mysterium / Gardiens du voile',
      'Voir ce qu\'il s\'est passé',
    ], [
      'Temps 2',
      'Gardiens du voile / Echelle d\'argent',
      'Bouclier',
    ], [
      'Temps 3',
      '',
      'Boost tes capacités de vitesse et d\'actions.',
    ], [
      'Temps 3',
      'Gardiens du voile, Echelle d\'argent',
      'Entrevoi un avenir potentiel, avec + de détails',
    ], [
      'Temps 3',
      'Echelle d\'argent',
      'Revenir 1 tour en arrière',
    ], [
      'Temps 4',
      'Echelle d\'argent / Mysterium',
      'Ralenti une personne (defense, vitesse, anticipation)',
    ], [
      'Temps 4',
      'Echelle d\'argent',
      'Prévoir le futur proche avec grande précision',
    ], [
      'Temps 5',
      '',
      'Envoyer un objet dans le futur',
    ], [
      'Temps 5',
      'Echelle d\'argent',
      'Réécrire l\'histoire',
    ], [
      'Temps 5',
      '',
      'Arrêt du temps',
    ],

    ['SEPARATOR'],
    [
      'Destin 1 + Espace 1 + Vie 1',
      'Gardiens du voile',
      'Vise un être vivant à la perfection, quelque soit la distance',
    ], [
      'Forces 3 + Psyché 1-5',
      '',
      'Créé un automate magique qui peut effectuer des actions magique de Force',
    ], [
      'Forces 4 + Vie 4',
      'Mysterium',
      'Se métamorpphoser en un être d\'énergie, comme un élémentaire de feu',
    ], [
      'Matière 5 + Prime 3',
      'Echelle d\'argent',
      'Créer la matière la plus précieuse au monde, à base d\'orichalque, de lunargent et de mercure, qui brille au contact de la magie',
    ], [
      'Prime 2 + Espace 2',
      '',
      'Détecter toute utilisation de magie dans les environs',
    ], [
      'Espace 2 + ARCANE',
      '',
      'Lancer un sort à distance',
    ], [
      'Espace 5 + Forces 3 + Psyché 4 + Temps 4',
      'Mysterium, Gardiens du voile',
      'Efface complétement une mémoire',
    ], [
      'Esprit 4 + Prime 4',
      'Mysterium',
      'Conveti de la mana en essence et peut la donner à un esprit',
    ],
  ];

  public ngOnInit(): void {
    this.spells = JSON.parse(JSON.stringify(this.allSpells));
  }

  public updateFilter(): void {
    this.spells = JSON.parse(JSON.stringify(this.allSpells));

    if (this.selectedOrder) {
      this.spells = this.spells.filter((spell) => {
        return spell[1] && spell[1].indexOf(this.selectedOrder) !== -1;
      });
    }

    if (this.selectedArcana) {
      this.spells = this.spells.filter((spell) => {
        return spell[0] && spell[0].indexOf(this.selectedArcana) !== -1;
      });
    }
  }
}
