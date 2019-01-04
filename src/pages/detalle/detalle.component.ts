import { Component, OnInit } from '@angular/core'; 
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaTareasService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html',
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: Lista;
    
    constructor ( 
        public navCtrl : NavController,
        public navParm : NavParams,
        public _listaTareas : ListaTareasService,
        public actionSheetCtrl : ActionSheetController
    ) { 
        this.idx = this.navParm.get('idx');
        this.lista = this.navParm.get('lista');
    }

    ngOnInit() {} 

    actualizar ( item:ListaItem) {
        // console.log(item);
        item.terminado = !item.terminado;

        let todosMarcados = true;

        for ( let item of this.lista.items ) {
            if ( !item.terminado ) {
                todosMarcados = false;
                break;
            }            
        }

        this.lista.terminado = todosMarcados;
        console.log(this.lista);
        this._listaTareas.actualizarData();
    }

    borrarItem() {
        const actionSheet = this.actionSheetCtrl.create({
          title: this.lista.nombre,
          // message : '¿Está seguro de eliminar la lista?',
          buttons: [
            {
              text: 'Eliminar',
              role: 'destructive',
              handler: () => {
                // console.log('Destructive clicked');
                this._listaTareas.eliminarLista( this.idx ); 
                this.navCtrl.pop();
              }
            },{ 
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              } 
            }
          ]
        });
        actionSheet.present();
      }
}
