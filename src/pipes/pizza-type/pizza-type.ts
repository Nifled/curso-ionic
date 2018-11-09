import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PizzaTypePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pizzaType',
})
export class PizzaTypePipe implements PipeTransform {
  transform(pizzas: Array<any>, type: number) {
    if (!pizzas) return [];
    return pizzas.filter(p => p.type === type);
  }
  // transform(pizzas: Array<any>, condition: number) {
  //   if (!pizzas) return [];
  //   return pizzas.filter(p => p.type === condition.type);
  // }
}
