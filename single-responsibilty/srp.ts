import { Invoice } from "./invoice";
import { Product, Order } from "./order";
import { PaymentProcessor } from "./payment";
import { PricingCaluculator } from "./pricing";

const product1=new Product('1','phone1',100)
const product2=new Product('1','phone1',100)
const product3=new Product('1','phone1',100)
const product4=new Product('1','phone1',100)

const order= new Order()
order.addProduct(product1)
order.addProduct(product2)
order.addProduct(product3)
order.addProduct(product4)

const pricingcal= new PricingCaluculator()
const total=pricingcal.calculatePricing(order.getProduct())

const invoice=new Invoice()
invoice.generateInvoice(order.getProduct(),total)

const payment= new PaymentProcessor()
payment.processPayment(order)
