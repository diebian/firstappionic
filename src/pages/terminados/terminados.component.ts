import { Component, OnInit } from '@angular/core';

import { ListaTareasService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';

import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
})

export class TerminadosComponent implements OnInit {
    
    constructor (
        private _listaTareas : ListaTareasService,
        private navCtrl : NavController ) { }

    ngOnInit() {}

    verDetalle ( lista, idx ) {
        this.navCtrl.push(DetalleComponent, { lista, idx });
    }
}