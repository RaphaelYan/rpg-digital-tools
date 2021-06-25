import { Power } from '../models';

export const powers: Power[] = [
  {
    id: 1,
    name: 'Pas de pouvoir',
    active: false,
    description: `
Félicitations, vous êtes clean !<br>
Pas de pouvoirs mutants ici, merci beaucoup !<br>
Vous êtes un Citoyen totalement loyal et non muté, prêt à tuer les traîtres mutants communistes pour l'Ordinateur.`,
  }, {
    id: 2,
    name: 'Électrochocs',
    active: false,
    description: `
Vous pouvez tirer des faisceaux d'électricité de vos mains.<br>
Cela peut être très utile si vous voulez combattre des ennemis à mains nues ou faire un barbecue.`
  }, {
    id: 3,
    name: 'Contrôle de l\'adrénaline',
    active: false,
    description: `
Vous pouvez augmenter votre Violence, votre Audance, vos Neurones et/ou votre Mécanique.<br>
C'est temporaire, et vous ne savez pas combien de temps cela dure, mais c'est sacrément impressionnant.`
  }, {
    id: 4,
    name: 'Empathie',
    active: false,
    description: `
Ce que vous ressentez, tout le monde le ressent.<br>
Si les choses deviennent tendues, ayez des pensées heureuses et insouciantes et tout le monde sera heureux et insouciant avec vous.`
  }, {
    id: 5,
    name: 'Charme',
    active: false,
    description: `
Vous êtes une personne sympathique, n'est-ce pas ?<br>
Ceux à qui vous parlez semblent agir de manière plus agréable et coopérative.<br>
Ça doit être comme ça que vous avez obtenu votre niveau d'accréditation actuel.`
  }, {
    id: 6,
    name: 'Champ d\'énergie',
    active: false,
    description: `
Vous avez le pouvoir d'absorber les faisceaux laser, les explosions d'énergie et les rafales de feu.`
  }, {
    id: 7,
    name: 'Investigation mentale',
    active: false,
    description: `
Une fois, alors que vous aviez vraiment, vraiment besoin de connaître une réponse acceptable à la question d'un garde vraiment hostile, vous vous êtes concentré, et vous avez trouvé exactement la bonne réponse.<br>
Et vous jureriez l'avoir entendu dans sa voix.`
  }, {
    id: 8,
    name: 'Lévitation',
    active: false,
    description: `
Vous vous sentez ... plus léger que l'air.<br>
Si vous vous concentrez, vous pouvez flotter dans les airs avec facilité.<br>
Laissez vos soucis en dessous de vous.`
  }, {
    id: 9,
    name: 'Supersens',
    active: false,
    description: `
Qu'est-ce que c'était ?<br>
Vous avez entendu quelque chose ?<br>
Vous avez senti quelque chose ?<br>
Vous avez vu quelque chose ?<br>
Si c'est le cas, ça peut être de l'autre côté du complexe Alpha ou dans la pièce d'à côté.<br>
Vous avez des sens très aiguisés.`
  }, {
    id: 10,
    name: 'Empathie envers les machines',
    active: false,
    description: `Attention !<br>
N'essayez pas d'enregistrer cette mutation !<br>
C'est une véritable trahison !<br>
... et très utile.<br>
Les machines semblent obéir à vos ordres et elles sont très amicales avec vous.<br>
Hé, l'Ordinateur est une machine, n'est-ce pas ?`
  }, {
    id: 11,
    name: 'Mangeur de matières',
    active: false,
    description: `
Miam miam ... plus.<br>
Vous pouvez manger et digérer n'importe quoi.<br>
Ça aide à cacher les petits objets de trahison et ça vous garde en vie quand tout le monde meurt de faim.`
  }, {
    id: 12,
    name: 'Pyrokinésie',
    active: false,
    description: `
Vous aimez les feux.<br>
Concentrez-vous et faites partir en fumée ces satanés documents de trahison.<br>
Concentrez-vous un peu plus, et essayez sur des clones vivants ... hummm.`
  }, {
    id: 13,
    name: 'Intuition mécanique',
    active: false,
    description: `
Hmmm ... Je parie que ça va là et que ça contrôle ça.<br>
Vous avez une aptitude étonnante à manipuler des machines dont personne d'autre ne sait rien.`
  }, {
    id: 14,
    name: 'Régénération',
    active: false,
    description: `
Ah, regardez, ce n'est pas si mal.<br>
Vous êtes déjà en train de guérir.<br>
Faites une petite pause, et vous pourrez guérir très vite.<br>
Même si vous faites une sieste, vous avez des chances de vous réveiller en bonne santé.`
  }, {
    id: 15,
    name: 'Explosion mentale',
    active: false,
    description: `
Tu parles de donner un mal de tête à quelqu'un !<br>
Vous pouvez attaquer avec le pouvoir de votre esprit.<br>
Vous ne savez pas à quel point c'est efficace, mais les brutes en tombent raide.`
  }, {
    id: 16,
    name: 'Télékinésie',
    active: false,
    description: `
Vous ne voulez pas vous salir les mains avec des objets déraisonnables ?<br>
Soulevez-les avec votre esprit !<br>
Bien sûr, vous voulez éviter ces vilaines hernies mentales !`
  }, {
    id: 17,
    name: 'Polymorphisme',
    active: false,
    description: `
En fait, je suis une table !<br>
Non, je suis un citoyen junior !<br>
Vous pouvez vous transformer en différentes formes grâce à vos pouvoirs.`
  }, {
    id: 18,
    name: 'Télépathie',
    active: false,
    description: `
Il s'agit en fait d'une communication silencieuse.<br>
Établissez un lien entre vous et les personnes en qui vous avez confiance ...<br>
D'accord, entre vous et vos coéquipiers alors.<br>
Ne gâchez pas tout, ou tout le monde pourrait se retrouver avec un mal de tête.`
  }, {
    id: 19,
    name: 'Précognition',
    active: false,
    description: `
Vous saviez que j'allais vous donner cette carte, n'est-ce pas ?<br>
Vous pouvez avoir une vision du futur.<br>
Dans le complexe Alpha, ce n'est pas toujours une bonne chose, mais un peu de connaissance peut être très utile.`
  }, {
    id: 20,
    name: 'Téléportation',
    active: false,
    description: `
Plus besoin de s'embrouiller dans les transtubes.<br>
Pas si vous savez où vous allez, en tout cas.<br>
Disparaître, puis réapparaître ailleurs.<br>
Bien sûr, vous voudrez probablement essayer de ne pas apparaître "dans" quelque chose si vous pouvez l'éviter.`
  }
];
