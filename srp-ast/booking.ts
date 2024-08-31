

export class Person{
    name: string;
    age:number; 
    id:number
    constructor(id:number,name:string,age:number){
        this.id=id
        this.name=name;
        this.age=age;
    }

    getprofile(){
        console.log(this.name,this.age,this.id)
    }
}


export class Room{
    id:number
    available:boolean
    constructor(id:number,available:boolean){
        this.id=id;
        this.available=available;
    }
}


export class Booking{
    bookinId:number
    roomId:number
    person:Person

    constructor(bookingId:number,roomId:number,person:Person){
        this.roomId=roomId;
        this.person=person;
        this.bookinId=bookingId
    }
}

export class Payment{
    paymentId:number;
    personId:number
    bookingId:number
    constructor(paymentId:number,personId:number,bookingId:number){
        this.paymentId=paymentId;
        this.personId=personId;
        this.bookingId=bookingId;
    }
}

export class Feedback{
    personId:number;
    bookingId:number;
    feedback:string
    constructor(personId:number,bookingId:number,feedback:string){
        this.bookingId=bookingId
        this.personId=personId
        this.feedback=feedback
    }
}

export class Payments{
    payments:Payment[]=[]

    paymentprocess(paymentid:number,personId:number,bookinId:number){
        const paymentobj=new Payment(paymentid,personId,bookinId)
        this.payments.push(paymentobj)
        console.log("payment done")
    }

    getallpayments(){
        return this.payments
    }

}

export class Feedbacks{
    feedbacks:Feedback[]=[]

    
    addfeedback(personId:number,bookingId:number,feedback:string){
        const feedbackobj=new Feedback(personId,bookingId,feedback)
        this.feedbacks.push(feedbackobj)
    }   

    getfeedbacks(){
        return this.feedbacks
    }
}

export class RoomManager {
    rooms: Room[] = [];

    addRoom(room: Room) {
        this.rooms.push(room);
    }

    isRoomAvailable(roomId: number): boolean {
        return this.rooms.some(room => room.id === roomId && room.available);
    }

    updateRoomAvailability(roomId: number, available: boolean) {
        this.rooms = this.rooms.map(room => {
            if (room.id === roomId) {
                return { ...room, available };
            }
            return room;
        });
    }
}

export class BookingManager {
    bookings: Booking[] = [];

    createBooking(roomId: number, person: Person, roomManager: RoomManager) {
        if (!roomManager.isRoomAvailable(roomId)) {
            console.log("Room is not available");
            return;
        }

        const bookingId = this.bookings.length + 1;
        const booking = new Booking(bookingId, roomId, person);
        this.bookings.push(booking);

        roomManager.updateRoomAvailability(roomId, false);
        console.log("Room is booked successfully");
    }

    cancelBooking(roomId: number, roomManager: RoomManager) {
        this.bookings = this.bookings.filter(booking => booking.roomId !== roomId);
        roomManager.updateRoomAvailability(roomId, true);
        console.log("Room booking canceled");
    }

    getBookings(): Booking[] {
        return this.bookings;
    }
}




const person1= new Person(1,"raj",18)
const person2= new Person(2,"baj",38)
const person3= new Person(3,"saj",48)
const person4= new Person(4,"laj",58)

person1.getprofile()

const room1=new Room(1,true)
const room2=new Room(2,true)
const room3=new Room(3,true)
const room4=new Room(4,true)

const hotelrooms= new RoomManager()
const hotelbookings=new BookingManager()
const hotelpayments=new Payments()
const hotelfeedbacks=new Feedbacks()
hotelrooms.addRoom(room1);
hotelrooms.addRoom(room2);


// Checking room availability
console.log(hotelrooms.isRoomAvailable(1)); // true

// Booking a room
hotelbookings.createBooking(1, person1, hotelrooms);
hotelpayments.paymentprocess(1,1,1)
// Checking room availability after booking
console.log(hotelrooms.isRoomAvailable(1)); // false
hotelpayments.paymentprocess(2,2,2)
// Canceling a booking
hotelbookings.cancelBooking(1, hotelrooms);


console.log("all payments", hotelpayments.getallpayments())







hotelfeedbacks.addfeedback(2,1,"good service")
console.log(hotelfeedbacks.getfeedbacks())

hotelrooms.updateRoomAvailability(2,true)

console.log(hotelrooms.isRoomAvailable(2))