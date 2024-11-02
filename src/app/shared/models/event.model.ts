import { Category } from "./category.model";
import { Programation } from "./programation.model";

export interface Event {
    id: number;
    name: string;
    description: string;
    programation: Programation;
    price: number;
    imageUrl: string;
    category: Category;
    organizer: string[];
    isOpen: boolean;
}
