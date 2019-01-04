import { Injectable } from "@angular/core";

import { Lista } from '../clases/listas'

@Injectable()

export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() {

        let lista1 = new Lista('compras de supermercado');
        let lista2 = new Lista('juegos que comprar');
        let lista3 = new Lista('tareas de universidad');
        console.log(lista1);

        this.listas.push( lista1 );
        this.listas.push( lista2 );
        this.listas.push( lista3 );

        console.log('Servicio inicializado');

    }
}