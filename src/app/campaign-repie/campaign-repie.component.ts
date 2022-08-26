import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-campaign-repie',
  templateUrl: './campaign-repie.component.html',
  styleUrls: ['./campaign-repie.component.scss']
})
export class CampaignRepieComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const displayValues = true;
    const chars = [
      {
        name: 'Raphou',
        proficiency: 4, armor_class: 17, pv: 71,
        strength: -1, dexterity: 5, constitution: 1, intelligence: 4, wisdom: 2, charisma: -1,
        masteries: [
          'dexterity',
          'acrobatics',
          'sleight_of_hand',
          'stealth',
          'intelligence',
          'arcana',
          'investigation',
          'insight',
          'perception',
        ],
        expert: [
          'stealth',
          'investigation',
          'perception',
        ],
      },
      {
        name: 'Thomas',
        proficiency: 4, armor_class: 23, pv: 103,
        strength: 3, dexterity: 1, constitution: 3, intelligence: -1, wisdom: 0, charisma: 3,
        masteries: [
          'wisdom',
          'charisma',
          'athletics',
          'insight',
          'intimidation',
          'persuasion',
        ],
      },
      {
        name: 'Clément',
        proficiency: 4, armor_class: 18, pv: 80,
        strength: 0, dexterity: 5, constitution: 2, intelligence: 1, wisdom: 2, charisma: 4,
        masteries: [
          'dexterity',
          'charisma',
          'acrobatics',
          'stealth',
          'investigation',
          'perception',
          'deception',
          'performance',
          'persuasion',
        ],
        toucheATout: true,
      },
      // {
      //   name: 'Mélodie',
      //   proficiency: 3, armor_class: 15, pv: 90,
      //   strength: 5, dexterity: 2, constitution: 3, intelligence: 0, wisdom: 0, charisma: 0,
      //   masteries: [ 'strength', 'constitution', 'athletics', 'nature', 'perception', 'survival', 'intimidation' ],
      // },
      // {
      //   name: 'Coco',
      //   proficiency: 3, armor_class: 17, pv: 51,
      //   strength: -1, dexterity: 5, constitution: 1, intelligence: 2, wisdom: 1, charisma: 2,
      //   masteries: [ 'dexterity', 'intelligence', 'deception', 'investigation', 'perception', 'persuasion', 'sleight_of_hand', 'stealth' ],
      //   expert: [ 'stealth', 'deception', 'investigation' ],
      // },
    ];

    const getHtmlForSkill = function (char, skill, proficiency, attribute, addClass = null) {
      const isMastered = char.masteries.includes(skill);
      const isExpert = char.expert && char.expert.includes(skill);
      let value = attribute;
      if (isExpert) {
        value += proficiency;
        value += proficiency;
      } else if (isMastered) {
          value += proficiency;
      } else if (char.toucheATout) {
        value += Math.trunc(proficiency / 2); // Arrondi inférieur
      }

      if (addClass) {
        return `<td class="value-${value} ${addClass}">` + (displayValues ? value : '') + `</td>`;
      }
      return `<td class="value-${value}">` + (displayValues ? value : '') + `</td>`;
    };

    // Display attributes
    let html = '';
    for (const char of chars) {
      html += '<tr>';

      html += `<th>${char.name}</th>`;

      html += `<td class="value-${char.strength}">` + (displayValues ? char.strength : '') + `</td>`;
      html += `<td class="value-${char.dexterity}">` + (displayValues ? char.dexterity : '') + `</td>`;
      html += `<td class="value-${char.constitution}">` + (displayValues ? char.constitution : '') + `</td>`;
      html += `<td class="value-${char.intelligence}">` + (displayValues ? char.intelligence : '') + `</td>`;
      html += `<td class="value-${char.wisdom}">` + (displayValues ? char.wisdom : '') + `</td>`;
      html += `<td class="value-${char.charisma}">` + (displayValues ? char.charisma : '') + `</td>`;

      html += '</tr>';
    }
    $('.attributs').html(html);

    // Display skills
    html = '';
    for (const char of chars) {
      html += '<tr>';

      html += `<th>${char.name}</th>`;

      html += getHtmlForSkill(char, 'strength', char.proficiency, char.strength);
      html += getHtmlForSkill(char, 'athletics', char.proficiency, char.strength);

      html += getHtmlForSkill(char, 'dexterity', char.proficiency, char.dexterity, 'border-left');
      html += getHtmlForSkill(char, 'acrobatics', char.proficiency, char.dexterity);
      html += getHtmlForSkill(char, 'sleight_of_hand', char.proficiency, char.dexterity);
      html += getHtmlForSkill(char, 'stealth', char.proficiency, char.dexterity);

      html += getHtmlForSkill(char, 'constitution', char.proficiency, char.constitution, 'border-left');

      html += getHtmlForSkill(char, 'intelligence', char.proficiency, char.intelligence, 'border-left');
      html += getHtmlForSkill(char, 'arcana', char.proficiency, char.intelligence);
      html += getHtmlForSkill(char, 'history', char.proficiency, char.intelligence);
      html += getHtmlForSkill(char, 'investigation', char.proficiency, char.intelligence);
      html += getHtmlForSkill(char, 'nature', char.proficiency, char.intelligence);
      html += getHtmlForSkill(char, 'religion', char.proficiency, char.intelligence);

      html += getHtmlForSkill(char, 'wisdom', char.proficiency, char.wisdom, 'border-left');
      html += getHtmlForSkill(char, 'animal_handling', char.proficiency, char.wisdom);
      html += getHtmlForSkill(char, 'insight', char.proficiency, char.wisdom);
      html += getHtmlForSkill(char, 'medicine', char.proficiency, char.wisdom);
      html += getHtmlForSkill(char, 'perception', char.proficiency, char.wisdom);
      html += getHtmlForSkill(char, 'survival', char.proficiency, char.wisdom);

      html += getHtmlForSkill(char, 'charisma', char.proficiency, char.charisma, 'border-left');
      html += getHtmlForSkill(char, 'deception', char.proficiency, char.charisma);
      html += getHtmlForSkill(char, 'intimidation', char.proficiency, char.charisma);
      html += getHtmlForSkill(char, 'performance', char.proficiency, char.charisma);
      html += getHtmlForSkill(char, 'persuasion', char.proficiency, char.charisma);

      html += '</tr>';
    }
    $('.skills').html(html);

    // Display stats
    html = '';
    for (const char of chars) {
      html += '<tr>';

      html += `<th>${char.name}</th>`;

      const pvValue = Math.trunc(char.pv / 10);
      html += `<td class="value-${pvValue}">` + (displayValues ? char.pv : '') + `</td>`;
      const armorClassValue = char.armor_class - 12;
      html += `<td class="value-${armorClassValue}">` + (displayValues ? char.armor_class : '') + `</td>`;

      html += '</tr>';
    }
    $('.stats').html(html);
  }
}
