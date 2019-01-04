import { Component, OnInit } from '@angular/core';

import { ListaTareasService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';

import { AgregarComponent } from '../agregar/agregar';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
})

export class PendientesComponent implements OnInit {
    
    constructor (
        private _listaTareas : ListaTareasService,
        private navCtrl : NavController ) { }

    ngOnInit () {}

    irAgregar () {
        this.navCtrl.push(AgregarComponent);
    }

    verDetalle ( lista, idx ) {
        this.navCtrl.push(DetalleComponent, { lista, idx });
    }
}