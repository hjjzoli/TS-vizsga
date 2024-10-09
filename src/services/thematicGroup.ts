import { Event } from '../models/event';

export interface ThematicGroup {
  id: string;
  name: string;
  events: Event[];
}

export class ThematicGroupModel implements ThematicGroup {
  id: string;
  name: string;
  events: Event[];

  constructor(thematicGroup: ThematicGroup) {
    this.id = thematicGroup.id;
    this.name = thematicGroup.name;
    this.events = thematicGroup.events;
  }
}

export class ThematicGroupService {
  private thematicGroups: ThematicGroup[] = [];

  createThematicGroup(thematicGroup: ThematicGroup): ThematicGroup {
    const newThematicGroup = new ThematicGroupModel(thematicGroup);
    this.thematicGroups.push(newThematicGroup);
    return newThematicGroup;
  }

  updateThematicGroup(thematicGroup: ThematicGroup): ThematicGroup {
    const index = this.thematicGroups.findIndex((tg) => tg.id === thematicGroup.id);
    if (index < 0) {
      throw new Error('Tematikus csoport nem található');
    }
    this.thematicGroups[index] = thematicGroup;
    return thematicGroup;
  }

  deleteThematicGroup(id: string): void {
    const index = this.thematicGroups.findIndex((tg) => tg.id === id);
    if (index < 0) {
      throw new Error('Tematikus csoport nem található');
    }
    this.thematicGroups.splice(index, 1);
  }

  getThematicGroups(): ThematicGroup[] {
    return this.thematicGroups;
  }

  getThematicGroup(id: string): ThematicGroup {
    const thematicGroup = this.thematicGroups.find((tg) => tg.id === id);
    if (!thematicGroup) {
      throw new Error('Tematikus csoport nem található');
    }
    return thematicGroup;
  }

  addEventToThematicGroup(thematicGroup: ThematicGroup, event: Event): ThematicGroup {
    const index = this.thematicGroups.findIndex((tg) => tg.id === thematicGroup.id);
    if (index < 0) {
      throw new Error('Tematikus csoport nem található');
    }
    this.thematicGroups[index].events.push(event);
    return this.thematicGroups[index];
  }
}