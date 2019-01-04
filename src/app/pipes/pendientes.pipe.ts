import { Pipe, PipeTransform } from "@angular/core";
import { Lista } from '../clases/listas';

@Pipe({
    name: 'pendientes',
    pure: false
})

export class PendientesPipe implements PipeTransform {
    transform ( listas:Lista[], estado: boolean = false ): Lista[] {

        const nuevaLista:Lista[] = [];

        for( let lista of listas ) {
            
            if ( lista.terminado == estado) {

                nuevaLista.push( lista );

            }

        }

        return nuevaLista;

    }

}