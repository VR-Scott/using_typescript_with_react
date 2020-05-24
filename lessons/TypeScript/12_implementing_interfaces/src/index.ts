import { ShoppingCart } from "./lib/shopping_cart";
import { calculateTotalAmount } from "./lib/calculate_total_amount";
import { Order } from "./lib/order";

const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);
const order = new Order();
console.log(`The order's total is ${calculateTotalAmount(order)}`);