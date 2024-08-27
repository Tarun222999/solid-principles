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
export class Order{
    products:Product[]=[]

    addProduct(product:Product){
        this.products.push(product)
    }
    getProduct(){
        return this.products;

    }
    removeProduct(productId:string){
        this.products=this.products.filter((prod)=>prod.id!==productId)
    }
}