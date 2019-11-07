import { Category } from "./Category";

export class Product {
    id: number;
    name: string;
    price: number;
    color:string;
    size:string;
    category: Category[];
}