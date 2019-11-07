export class Category {
    id: number;
    name: string;
}

export class Product {
    id: number;
    name: string;
    price: number;
    color:string;
    size:string;
    categorie: Category[];
}