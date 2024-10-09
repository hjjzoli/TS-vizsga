import { Participant } from './participant';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: Participant[];
}

export class EventModel implements Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: Participant[];

  constructor(event: Event) {
    this.id = event.id;
    this.title = event.title;
    this.description = event.description;
    this.date = event.date;
    this.location = event.location;
    this.participants = event.participants;
  }
}

export class EventService {
  private events: Event[] = [];

  createEvent(event: Event): Event {
    const newEvent = new EventModel(event);
    this.events.push(newEvent);
    return newEvent;
  }

  updateEvent(event: Event): Event {
    const index = this.events.findIndex((e) => e.id === event.id);
    if (index < 0) {
      throw new Error('Event not found');
    }
    this.events[index] = event;
    return event;
  }

  deleteEvent(id: string): void {
    const index = this.events.findIndex((e) => e.id === id);
    if (index < 0) {
      throw new Error('Event not found');
    }
    this.events.splice(index, 1);
  }

  getEvents(): Event[] {
    return this.events;
  }

  getEvent(id: string): Event {
    const event = this.events.find((e) => e.id === id);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  }
}

