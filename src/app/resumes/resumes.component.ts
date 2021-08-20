import { Component } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent {
  public resumes = [
    {
      date: '31 Juillet 2021',
      title: 'Les Foudres du Roi-Tonnerre - partie 26',
      chars: 'Clem, Coran, Mélo, Raph, Rémi, Tommy',
      dm: 'Repié',
    }, {
      date: '24 Juin 2021',
      title: 'Paranoia - Coupure de courant',
      chars: 'Clem, Constance, Mélo, Pierre',
      dm: 'MaFeRyT',
    }, {
      date: '11 Juin 2021',
      title: 'Les Foudres du Roi-Tonnerre - partie 25',
      pdf: 'assets/resumes/repie/2021-06-11-partie-25.png',
      chars: 'Clem, Coran, Mélo, Raph, Rémi, Tommy',
      dm: 'Repié',
    }, {
      date: '19 Mai 2021',
      title: 'Tales of Felgia - Session 16',
      chars: 'Ba\'Hekin, Guelrath, Karli\'ah, Lobor, Nessira, Skenris',
      dm: 'Clem',
    }, {
      date: '10 Avril 2021',
      title: 'Les Foudres du Roi-Tonnerre - partie 24',
      pdf: 'assets/resumes/repie/2021-05-10-partie-24.pdf',
      chars: 'Clem, Mélo, Raph, Rémi, Tommy',
      dm: 'Repié',
    }, {
      date: '4 Avril 2021',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 5, Acte 2',
      chars: 'Clem, Mélo, Repié, Amandine',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/rKcVoyDYKjQ',
    }, {
      date: '27 Février 2021',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 5, Acte 1',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre5-acte1',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/kpPJ2YohmnU',
    }, {
      date: '20 Février 2021',
      title: 'Les Foudres du Roi-Tonnerre - partie 23',
      chars: 'Clem, Coran, Mélo, Raph, Rémi, Tommy',
      dm: 'Repié',
    }, {
      date: '05 Février 2021',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 5',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte5',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/6jHaFLdKjHM',
    }, {
      date: '15 Janvier 2021',
      title: 'Les Foudres du Roi-Tonnerre - partie 22',
      chars: 'Clem, Coran, Mélo, Raph, Rémi, Thamos, Tommy',
      dm: 'Repié',
    }, {
      date: '09 Janvier 2021',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 4',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte4',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/o6ZskoIPsR4',
    }, {
      date: '10 Décembre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 3',
      chars: 'Repié',
      pdf: 'assets/resumes/mage/chapitre4-acte3.pdf',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/BP70XUmsoqU',
    }, {
      date: '05 Décembre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 2',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte2',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/VzqCrysfMYo',
    }, {
      date: '28 Novembre 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 21',
      chars: 'Clem, Mélo, Raph, Rémi, Thamos, Tommy',
      dm: 'Repié',
    }, {
      date: '25 Novembre 2020',
      title: 'Tales of Felgia - Session 5',
      chars: 'Ba\'Hekin, Charles de Rasseau, Karli\'ah, Lobor, Nessira, Skenris',
      pdf: 'https://www.notion.so/Session-5-8460712ed3f84318a8fcddeb007bbd80',
      dm: 'Clem',
    }, {
      date: '19 Novembre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 4, Acte 1',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre4-acte1',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/_x3NUIWAeNg',
    }, {
      date: '13 Novembre 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 20',
      chars: 'Clem, Mélo, Raph, Coran',
      dm: 'Repié',
      youtube: 'https://www.youtube.com/watch?v=3wPZv7a8Qkk',
    }, {
      date: '24 Octobre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 3, Acte 3',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre3-acte3',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/gB593DX4bMQ',
    }, {
      date: '17 Octobre 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 19',
      chars: 'Clem, Mélo, Raph, Coran, Rémi, Thamos',
      dm: 'Repié',
      youtube: 'https://www.youtube.com/watch?v=Fedof_5Cwqs',
    }, {
      date: '15 Octobre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 3, Acte 2',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre3-acte2',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/gqZHtEucA80',
    }, {
      date: '7 Octobre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 3, Acte 1',
      chars: 'Clem, Mélo, Repié, Amandine',
      pdf: 'https://raphaelyan.github.io/rpg-digital-tools/resumes/chapitre3-acte1',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/BWWIw13X6B8',
    }, {
      date: '4 Septembre 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 2, Acte 2 (fin)',
      chars: 'Clem, Mélo, Repié, Amandine',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/TacmyAtL-p0',
    }, {
      date: '29 Août 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 2, Acte 2',
      chars: 'Clem, Mélo, Repié',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/3CTqD_1XLTU',
    }, {
      date: '22 Août 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 18',
      chars: 'Clem, Mélo, Raph, Coran, Rémi',
      pdf: 'https://homebrewery.naturalcrit.com/share/1vWTPZeO-QyI',
      dm: 'Repié',
      youtube: 'https://www.youtube.com/watch?v=6inn_M5hEfY',
    }, {
      date: '31 Juillet 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 17',
      dm: 'Repié',
      youtube: 'https://www.youtube.com/watch?v=NQFjC5tNnkU&feature=youtu.be',
    }, {
      date: '24 Juillet 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 2, Acte 1',
      chars: 'Clem, Mélo, Repié',
      pdf: 'assets/resumes/mage/mage-partie4.pdf',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/YMjRM-vSruQ',
    }, {
      date: '10 Juillet 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 1, Acte 4',
      chars: 'Clem, Mélo, Repié',
      pdf: 'assets/resumes/mage/mage-partie3.pdf',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/6n4SyGCa1Ko',
    }, {
      date: '02 Juillet 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 1, Acte 2 & 3',
      chars: 'Clem, Mélo, Repié',
      pdf: 'assets/resumes/mage/mage-partie2.pdf',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/AFDfhlr0PrQ',
    }, {
      date: '26 Juin 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 16',
      dm: 'Repié',
    }, {
      date: '24 Juin 2020',
      title: 'Mage - Le mythe de la Reine détrônée - Chapitre 1, Acte 1',
      chars: 'Clem, Mélo, Repié, Thamos',
      pdf: 'assets/resumes/mage/mage-partie1.pdf',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/XgmJegM8bcE',
    }, {
      date: '12 Juin 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 15',
      dm: 'Repié',
    }, {
      date: '6 Juin 2020',
      title: 'Initiation au Monde des Ténèbres',
      chars: 'Jean, Repié, Thamos, Roro, Rémi',
      dm: 'MaFeRyT',
      youtube: 'https://youtu.be/JHuRavxKhN8',
    }, {
      date: '30 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 14',
      dm: 'Repié',
    }, {
      date: '22 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 13',
      dm: 'Repié',
    }, {
      date: '20 Mai 2020',
      title: 'Les tréfonds aux mille dragons - Team 2',
      pdf: 'assets/resumes/les-trefonds-aux-mille-dragons-book.pdf',
      dm: 'MaFeRyT',
    }, {
      date: '16 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 12',
      pdf: 'assets/resumes/repie/2020-05-16.pdf',
      dm: 'Repié',
    }, {
      date: '14 Mai 2020',
      title: 'Les tréfonds aux mille dragons - Team 1',
      pdf: 'assets/resumes/les-trefonds-aux-mille-dragons-book.pdf',
      dm: 'MaFeRyT',
    }, {
      date: '9 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 11',
      pdf: 'assets/resumes/repie/2020-05-09.pdf',
      dm: 'Repié',
    }, {
      date: '2 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 10',
      dm: 'Repié',
    }, {
      date: '25 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 9',
      dm: 'Repié',
    }, {
      date: '17 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 8',
      dm: 'Repié',
    }, {
      date: '10 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 7',
      pdf: 'assets/resumes/repie/2020-04-10.pdf',
      dm: 'Repié',
    }, {
      date: '4 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 6',
      dm: 'Repié',
    }, {
      date: '1 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 5',
      dm: 'Repié',
    }, {
      date: '28 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 4',
      pdf: 'assets/resumes/repie/2020-03-28.pdf',
      dm: 'Repié',
    }, {
      date: '25 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 3',
      pdf: 'assets/resumes/repie/2020-03-25.pdf',
      dm: 'Repié',
    }, {
      date: '21 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 2',
      pdf: 'assets/resumes/repie/2020-03-21.pdf',
      dm: 'Repié',
    }, {
      date: '19 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 1',
      pdf: 'assets/resumes/repie/2020-03-19.pdf',
      dm: 'Repié',
    }, {
      date: '28 Septembre 2019',
      title: 'ROT - A la rescousse du château volant (partie 2)',
      pdf: 'assets/resumes/2019-09-28.pdf',
      chars: 'Noelie (8.5), Shinden (8.5), Syccor (8.5), Thibault (8.5), Vador (8.5) : +0.5 niveau',
      dm: 'MaFeRyT',
    }, {
      date: '28 juillet 2019',
      title: 'The game - partie 1',
      chars: 'Jean, Pierre, Thamos, Tommy',
      dm: 'MaFeRyT',
    }, {
      date: '6 Avril 2019',
      title: 'ROT - A la rescousse du château volant (partie 1)',
      pdf: 'assets/resumes/2019-04-06.pdf',
      chars: 'Noelie (8), Shinden (8), Syccor (8), Thibault (8), Vador (8), Yann (8) : +0.5 niveau',
      dm: 'MaFeRyT',
    }, {
      date: '23 février 2019',
      title: 'Microlite20 - La cuite',
      dm: 'Jean D.',
      chars: 'Maferyt, Repié, Rémi, Thamos, Tommy'
    }, {
      date: '17 Novembre 2018',
      title: 'D&D 3.5 - Diplomatie Drow (partie 3)',
      dm: 'Syccor',
    }, {
      date: '22 Juillet 2018',
      title: 'D&D 5 - Les monstres de la tempête',
      dm: 'MaFeRyT',
    }, {
      date: '8 Avril 2018',
      title: 'D&D 3.5 - Diplomatie Drow (partie 2)',
      dm: 'Syccor',
    }, {
      date: '18 Mars 2018',
      title: 'D&D 3.5 - Diplomatie Drow (partie 1)',
      dm: 'Syccor',
      description: `
- un mago qui ne prépare pas les bons sorts sauf pour fuir
- un élu divin fanatique qui boit du lait avec une masse qui brille
- un corbeau fufu qui répète tout ce qu'on dit et trop curieux
- un croisé qui rêvait d'être barbare pour lancer des sorts
- un druide maitre de la lumière qui aime les rhinocéros
- un barde qui veut rendre sourd les autres et qui apprend le ukulélé
`
    }, {
      date: '7 Octobre 2017',
      title: 'Savage World - Les 6 nains de la main',
      chars: 'Julien, Darth, Noelie, Baptiste, clément, Yann',
      dm: 'MaFeRyT',
    }, {
      date: '29 Avril 2017',
      title: 'HOTQ - Partie 10 : la fin du chateau volant, combat pour reprendre le truc',
      dm: 'MaFeRyT',
    }, {
      date: '12 Mars 2017',
      title: 'HOTQ - Partie 9 : L\'assaut',
      dm: 'MaFeRyT',
    }, {
      date: '05 Février 2017',
      title: 'HOTQ - Partie 8 : La révolte',
      dm: 'MaFeRyT',
    }, {
      date: '07 Janvier 2017',
      title: 'HOTQ - Partie 7 : La mine (part2)',
      dm: 'MaFeRyT',
    }, {
      date: '17 Décember 2016',
      title: 'HOTQ - Partie 6 : La mine',
      dm: 'MaFeRyT',
    }, {
      date: '20 Novembre 2016',
      title: 'HOTQ - Partie 5 : L\'infiltration',
      dm: 'MaFeRyT',
    }, {
      date: '24 Septembre 2016',
      title: 'HOTQ - Inter-Partie : Manigances',
      dm: 'MaFeRyT',
    }, {
      date: '07 Aout 2016',
      title: 'HOTQ - Partie 4 : La caravane',
      dm: 'MaFeRyT',
    }, {
      date: '31 Juillet 2016',
      title: 'HOTQ - Partie 3 : La couveuse & le début du voyage',
      dm: 'MaFeRyT',
    }, {
      date: '12 Juin 2016',
      title: 'HOTQ - Partie 2 : Le campement des assaillants',
      dm: 'MaFeRyT',
    }, {
      date: '22 Mai 2016',
      title: 'HOTQ - Partie 1 : Les flammes du culte',
      dm: 'MaFeRyT',
    }, {
      date: '5 Juillet 2015',
      title: 'D&D - Le sceau de lune',
      dm: 'MaFeRyT',
      chars: 'Dallo, FiBoot, Syccor, Vador',
    }, {
      date: '14 Mai 2015',
      title: 'Donj de glace',
      dm: 'Syccor',
      chars: 'FiBoot, MaFeRyT, Vador',
    }, {
      date: '10 Aout 2014',
      title: 'D&D 3.5 - La pyramide des tenebres - part 5',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Vador (Elesia), Fiboot (Galak), Shinden (Kay), Azrael (), Dallo (Alben)',
    }, {
      date: '21 Juin 2014',
      title: 'D&D 3.5 - La pyramide des tenebres - part 5',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Vador (Elesia), Fiboot (Galak), Dallo (Alben)',
    }, {
      date: '21 Juin 2014',
      title: 'D&D 3.5 - La pyramide des tenebres - part 4',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Fiboot (Galak), Vador (Elesia), Shinden (Kay), Azrael (?)',
    }, {
      date: '6 Avril 2014',
      title: 'D&D 3.5 - La pyramide des tenebres - part 3',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Fiboot (Galak), Vador (Elesia), Shinden (Kay)',
    }, {
      date: '6 Avril 2014',
      title: 'D&D 3.5 - La pyramide des tenebres - part 2',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Fiboot (Galak), Azrael (?), Vador (Elesia), Shinden (Kay)',
    }, {
      date: '6 Avril 2014',
      title: 'D&D 3.5 - La pyramide des tenebres - part 1',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Fiboot (Galak), Azrael (?), Vador (Elesia), Shinden (Kay)',
    }, {
      date: '2 Mars 2014',
      title: 'D&D 3.5 - Fallcrest et la malédiction de la pyramide',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Fiboot (Galak), Raogi (?), Vador (Elesia)',
    }, {
      date: '21 Février 2014',
      title: 'D&D 3.5 - La tour des mystères',
      dm: 'MaFeRyT',
      chars: 'Syccor (Vaiana), Fiboot (Hippias), Quentin (?), Shinden (Kai), Dallo (Carnak)',
    }, {
      date: '7 Février 2014',
      title: 'D&D 3.5 - La chasse au profane',
      dm: 'MaFeRyT',
      chars: 'Vador (Elesia), Syccor (Vaiana), Fiboot (Galak), Beldom (Beldomï), Makkura (Rose), ShadowMaso (Goultard), Dallo (Alben)',
    }, {
      date: '15 Décembre 2013',
      title: 'Dragonia Guilds - Partie 6',
      dm: 'MaFeRyT',
      chars: 'Syccor, Shinden, Azrael, Vador',
    }, {
      date: '20 Octobre 2013',
      title: 'D&D 3.5 - D\'eau et de feu (Le dragon du marécage)',
      dm: 'MaFeRyT',
      chars: 'Vador (Elesia), Syccor (Vaiana), Fiboot (Galak), Shinden (Kay)',
    }, {
      date: '20 Octobre 2013',
      title: 'D&D 3.5 - D\'eau et de feu (prologue)',
      dm: 'MaFeRyT',
      chars: 'Vador (Elesia), Syccor (Vaiana), Fiboot (Galak), Shinden (Kay)',
    }, {
      date: '1 Septembre 2013',
      title: 'Dragonia Guilds - Partie 5',
      dm: 'MaFeRyT',
      chars: 'Syccor, Fiboot, Shinden, Gibli, Azrael, Vador',
    }, {
      date: '25 Août 2013',
      title: 'Dragonia Guilds - Partie 4',
      dm: 'MaFeRyT',
      chars: 'Syccor, Fiboot, Aldaric, Gibli, Bazhul',
    }, {
      date: '4 Août 2013',
      title: 'Dragonia Guilds - Partie 3',
      dm: 'MaFeRyT',
      chars: 'Syccor, Aldaric, Vador',
    }, {
      date: '22 Juillet 2013',
      title: 'Dragonia Guilds - Partie 2',
      dm: 'MaFeRyT',
      chars: 'Syccor, Azrael, Gibli, Aldaric, Vador',
    }, {
      date: '21 Juillet 2013',
      title: 'Dragonia Guilds - Partie 1',
      dm: 'MaFeRyT',
      chars: 'Azrael, Aldaric, Vador, Syccor, Gibli',
    }, {
      date: 'Février - Mars 2013',
      title: 'Hellfrost',
      dm: 'Nemesis',
      chars: 'Lama, Glarf, Nounours, Bazuhl, MaFeRyT, Mekap',
    }, {
      date: 'Décembre 2012',
      title: 'D&D',
      dm: 'Idriss',
      chars: 'MaFeRyT, Noelie, Vador, Denis, Syccor',
    }, {
      date: 'Septembre - Décembre 2012',
      title: 'D&D 3.5 - L\'éritier draconique',
      dm: 'MaFeRyT',
      chars: 'Idriss (Pardav, nain guerrier), Noelie (?, elfe rodeuse), Syccor (Vaiana, humaine roublarde), Denis (?, demi-elfe moine), Vador (Elesia, elfe magicienne)',
    }, {
      date: '10 Août 2012',
      title: 'D&D 3.5 - The Game',
      dm: 'MaFeRyT',
      chars: 'Vador (Elesia), Jinashi (Aedan), Fiboot (Galak), (Chalam), (Miya)',
    }, {
      date: '27 Juillet 2012',
      title: 'D&D 3.5 - Une forteresse naine mysterieuse',
      dm: 'MaFeRyT',
      chars: 'Jinashi (Nain Rodeur), Shinden (Skiwi), Wellan (Demi-Orc Barbare), Fiboot (Galak), Syccor (Vaiana), Vador (Elfe Magicien)',
    }, {
      date: '13 Juillet 2012',
      title: 'D&D 3.5 - Une nouvelle magie',
      dm: 'MaFeRyT',
      chars: 'Karnad(barde), Marty(guerrier/pretre), Wellan(barbare), Aralicia(spadassin/guerrier/magicien), Vador(magicien)',
    }, {
      date: '29 Juin 2012',
      title: 'D&D 3.5 - Un voyage palpitant',
      dm: 'MaFeRyT',
      chars: 'KevinJoJo(Humain Pretre), Shinden(gnome ensorceleur), FiBoot(halfelin roublard/ensorceleur), Toxicat(Goliath Guerrier), ToxiGF(Elfe Rodeur)',
    }, {
      date: '24 Juin 2012',
      title: 'D&D 3.5 - Un problème colossal',
      dm: 'MaFeRyT',
      chars: 'Vador(magicien), Shinden(guerrier), Toxicat(barbare), Fiboot(Galak), Syccor(Vaiana), Zesso(Pretre)',
    }, {
      date: '15 Juin 2012',
      title: 'D&D 3.5 - L\'eau ca mouille',
      dm: 'MaFeRyT',
      chars: 'Vador(magicien), Shinden(spadassin), Fiboot(Galak), Syccor(Vaiana), Karnad(Pretre)',
    }, {
      date: '4 Mai 2012',
      title: 'MdT2 Mortels - Y a pas le feu',
      dm: 'MaFeRyT',
      chars: 'Syccor, Shinden, Fiboot, Vador, Naglareph',
    }, {
      date: '24 Février 2012',
      title: 'D&D 3.5 - La bête',
      dm: 'MaFeRyT',
      chars: 'Nemesis, Fiboot, Shinden, Backslash, Jin',
    }, {
      date: '20 Janvier 2012',
      title: 'D&D 3.5 - Les tréfonds aux milles dragons',
      dm: 'MaFeRyT',
      chars: 'Fiboot(barde), Syccor(roublard), Shinden(Druide), Vador(guerrier)',
    }, {
      date: 'Août - Octobre 2011',
      title: 'Mage - Le mythe de la Reine détrônée',
      dm: 'MaFeRyT',
      chars: 'Syccor, Bazuhl, Vador, Fiboot, Shinden',
    }, {
      date: 'Avril - Mai 2011',
      title: 'StarWars',
      dm: 'Aralicia',
      chars: 'Harold, Vador, Kilsen, Ali, MaFeRyT, Têtu',
    }, {
      date: 'Février - Mai 2011',
      title: 'Ambre',
      dm: 'Beldom',
      chars: 'Kilsen, Lasanis, Syccor, Harold, Maferyt, Lasanis',
    }, {
      date: '17 Décembre 2010',
      title: 'Crossover Mage / Vampire',
      dm: 'MaFeRyT + Nemesis + Syccor + Beldom',
      chars: '~24 joueurs',
      pdf: 'assets/resumes/2010-12-17.pdf',
    },
  ];

  /*

  TAGS ROLEPLAY A FAIRE
  - d&d - maferyt
  - d&d -- Syccor
  - Dragonia - Chronicles
  - Dragonia - Legend of the Silver Dragon
  */
}
