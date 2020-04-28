import { IOrder } from "./calculate_total_amount";

export class Order implements IOrder{
    calculateTotal() {
        return 100;
    }
}