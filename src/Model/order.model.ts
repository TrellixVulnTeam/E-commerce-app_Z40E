import { Injectable } from '@angular/core';
import { Cart } from 'src/app/store/cart.model';

@Injectable()
export class order {
  public id!: number;
  public name!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public country!: string;
  public shipped!: boolean;

  constructor(public cart: Cart) {}

  clear() {
    this.id = null!;
    this.name = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.country = '';
    this.shipped = false;

    this.cart.clear();
  }
}
