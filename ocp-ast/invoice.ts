export class Product{
    name:string;
    price:number;
    id:string

    constructor(id:string,name:string,price:number){
        this.id=id
        this.name=name
        this.price=price
    }
}
interface IInvoiceStrategy{
    generatePayment(products:Product[],amount:number):void
}


class Detailedinvoice implements IInvoiceStrategy{
    generatePayment(products: Product[], amount: number): void {
        console.log(`
            Invoice Date: ${new Date().toDateString()}
            -------------------------------
            Product Name\tPrice
                            `);
            
                    products.forEach((product) => {
                        console.log(`${product.name}\t\t${product.price}`);
                    });
                    console.log('-------------------------------');
                    console.log(`Total: ${amount}`);
    }
}

class SimpleInvoice implements IInvoiceStrategy{
    generatePayment(products: Product[], amount: number): void {
        console.log("simple invoice",amount)
    }
}


export class Invoice {
    processor:IInvoiceStrategy
    constructor(invoiceProcessor:IInvoiceStrategy){
        this.processor=invoiceProcessor
    }
    generateInvoice(products: Product[], amount: number) {
        this.processor.generatePayment(products,amount)
    }
}


const detailedinvoiceinstance=new Detailedinvoice()
const simpleinvoiceinstance=new SimpleInvoice()
const product1=new Product('1','phone1',100)
const product2=new Product('2','phone1',100)
const product3=new Product('3','phone1',100)
const product4=new Product('1','phone1',100)

const arr:Product[]=[]

arr.push(product1)
arr.push(product2)
arr.push(product3)

const invoiceinstance=new Invoice(detailedinvoiceinstance)
const invoiceinstance2=new Invoice(simpleinvoiceinstance)

invoiceinstance.generateInvoice(arr,500)
invoiceinstance2.generateInvoice(arr,1000)

