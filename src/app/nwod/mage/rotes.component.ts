import { Component } from '@angular/core';

@Component({
  selector: 'app-nwod-mage-rotes',
  templateUrl: './rotes.component.html',
  styleUrls: ['./rotes.component.scss']
})
export class NwodMageRotesComponent {
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
            roll: 'Intelligence + (Médecine ou Science) + Life',
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
            roll: 'Résolution + Athletisme + Life',
            cost: '1 mana optionnel, pour faire durer 24h',
            description: 'Bouclier qui protège des éléments physiques (couteau, feu, ...)',
            duration: 'Scène'
          }, {
            name: 'Purification du corps',
            roll: 'Intelligence + Médecine + Life',
            description: 'Purifie des drogues, toxines, poisons',
            duration: 'Instantané'
          }, {
            name: 'Auto-purge',
            roll: 'Stamina + Médecine + Life',
            description: 'Soigne les maladies du mage',
            duration: 'Rituel'
          }, {
            name: 'Visions du monde vivant',
            roll: 'Manipulation + (Animaux or Survie) + Life',
            description: 'Donner la vision du mage',
            duration: 'Scène'
          }
        ], rotes_3: [
          {
            name: 'Banissement des maladies',
            roll: 'Astuce + Médecine + Life',
            description: 'Soigne les maladies d\'une personne',
            duration: 'Rituel'
          }, {
            name: 'Guérison du coeur',
            roll: 'Calme + Médecine + Life',
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
      }, matiere: {
      }, mort: {
      }, prime: {
      }, psyche: {
      }, temps: {
      }, vie: {
      }
    }
  };
  public order = '';
  public arcana = '';
  public arrayOfFive = [1, 2, 3, 4, 5];
}
