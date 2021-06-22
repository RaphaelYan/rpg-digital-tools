export interface Affectation {
  id: number;
  name: string;
  description: string;
  used: boolean;
}

export interface Power {
  id: number;
  name: string;
  description: string;
  active: boolean;
}

export interface Society {
  id: number;
  name: string;
  description: string;
}

export interface Skills {
  violence: number;
  audace: number;
  neurones: number;
  mecanique: number;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  used: boolean;
}

export interface Clarificateur {
  avatar: string;
  cloneNumber: number;
  level: string;
  name: string; // max 10 chars
  sector: string; // max 3 chars
  affectation: Affectation;
  traitor: number;
  skills: Skills;
  power: Power;
  society: Society;
  stuff: Item[];
  maxHitpoints: number;
  active: boolean;
  currentAction: string;
}
