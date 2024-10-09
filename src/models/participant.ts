import { Event } from './event';

export interface Participant {
  id: string;
  name: string;
  email: string;
}

export class ParticipantModel implements Participant {
  id: string;
  name: string;
  email: string;

  constructor(participant: Participant) {
    this.id = participant.id;
    this.name = participant.name;
    this.email = participant.email;
  }
}

export class ParticipantService {
  private participants: Participant[] = [];

  createParticipant(participant: Participant): Participant {
    const newParticipant = new ParticipantModel(participant);
    this.participants.push(newParticipant);
    return newParticipant;
  }

  updateParticipant(participant: Participant): Participant {
    const index = this.participants.findIndex((p) => p.id === participant.id);
    if (index < 0) {
      throw new Error('Nincs találat a résztvevőre');
    }
    this.participants[index] = participant;
    return participant;
  }

  deleteParticipant(id: string): void {
    const index = this.participants.findIndex((p) => p.id === id);
    if (index < 0) {
      throw new Error('Nincs találat a résztvevőre');
    }
    this.participants.splice(index, 1);
  }
  
  getParticipants(): Participant[] {
    return this.participants;
  }

  getParticipant(id: string): Participant {
    const participant = this.participants.find((p) => p.id === id);
    if (!participant) {
      throw new Error('Nincs találat a résztvevőre');
    }
    return participant;
  }

  addParticipantToEvent(event: Event, participant: Participant): Event {
    const index = this.participants.findIndex((p) => p.id === participant.id);
    if (index < 0) {
      throw new Error('Nincs találat a résztvevőre');
    }
    const eventIndex = event.participants.findIndex((p) => p.id === participant.id);
    if (eventIndex >= 0) {
      throw new Error('A résztvevő már regisztrálva van az eseményre');
    }
    event.participants.push(participant);
    return event;
  }
}

