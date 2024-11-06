import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventService {
    private events: Event[] = [
        {
            id: 1,
            title: 'Algorythm+| How to Navigate AI Landscape?',
            date: new Date('2024-11-8'),
            category: {id: 1, description: 'Evento de IA y algoritmos aplicados a ella'},
            location: 'Algorythm Online Classroom',
            price: 49.99,
        }
        {
            id: 2,
            title: 'Algorythm+| How to Navigate AI Landscape?',
            date: new Date('2024-11-8'),
            category: {id: 1, description: 'Evento de IA y algoritmos aplicados a ella'},
            location: 'Algorythm Online Classroom',
            price: 49.99,
        }
        {
            id: 3,
            title: 'Algorythm+| How to Navigate AI Landscape?',
            date: new Date('2024-11-8'),
            category: {id: 1, description: 'Evento de IA y algoritmos aplicados a ella'},
            location: 'Algorythm Online Classroom',
            price: 49.99,
        }
        {
            id: 4,
            title: 'Algorythm+| How to Navigate AI Landscape?',
            date: new Date('2024-11-8'),
            category: {id: 1, description: 'Evento de IA y algoritmos aplicados a ella'},
            location: 'Algorythm Online Classroom',
            price: 49.99,
        }
    ];

    constructor() { }
}