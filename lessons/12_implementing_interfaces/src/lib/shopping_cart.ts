import { IOrder } from './calculate_total_amount';

export class ShoppingCart implements IOrder {
    calculateTotal() {
        return 100;
    }
}