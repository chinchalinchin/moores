import { Component } from '@angular/core';
import { InventoryComponent } from '../../components/inventory/inventory.component';

@Component({
  selector                    :'app-estate',
  imports                     : [ 
                                InventoryComponent 
                              ],
  templateUrl                 : './estate.component.html',
  styleUrl                    : './estate.component.scss'
})
export class EstateComponent {
  private mode : String       = "inventory"

  public inventoryMode()      : Boolean {
    return this.mode == "inventory"
  }
}
