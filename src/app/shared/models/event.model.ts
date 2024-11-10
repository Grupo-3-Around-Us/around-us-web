import { Category } from "./category.model";
import { EventDescription } from "./event-description.model";
import { Programation } from "./programation.model";

export interface Event {
    id: number;
    name: string;
    programation: Programation;
    price: number;
    imageUrl: string;
    category: Category;
    isOpen: boolean;
    eventdescription: EventDescription;
    eventLink: string;
}
