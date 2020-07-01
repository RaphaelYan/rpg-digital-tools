import { Component } from '@angular/core';

@Component({
  selector: 'app-nwod-mage-rotes',
  templateUrl: './rotes.component.html',
  styleUrls: ['./rotes.component.scss']
})
export class NwodMageRotesComponent {
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
    {
      label: 'Flèche d\'adamantine',
      value: 'adamantine_arrow'
    }, {
      label: 'Conseil libre',
      value: 'free_council'
    }, {
      label: 'Gardiens du voile',
      value: 'guardians_of_the__veil'
    }, {
      label: 'Mysterium',
      value: 'mysterium'
    }, {
      label: 'Echelle d\'argent',
      value: 'silver_ladder'
    },
  ];
  public arcanas = [
    {
      label: 'Destin',
      value: 'destin'
    }, {
      label: 'Espace',
      value: 'espace'
    }, {
      label: 'Esprit',
      value: 'esprit'
    }, {
      label: 'Forces',
      value: 'forces'
    }, {
      label: 'Matière',
      value: 'matiere'
    }, {
      label: 'Mort',
      value: 'mort'
    }, {
      label: 'Prime',
      value: 'prime'
    }, {
      label: 'Psyché',
      value: 'psyche'
    }, {
      label: 'Temps',
      value: 'temps'
    }, {
      label: 'Vie',
      value: 'vie'
    },
  ];
  public arrayOfFive = [1, 2, 3, 4, 5];
}
