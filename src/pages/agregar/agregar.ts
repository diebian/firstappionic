import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaTareasService } from '../../app/services/lista-deseos.service';

// import { stringify } from '@angular/compiler/src/util';

// @IonicPage()
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarComponent implements OnInit{

  nombreLista: string = "";
  nombreItem: string = "";

  items:ListaItem[] = [];


  constructor(
    public alertCtrl : AlertController,
    public navCtrl : NavController,
    public _listaTareas : ListaTareasService 
  ) {  }

  ngOnInit() {}

  agregar() {

    if (this.nombreItem.length == 0) 
    {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push( item );
    this.nombreItem = "";
    
  }

  borrarItem(idx: number) {
    this.items.splice(idx,1);
  }

  guardarLista() {
    // console.log(this.nombreLista.length);
    // const long = this.nombreLista.length;
    // console.log(long);
    if( this.nombreLista.length == 0 )
    {
      const alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    
    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

    // this._listaTareas.listas.push( lista );
    this._listaTareas.agregarLista( lista );
    this.navCtrl.pop();
    
  }

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
