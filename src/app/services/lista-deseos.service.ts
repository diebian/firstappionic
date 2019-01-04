import { Injectable } from "@angular/core";

import { Lista } from '../clases/listas'

@Injectable()

export class ListaTareasService {

    listas: Lista[] = [];

    constructor() {

        // let lista1 = new Lista('Compras');
        // let lista2 = new Lista('Ventas');
        // let lista3 = new Lista('Juegos');
        // console.log(lista1);

        // this.listas.push( lista1 );
        // this.listas.push( lista2 );
        // this.listas.push( lista3 );

        // console.log('Servicio inicializado');

        this.cargarData();

    }

    actualizarData () {
        localStorage.setItem( 'data', JSON.stringify(this.listas) );
    }
    
    cargarData () {
        if (localStorage.getItem( 'data' )) {
            this.listas = JSON.parse(localStorage.getItem( 'data' ));
        }
    }

    agregarLista ( lista:Lista ){
        console.log(lista);
        this.listas.push( lista );
        this.actualizarData();
    } 

    eliminarLista (idx:number ) {
        this.listas.splice(idx,1);
        this.actualizarData();
    }
}