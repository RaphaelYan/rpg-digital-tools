import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Clarificateur, Power, Society, Item } from './models';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParanoiaService } from './paranoia.service';

import { powers } from './data/powers';
import { societies } from './data/societies';
import { stuff, defaultStuff } from './data/stuff';

declare var $: any;

@Component({
  selector: 'app-paranoia',
  templateUrl: './paranoia.component.html',
  styleUrls: [
    './paranoia.component.scss',
    './modal-actions.scss',
    './modal-computer.scss',
  ]
})
export class ParanoiaComponent implements AfterViewInit, OnDestroy {
  public mode: string = 'home'; // home | wizard | game
  public charactersCollection: Observable<Clarificateur[]>;
  public affectationsCollection: Observable<any[]>;
  public selectedAffectation = null;
  public currentInspection = null;

  public wizardStep = 1;
  // Wizard Step 1
  public wizardRemainingSeconds: number = 0;
  // Wizard Step 2
  public wizardSkillsRemaining: number = -1;
  public wizardCurrentSkillsUp: number = -1;
  // Wizard Step 3
  public wizardCurrentPowers: Power[] = [];
  // Wizard Step 4
  public wizardCurrentSocieties: Society[] = [];
  // Wizard Step 5
  public wizardStuffRemaining: number = -1;

  public modalActions1Color: number = 1;
  public modalActions2Color: number = 2;
  public modalActions3Color: number = 4;
  public modalActions4Color: number = 3;

  public newCharacterForm: Clarificateur = {
    avatar: '', // female1
    cloneNumber: 1,
    level: 'R',
    name: '',
    sector: '',
    affectation: null,
    traitor: 0,
    skills: {
      violence: 0,
      audace: 0,
      neurones: 0,
      mecanique: 0,
    },
    power: null,
    society: null,
    stuff: [],
    maxHitpoints: -1,
    active: true,
    currentAction: null,
  };
  public currentCharacter = null;
  public screen: any = {
    image: '',
    text: '',
    timer: -1,
  };
  public timerRemainingSeconds: number = 0;
  public currentUser = null;
  private characterDoc: AngularFirestoreDocument<any>;

  public powers: Power[] = powers;
  public societies: Society[] = societies;
  public stuff: Item[] = stuff;

