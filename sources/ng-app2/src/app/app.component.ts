import { Component, OnInit } from '@angular/core';
import { Product } from './Entities';
​
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' // path relatif à la racine (sinon ne fonctionne pas)
})
​
export class AppComponent implements OnInit {
    private title: string = "Titre de la page principale";
    private products: Product[];​
​         private oCategories: Product[] = [];​
private iCategories: Product[] = [];​

    /*
    private categories:Category[] = [
        {
            id: 1,
            name: "outdoor"
        } ,
        {
            id: 2,
            name: "indoor"
        }
    ];
    */
​
​
    constructor() { // init de classes ou de services
​
    }
​
    ngOnInit() {
​
        this.products = [
            {
                id: 1,
                name: "veste longue",
                price: 25.50,
                color: "black",
                size: "XL",
                categorie: [{ id: 1, name: "outdoor" }]
            },
            {
                id: 2,
                name: "veste courte",
                price: 20.90,
                color: "white",
                size: "L",
                categorie: [{ id: 2, name: "indoor" }]
            },
            {
                id: 3,
                name: "pantalon",
                price: 15.80,
                color: "grey",
                size: "M",
                categorie: [{ id: 3, name: "outdoor" }, { id: 4, name: "iout" }]
            }
         ];
​
        
​
        this.products.forEach(_ => {
            _.categorie.forEach(x => {
                x.name == 'outdoor' ? this.oCategories.push(_) : this.iCategories.push(_)
            })
        })
​
        console.log(this.products);
        console.log(this.oCategories);
        console.log(this.iCategories);      
    }
​
​
    // ngOnDestroy() {
​
    // }
​
}




