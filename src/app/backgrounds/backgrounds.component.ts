import { Component } from '@angular/core';

@Component({
  selector: 'app-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.scss']
})
export class BackgroundsComponent {
  public backgrounds = [
    {
      name: 'Alexander Barca',
      concept: 'Terran Marine - Starcraft RPG',
      owner: 'Carl T.',
      date: '2009-12-18',
      description: `
Alexander Barca est un Terran Marine tout ce qu'il y'a de plus
ordinaire à part un léger accent tarsonien peut-être. Survivant de
la chute de Tarsonis comme on s'en doute, il s'est retrouvé embarqué
avec des loyalistes de la Confédération Terranne qui ont tourné
mercenaires.

Juste un détail quand même, Alexander Barca s'appelle en fait
Alexander Terra. Il a profité de la chute de Tarsonis et de la perte
de données qui l'a inévitablement accompagnée pour changer
d'identité. La raison est que la famille Terra est l'une des plus
anciennes du secteur Koprulu, descendante du commandant du Naggflar,
l'un des trois vaisseaux qui ont amené tous les humains du secteur.
Étant celui à avoir subit le moins de dommages, les tarsoniens ont
bénéficié d'une avance technologique qui leur a permis de conquérir
leurs voisins à partir de 2360, créant ainsi la Confédération
Terranne. Le nom de Terran vient de là d'ailleurs, Terra. Bien
évidemment la famille Terra était un poids lourd économique,
politique et militaire. À la fois membre du Conseil, du Sénat,
propriétaire d'un des plus gros trust multi-planétaires et disposant
de troupes privées, elle était considérée comme une cible
prioritaire par les Sons of Korhal. La branche principale de la
famille a donc été assassinée avant même la chute de Tarsonis (à
l'exception de sa cousine November Annabella Terra plus connue sous le
nom de Nova).

Sinon comme dans presque toutes les vieilles familles, on a décidé de
tout pour lui depuis son plus jeune âge. Jugé insuffisamment
impitoyable pour les affaires par son père, il a été destiné très
tôt à la politique. Histoire quand même de ne pas avoir l'air d'un
parvenu qui débarque avec sa campagne électorale payée par papa, on
l'a d'abord envoyé à l'académie militaire. L'opinion publique a
toujours eu un faible pour les héros et ça permettrai de l'endurcir
un peu. À la surprise générale il s'en est plutôt bien tiré et,
avec l'appui de la famille, est devenu le plus jeune cadet de
l'histoire de l'académie. L'invasion zerg n'a pas permis de savoir si
il serait sorti major de sa promotion.

Sa proximité du pouvoir lui a permis en revanche de connaître
certains secrets de la Confédération Terranne et d'en soupçonner
nombre d'autres. Lors de la phase initiale de l'invasion zerg, et
pendant que les forces confédérées étaient plongées dans le chaos,
lui a pu évaluer rapidement l'ampleur de la menace et agir en
conséquence. Après avoir récupéré un équipement de Marine à
l'académie, il a détalé comme un lapin vers les docks dans le but
d'embarquer dans le premier croiseur venu.

Côté vie privée, il est marié à la fille du Général Mah Sakai,
le chef des forces armées du Combinat Kel-Morian. Il s'agissait d'un
mariage arrangé par sa famille ayant aussi bien une valeur politique
(après la Guerre des Guildes) qu'économique (le Combinat est un poids
lourd dans les matières premières). Sa femme était retournée sur
Moria avant la chute de Tarsonis et a donc eu la vie sauve. Il ignore
en revanche si il est père d'un fils où d'une fille. Étant devenu un
gendre encombrant, il a préféré éviter le Combinat Kel-Morian afin
de ne pas se faire assassiner. Son beau-père aurait préféré se
débarrasser de lui que de riquer de provoquer le Terran Dominion.
`
    }
  ];
}