  private intervalModalActionsColors = null;
  private init: boolean = false;

  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    public paranoiaService: ParanoiaService,
  ) {}

  public ngAfterViewInit(): void {
    this.initEyes();

    this.auth.authState.subscribe((user) => {
      this.currentUser = user;
      console.warn(user);
    });
  }

  public ngOnDestroy() {
    if (this.intervalModalActionsColors) {
      clearInterval(this.intervalModalActionsColors);
    }
  }

  public launchGame(): void {
    if (!this.currentUser) {
      window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
      return;
    }

    this.initAll();
  }

  public getCurrentImage(): any {
    if (!this.screen.image) {
      return {};
    }

    return {
      'background-image': `url(${this.screen.image})`,
    };
  }

  public actionClicked(level: number, skillValue: number, skillName: string): void {
    let isTraitor = false;

    if (level >= 2 && this.currentCharacter.level === 'R') {
      isTraitor = true;
    } else if (level >= 3 && this.currentCharacter.level === 'O') {
      isTraitor = true;
    } else if (level >= 4 && this.currentCharacter.level === 'J') {
      isTraitor = true;
    }

    let maxDice = 20;

    if (isTraitor) {
      maxDice = 10;
      this.characterDoc.update({
        traitor: this.currentCharacter.traitor + 1
      });
    }

    const scoreDice = this.rand(1, maxDice);

    const score = scoreDice + skillValue;

    const characterName = this.getCurrentCharacterName();

    let wording = `${characterName} a fait <b>${score}</b>`;
    if (scoreDice === maxDice) {
      wording += ' (MAX !)';
    }
    wording += ` sur un jet de <b>${skillName}</b>`;
    if (isTraitor) {
      wording += ' (et est un traitre en cliquant sur la mauvaise ';
      wording += this.paranoiaService.transformToAccreditationColor('accréditation', level);
      wording += ')';
    }

    this.paranoiaService.addParanoiaLog(wording, this.currentUser);
  }

  public wizardFirstStep(): void {
    this.wizardStep = 2;

    const name = this.newCharacterForm.name;
    const sector = this.newCharacterForm.sector;

    if (name.replace(/[A-Z]/g, '').length !== 0 || sector.replace(/[A-Z]/g, '').length !== 0) {
      this.newCharacterForm.traitor += 1;
    }
  }

  public wizardSecondStep(): void {
    this.wizardStep = 3;

    const indexPower1 = this.rand(0, this.powers.length - 1);

    let indexPower2 = this.rand(0, this.powers.length - 1);
    while ([indexPower1].includes(indexPower2)) {
      indexPower2 = this.rand(0, this.powers.length - 1);
    }

    let indexPower3 = this.rand(0, this.powers.length - 1);
    while ([indexPower1, indexPower2].includes(indexPower3)) {
      indexPower3 = this.rand(0, this.powers.length - 1);
    }

    let indexPower4 = this.rand(0, this.powers.length - 1);
    while ([indexPower1, indexPower2, indexPower3].includes(indexPower4)) {
      indexPower4 = this.rand(0, this.powers.length - 1);
    }

    this.wizardCurrentPowers.push(this.powers[indexPower1]);
    this.wizardCurrentPowers.push(this.powers[indexPower2]);
    this.wizardCurrentPowers.push(this.powers[indexPower3]);
    this.wizardCurrentPowers.push(this.powers[indexPower4]);
  }

  public wizardThirdStep(): void {
    this.wizardStep = 4;

    let indexSociety1 = this.rand(0, this.societies.length - 1);

    if (this.currentUser.email === 'pierre.beaujeu@rednet.io' || this.currentUser.email === 'pierre.beaujeu@gmail.com') {
      indexSociety1 = 3;
    }

    let indexSociety2 = this.rand(0, this.societies.length - 1);
    while ([indexSociety1].includes(indexSociety2)) {
      indexSociety2 = this.rand(0, this.societies.length - 1);
    }

    let indexSociety3 = this.rand(0, this.societies.length - 1);
    while ([indexSociety1, indexSociety2].includes(indexSociety3)) {
      indexSociety3 = this.rand(0, this.societies.length - 1);
    }

    let indexSociety4 = this.rand(0, this.societies.length - 1);
    while ([indexSociety1, indexSociety2, indexSociety3].includes(indexSociety4)) {
      indexSociety4 = this.rand(0, this.societies.length - 1);
    }

    this.wizardCurrentSocieties.push(this.societies[indexSociety1]);
    this.wizardCurrentSocieties.push(this.societies[indexSociety2]);
    this.wizardCurrentSocieties.push(this.societies[indexSociety3]);
    this.wizardCurrentSocieties.push(this.societies[indexSociety4]);
  }

  public wizardFourthStep(): void {
    this.wizardStep = 5;
  }

  public wizardFifthStep(): void {
    this.wizardStep = 6;
    this.retrieveAffectations();
  }

  public saveCharacter(): void {
    const currentAffectation = this.newCharacterForm.affectation;

    // On désactive l'affectation pour les autres joueurs
    currentAffectation.used = true;
    this.afs.doc('paranoia-affectations/' + currentAffectation.id).update(currentAffectation);

    this.characterDoc.set(this.newCharacterForm);
    this.wizardStep = 7;

    setTimeout(() => {
      this.tryToFindACharacter();
    }, 2000);
  }

  public goToGame(): void {
    this.mode = 'game';
    this.retrieveActiveCharacters();
    this.initModalActionsColors();
    this.retrieveActiveImage();
    this.paranoiaService.initParanoiaLogs();
    this.initModalEvents();
    setTimeout(() => {
      $('[tooltip]').tooltip();
    }, 1000);
  }

  public startSkillsStep2(): void {
    // Une moyenne de 7 par skill = 7*4 = 28
    this.wizardSkillsRemaining = 28;

    if (this.currentUser.email === 'melodie.ea@gmail.com') {
      this.wizardSkillsRemaining = 32;
    }

    // 28 * 0.5s = 14 secondes d'animation
    const intervalSkills = setInterval(() => {
      if (this.wizardSkillsRemaining <= 0) {
        this.wizardCurrentSkillsUp = -1;

        if (this.newCharacterForm.skills.violence === 10) {
          // 10 = 7
          this.newCharacterForm.maxHitpoints = 7;
        } else if (this.newCharacterForm.skills.violence >= 8) {
          // 8-9 = 6
          this.newCharacterForm.maxHitpoints = 6;
        } else if (this.newCharacterForm.skills.violence >= 6) {
          // 6-7 = 5
          this.newCharacterForm.maxHitpoints = 5;
        } else if (this.newCharacterForm.skills.violence >= 4) {
          // 4-5 = 4
          this.newCharacterForm.maxHitpoints = 4;
        } else {
          // 1-3 = 3
          this.newCharacterForm.maxHitpoints = 3;
        }

        clearInterval(intervalSkills);
        return;
      }

      let index = this.rand(0, 3);
      const indexToMap = ['violence', 'audace', 'neurones', 'mecanique'];

      // Maximum 10 dans un skill
      while (this.newCharacterForm.skills[indexToMap[index]] === 10) {
        index = this.rand(0, 3);
      }

      // Pour avoir minimum 1 dans un skill et laisser un éventuel "0" jusqu'au plus tard
      if (this.wizardSkillsRemaining === 4 && this.newCharacterForm.skills.violence === 0) {
        index = 0;
      } else if (this.wizardSkillsRemaining === 3 && this.newCharacterForm.skills.audace === 0) {
        index = 1;
      } else if (this.wizardSkillsRemaining === 2 && this.newCharacterForm.skills.neurones === 0) {
        index = 2;
      } else if (this.wizardSkillsRemaining === 1 && this.newCharacterForm.skills.mecanique === 0) {
        index = 3;
      }

      this.newCharacterForm.skills[indexToMap[index]] += 1;
      this.wizardCurrentSkillsUp = index;
      this.wizardSkillsRemaining -= 1;
    }, 500);
  }

  public startStuffStep5(): void {
    this.wizardStuffRemaining = 5 + defaultStuff.length;

    const indexes = [];

    let index = 0;
    for (const s of defaultStuff) {
      setTimeout(() => {
        this.wizardStuffRemaining -= 1;
        this.newCharacterForm.stuff.push(s);
      }, index * 1000);
      index++;
    }

    setTimeout(() => {
      // 5 * 1s = 5 secondes d'animation
      const intervalSkills = setInterval(() => {
        if (this.wizardStuffRemaining <= 0) {
          clearInterval(intervalSkills);
          return;
        }

        let indexItem = this.rand(0, this.stuff.length - 1);
        while (indexes.includes(indexItem)) {
          indexItem = this.rand(0, this.stuff.length - 1);
        }

        indexes.push(indexItem);
        this.newCharacterForm.stuff.push(this.stuff[indexItem]);
        this.wizardStuffRemaining -= 1;
      }, 1000);
    }, (defaultStuff.length - 1) * 1000);
  }

  public computerDontExcuse(): void {
    this.characterDoc.update({
      traitor: this.currentCharacter.traitor + 1
    });

    const characterName = this.getCurrentCharacterName();
    const wording = `Traitrise : ${characterName} ne s'excuse pas auprès de l'ordinateur.`;
    this.paranoiaService.addParanoiaLog(wording, this.currentUser);
    $('#modalContact').modal('hide');
  }

  public computerExcuse(): void {
    if (this.currentCharacter.level === 'R') {
      this.characterDoc.update({
        traitor: this.currentCharacter.traitor + 1
      });

      const characterName = this.getCurrentCharacterName();
      let wording = `Traitrise : ${characterName} s'excuse auprès de l'ordinateur sans en avoir l'`;
      wording += this.paranoiaService.transformToAccreditationColor('accréditation', 2);
      wording += `.`;
      this.paranoiaService.addParanoiaLog(wording, this.currentUser);
    }
    $('#modalContact').modal('hide');
  }

  public inspectCharacter(character: Clarificateur): void {
    this.currentInspection = character;
  }

  private initEyes(): void {
    $('body').mousemove((event: any) => {
      const eyes = $('.eye');

      if (!eyes || !eyes.length) {
        return;
      }

      eyes.each((_: number, element: any) => {
        const eye = $(element);
        const x = (eye.offset().left) + (eye.width() / 2);
        const y = (eye.offset().top) + (eye.height() / 2);
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
          '-webkit-transform': 'rotate(' + rot + 'deg)',
          '-moz-transform': 'rotate(' + rot + 'deg)',
          '-ms-transform': 'rotate(' + rot + 'deg)',
          'transform': 'rotate(' + rot + 'deg)',
        });
      });
    });
  }

  private initModalActionsColors(): void {
    this.intervalModalActionsColors = setInterval(() => {
      this.modalActions1Color++;
      this.modalActions2Color++;
      this.modalActions3Color++;
      this.modalActions4Color++;

      if (this.modalActions1Color === 5) {
        this.modalActions1Color = 1;
      }
      if (this.modalActions2Color === 5) {
        this.modalActions2Color = 1;
      }
      if (this.modalActions3Color === 5) {
        this.modalActions3Color = 1;
      }
      if (this.modalActions4Color === 5) {
        this.modalActions4Color = 1;
      }
    }, 500);
  }

  private initAll(): void {
    if (this.init) {
      return;
    }

    this.init = true;
    this.tryToFindACharacter();
  }

  private tryToFindACharacter(): void {
    let key = this.currentUser.uuid;
    if (this.currentUser.displayName) {
      key = this.currentUser.displayName.toLowerCase().replace(/ /g, '');
    }

    this.characterDoc = this.afs.doc<any>(`paranoia-characters/${key}`);
    const character = this.characterDoc.valueChanges();
    character.pipe(first()).subscribe((a) => {
      if (!a) {
        this.initWizard();
        return;
      }

      this.currentCharacter = a;
      character.subscribe((characterUpdated) => {
        this.currentCharacter = characterUpdated;
      });

      this.goToGame();
    });
  }

  private initWizard(): void {
    this.mode = 'wizard';

    this.wizardStep = 1;
    this.wizardRemainingSeconds = 60;

    setTimeout(() => {
      this.reduceWizardRemainingSeconds();
    }, 10);
  }

  private reduceWizardRemainingSeconds(): void {
    if (this.wizardStep !== 1) {
      return;
    }

    this.wizardRemainingSeconds -= 0.01;

    if (this.wizardRemainingSeconds > 0) {
      setTimeout(() => {
        this.reduceWizardRemainingSeconds();
      }, 10);
    } else {
      this.wizardRemainingSeconds = 0;
      this.newCharacterForm.traitor += 1;
    }
  }

  private reduceTimerRemainingSeconds(): void {
    this.timerRemainingSeconds -= 0.01;

    if (this.timerRemainingSeconds > 0) {
      setTimeout(() => {
        this.reduceTimerRemainingSeconds();
      }, 10);
    } else {
      this.timerRemainingSeconds = 0;
    }
  }

  private rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private retrieveActiveCharacters(): void {
    this.charactersCollection = this.afs.collection<Clarificateur>('paranoia-characters', (ref) => {
      return ref.where('active', '==', true);
    }).valueChanges();
  }

  private retrieveAffectations(): void {
    this.affectationsCollection = this.afs.collection<any>('paranoia-affectations').valueChanges();
  }

  private retrieveActiveImage(): void {
    this.afs.doc('paranoia-game/screen').valueChanges().subscribe((a: any) => {
      this.screen.image = a.image;
      this.screen.text = a.text;
      this.screen.timer = a.timer;
      console.warn('retrieveActiveImage')
      if (a.timer !== -1) {
        console.warn('timer !== -1', a.timer)
        this.timerRemainingSeconds = a.timer;
        this.reduceTimerRemainingSeconds();
      }
    });
  }

  private getCurrentCharacterName(): string {
    return `${this.currentCharacter.name}-${this.currentCharacter.level}-${this.currentCharacter.sector}`;
  }

  private initModalEvents(): void {
    $('#modalDices').on('show.bs.modal', () => {
      this.characterDoc.update({ currentAction: 'modalDices' });
    });
    $('#modalDices').on('hidden.bs.modal', () => {
      this.characterDoc.update({ currentAction: null });
    });

    $('#modalInspect').on('show.bs.modal', () => {
      this.characterDoc.update({ currentAction: 'modalInspect' });
    });
    $('#modalInspect').on('hidden.bs.modal', () => {
      this.characterDoc.update({ currentAction: null });
    });

    $('#modalCharacter').on('show.bs.modal', () => {
      this.characterDoc.update({ currentAction: 'modalCharacter' });
    });
    $('#modalCharacter').on('hidden.bs.modal', () => {
      this.characterDoc.update({ currentAction: null });
    });

    $('#modalContact').on('show.bs.modal', () => {
      this.characterDoc.update({ currentAction: 'modalContact' });
    });
    $('#modalContact').on('hidden.bs.modal', () => {
      this.characterDoc.update({ currentAction: null });
    });
  }
}
