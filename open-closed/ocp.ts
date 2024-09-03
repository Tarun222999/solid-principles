interface IPaymentProcessor{
    processPayment(amount:number):void
}

class CreditCardProcessor implements IPaymentProcessor{
    processPayment(amount: number) {
        console.log(`Processing credit card payment of ${amount}`);
    }

}

class PaypalProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing paypal payment of ${amount}`);
    }
}

class PaymentProcessor{

    processor:IPaymentProcessor
    constructor(paymentProcessor:IPaymentProcessor){
        this.processor=paymentProcessor

    }
    processPayment(amount:number){
      this.processor.processPayment(amount)
    }
}



const creditcardprocessor= new CreditCardProcessor()
const paypalProcessor = new PaypalProcessor();
const processor= new PaymentProcessor(creditcardprocessor)
processor.processPayment(100)