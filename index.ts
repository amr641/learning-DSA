// // console.log(list.dataStore);
// //
// //
import fs from "fs";
// abstract class Food {
//   constructor(public foodTitle: string, public price: string) {}
//   abstract getCookungTime(): void;
// }
// class Pizza extends Food {
//   constructor(public foodTitle: string, public price: string) {
//     super(foodTitle, price);
//   }
//   getCookungTime(): void {
//     console.log(`${this.foodTitle} will be cooked in...min`);
//   }
// }
// class burger extends Food {
//   constructor(public foodTitle: string, public price: string, souce: string) {
//     super(foodTitle, price);
//   }
//   getCookungTime(): void {
//     console.log(`${this.foodTitle} will be cooked in...min`);
//   }
// }

// abstract class Player {
//   constructor(public name: string) {}
//   attack(): void {
//     console.log("attacking");
//   }
// }

// class Subzero extends Player {
//   get getSpears(): number {
//     return this._spears;
//   }
//   set reloadSpears(spears: number) {
//     this._spears += spears;
//   }
//   constructor(public name: string, private _spears: number) {
//     super(name);
//   }

//   attack(): void {
//     this._spears--;
//     super.attack();
//     console.log("attacking with spears");
//   }
// }

// class Gladiator extends Player {
//   get getAxeDura(): number {
//     return this._axeDura;
//   }
//   set repairAxes(spears: number) {
//     this._axeDura += spears;
//   }
//   constructor(public name: string, private _axeDura: number) {
//     super(name);
//   }

//   attack(): void {
//     this._axeDura--;
//     super.attack();
//     console.log("attacking with axes");
//   }
// }
// let warrior = new Subzero("mofasa", 5);
// let ahmed = new Gladiator("ahmed", 80);

// // ahmed.attack()
// // ahmed.attack()
// // ahmed.attack()
// // ahmed.repairAxes= 20
// // console.log(ahmed.getAxeDura);
// const returnValue = function <genericType>(value: genericType): genericType {
//   return value;
// };
// // console.log(returnValue<number|string>(4));
// // console.log(returnValue<string>("4"));
// function returnType<T, s>(value0: T, value1: s): {} {
//   return { result: `the value0 is ${value0} and the value1 is ${value1}` };
// }
// returnType<string, number>("amr", 5);

// class Hamada<T = number> {
//   constructor(public name: T) {}
//   showMsg(msg: T): void {
//     console.log(`${msg}  ${this.name}`);
//   }
// }
// let userOne = new Hamada<string | number>("amr");
// // userOne.showMsg("hello")
// interface IBook {
//   title: string;
//   price: number;
//   isbn: string;
// }
// interface IGame {
//   title: string;
//   price: number;
//   style: string;
// }

// class Collection<T> {
//   public data: T[] = [];
//   addItem(value: T): void {
//     this.data.push(value);
//   }
// }
// // passing the interface as a parameter
// // thats sound so damnnn good❤️❤️
// let itemOne = new Collection<IBook>();
// itemOne.addItem({
//   title: "atomic habits",
//   isbn: "sssaa",
//   price: 200,
// });
// itemOne.addItem({
//   title: "MFs",
//   isbn: "sssaa",
//   price: 200,
// });
// // console.log(itemOne.data);
// let itemTwo = new Collection<IGame>();
// itemTwo.addItem({
//   price: 400,
//   style: "zombies",
//   title: "attack on zombies",
// });
// console.log(itemTwo.data);

//LIST DATA STRUCTURE 📃🥂🥂🥳🎉

// class List<T> {
//   private dataStore: T[];
//   pos: number;
//   constructor() {
//     this.dataStore = [];
//     this.pos = 0;
//   }
//   static listSize: number = 0;
//   append(ele: T): void {
//     this.dataStore.push(ele);
//     List.listSize++;
//   }
//   get listLength(): number {
//     return List.listSize;
//   }
//   get listItems() {
//     return this.dataStore;
//   }
//   find(ele: T): number {
//     for (let i: number = 0; i < List.listSize; i++) {
//       if (ele == this.dataStore[i]) return i;
//     }
//     return -1;
//   }
//   remove(ele: T): boolean {
//     let foundElePosition = this.find(ele);
//     if (foundElePosition <= -1) return false;
//     --List.listSize;
//     this.dataStore.splice(foundElePosition, 1);
//     return true;
//   }
//   insert(ele: T, after: T | any): boolean {
//     let nextPosition = this.find(after) + 1;
//     if (nextPosition <= -1) return false;
//     this.dataStore.splice(nextPosition, 0, ele);
//     List.listSize++;
//     return true;
//   }
//   clear() {
//     this.dataStore = [];
//     List.listSize = 0;
//   }
//   contains(element: T): boolean {
//     let foundEle = this.find(element);
//     return foundEle <= -1 ? false : true;
//   }
//   front() {
//     this.pos = 0;
//   }
//   end() {
//     this.pos = List.listSize - 1;
//   }
//   prev() {
//     if (this.pos > 0) {
//       --this.pos;
//     }
//   }
//   next() {
//     if (this.pos < List.listSize - 1) {
//       ++this.pos;
//     }
//   }
//   currPos() {
//     return this.pos;
//   }
//   moveTo(position: number) {
//     this.pos = position;
//   }
//   getElement() {
//     return this.dataStore[this.pos];
//   }
// }

// let movies = fs
//   .readFileSync("films.txt", "utf-8")
//   .split("\n")
//   .map((ele) => {
//     ele = ele.trim();
//     ele = ele.replace(/^\d+\.\s*/g, "").replace(/\r/g, "");
//     return ele;
//   });
// let customers = new List();
// class Customer {
//   constructor(public name: string, public movie: string) {}
// }
// let moviesList = new List();
// for (let i = 0; i < movies.length; i++) {
//   moviesList.append(movies[i]);
// }
// interface ICustomer {
//   name: string;
//   movie: string;
// }
// let rentedMovies = new List();
// function checkOut(
//   name: string,
//   movie: string,
//   filmList: any,
//   customerList: any
// ) {
//   if (filmList.contains(movie)) {
//     let c = new Customer(name, movie);
//     filmList.remove(movie);
//     customerList.append(c);
//     rentedMovies.append(movie);
//     console.log(filmList.listItems);
//     checkIn( rentedMovies.listItems)
//     console.log(filmList.listItems);

//   } else {
//     console.log(movie + " is not availabe");
//   }
// }
// console.log(moviesList);

// checkOut("amr", "Fight Club", moviesList, customers);
// function checkIn(rentedList:any){
//   for(let i=0 ;i>rentedList.length;i++){

//     rentedMovies.remove(rentedList[i])
//     moviesList.append(rentedList[i])
//   }
// }

// class ListStr {
//   public data: string[] = [];
//   static listSize:number= 0
//   append(ele: string): number|void {

//     if(!this.data.length)return this.data.push(ele)
//         if (ele[0] > this.data[this.data.length - 1][0]) {
//       this.data.push(ele);
//       List.listSize++
//     }else{
//       console.log( ele+" cannot be added");
//     }

//   }
// }

// class ListStr {
//   public data: string[] = [];
//   static listSize:number= 0
//   append(ele: string): number|void {

//     if(!this.data.length)return this.data.push(ele)
//         if (ele[0] < this.data[this.data.length - 1][0]) {
//       this.data.push(ele);
//       List.listSize++
//     }else{
//       console.log( ele+" cannot be added");
//     }

//   }
// }
// let names= new ListStr()

// names.append("sayed")
// names.append("gad")
// names.append("amr")
// console.log(names.data);
// enum Gender {
//   male = "male",
//   female = "female",
// }
// interface IPerson {
//   name: string;
//   gender: string;
// }
// class Person {
//   static data: IPerson[] = [];
//   static listSize: number = 0;
//   constructor(public name: string, public gender: Gender) {
//     Person.data.push({ name: this.name, gender: this.gender });
//     Person.listSize++;
//   }
//   static displayOnGender(gender: Gender): IPerson[] {
//      return this.data.filter((ele) => ele.gender == gender);
//    }
// }
// let personOne= new Person("amr",Gender.male)
// let personTwo= new Person("aya",Gender.female)
// let personThree= new Person("jana",Gender.female)
// let personFour= new Person("jody",Gender.female)
// let personFive= new Person("gad",Gender.male)
// let personSix= new Person("adam",Gender.male)
// let personSeven= new Person("ahmed",Gender.male)
// let personEight= new Person("yosef",Gender.male)
// let personNine= new Person("omar",Gender.male)
// let personTen= new Person("salma",Gender.female)
// console.log(Person.displayOnGender(Gender.female))

// STACK DATA STRUCTURE ❤️❤️
class Stack<T> {
  private stack: T[] = [];
  public stackSize: number = 0;
  public top: number = 0;
  public isEmpty(): boolean {
    if (!this.stackSize) {
      console.log(`stack is empty`);
      return true;
    }
    console.log("stack is not empty");
    return false;
  }
  addToStack(ele: T): void {
    this.stack[this.top++] = ele;
  }
  removeFromStack(): void | string | T {
    return this.stack[--this.top];
  }
  peek(): T {
    return this.stack[this.top - 1];
  }
  get stackData(): T[] {
    return this.stack;
  }
  clearStack(): void {
    this.top = 0;
  }
}

let palindromes = new Stack();
// function isPalindrome(str: string): boolean {
//   let arrOfchar = str.split("");
//   let rword = "";
//   for (let index: number = 0; index < arrOfchar.length; index++) {
//     palindromes.addToStack(arrOfchar[index]);
//   }
//   while (palindromes.top > 0) {
//     rword += palindromes.removeFromStack(); // removeFromStack
//   }

//   return str == rword ? true : false;
// }
// let str ="car"
// console.log(isPalindrome(str));
//  str ="recarecaer"
//  str ="car"
// let s= new Stack()
// function recurr(n:number):void{
// while(n>1){
// s.addToStack(n--)

// }

// }

// recurr(5)
function balanceTheExpress(unBalancedExpress: string) {
  let s = new Stack();
  let arr = unBalancedExpress.split("");
  for (let i = 0; i < arr.length; i++) {
    s.addToStack(arr[i]);
  }

  let expression = s.stackData.slice(
    s.stackData.findIndex((ele) => ele == "(")
  );
  if (expression.includes(")")) return "balanced expresstion";
  else return `missing parantheses after ${s.peek()}`;
}

// console.log(balanceTheExpress("2.3 + 23 / 12 + (3.14159 *.24"));
//
// Queues
enum Pos {
  front = "front",
  back = "back",
}
let arrOfDigits = [91, 46, 85, 15, 92, 35, 31, 22];
class Queue<T> {
  private data: T[] = [];
  constructor() {}
  enqueue(ele: T, pos: Pos): void {
    if (pos == "front") {
      this.data.unshift(ele);
    } else {
      this.data.push(ele);
    }
  }
  dequeue(pos: Pos): T | undefined {
    if (pos == "front") {
      return this.data.shift();
    }
    return this.data.pop();
  }
  get isEmpty(): boolean {
    if (this.data.length == 0) return true;
    return false;
  }
  peek(): T | string {
    if (this.isEmpty) return "queue is empty";
    return this.data[this.data.length - 1];
  }
  get queueData(): T[] {
    return this.data;
  }
}
// let dqueue =new Queue()
// function addingElements(arr:number[]){
//   for(let i:number =0 ;i<arr.length;i++){
//     dqueue.enqueue(arr[i],Pos.back)
//   }
//   // console.log(queue.data);

// }
// addingElements(arrOfDigits)
// dqueue.dequeue(Pos.back)
// dqueue.dequeue(Pos.front)
// dqueue.dequeue(Pos.front)
// console.log(dqueue.queueData);

// console.log(queue.peek());
const checkPalindrome = function (str: string): boolean {
  let arrOfChar = str.split("");
  let queue = new Queue();
  for (let i: number = 0; i < arrOfChar.length; i++) {
    queue.enqueue(arrOfChar[i], Pos.back);
  }
  let rword = "";
  while (queue.queueData.length > 0) {
    rword += queue.dequeue(Pos.back);
  }
  if (rword == str) return true;
  return false;
};
// console.log(checkPalindrome("dad"))
// ----
// |  |
// Linked lists
class Node<N> {
  public next: Node<N> | null = null;
  constructor(public item: N) {}
}

class LList<T> {
  public first: Node<T> | null = null;
  public last: Node<T> | null = null;
  public listSize: number = 0;
  public nodes: T[] = [];

  constructor() {}

  isEmpty(): boolean {
    return this.listSize === 0;
  }

  insertFirst(element: T): void {
    const newNode = new Node(element);
    this.nodes.push(newNode.item);
    if (this.isEmpty()) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.listSize++;
  }

  insertLast(element: T): void {
    const newNode = new Node(element);
    this.nodes.push(newNode.item);
    if (this.isEmpty()) {
      this.first = this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.listSize++;
  }

  insertAtPos(pos: number, element: T): string | void {
    if (pos < 0 || pos > this.listSize) {
      return `No such position`;
    }

    if (pos === 0) {
      this.insertFirst(element);
    } else if (pos === this.listSize) {
      this.insertLast(element);
    } else {
      const newNode = new Node(element);
      this.nodes.push(newNode.item);
      let currNode = this.first;
      for (let i = 1; i < pos; i++) {
        currNode = currNode!.next;
      }
      newNode.next = currNode!.next;
      currNode!.next = newNode;
      this.listSize++;
    }
  }
  removeFirst(): string | void {
    if (this.isEmpty()) return "the list is empty!";
    else if (this.listSize == 1) {
      this.first = this.last = null;
      this.listSize--;
    } else {
      this.first = this.first!.next;
      this.listSize--;
    }
  }
  removeLast() {
    if (this.isEmpty()) return "the list is empty!";
    else if (this.listSize == 1) {
      this.first = this.last = null;
      this.listSize--;
    }
    let curr = this.first;
    while (curr?.next != this.last) {
      curr = curr?.next!;
    }
    curr!.next = null;
    this.last = curr;
    this.listSize--;
  }
  removeWithKey(item: T): void | string {
    if (!this.nodes.includes(item)) {
      //if the item is not in the list
      console.error(`no such item in the linked list: ${item}`);
      return `no such item in the linked list: ${item}`;
    }
    let prev = this.first;
    if (this.isEmpty()) return "the list is empty!";
    else if (prev?.item == item) {
      this.removeFirst();
    } else {
      while (prev?.next?.item != item) {
        prev = prev!.next;
      }
      prev.next = prev.next.next;
      this.listSize--;
    }
  }

  print(): void {
    let curr = this.first;
    while (curr !== null) {
      console.log(curr.item);
      curr = curr.next;
    }
  }
  reverse() {
    let curr = this.first;
    let next = curr?.next;
    let previous: null | Node<T> = null;
    while (curr != null) {
      next = curr.next; //    once operation done [✅]
      curr.next = previous; //
      previous = curr; //       move man[➡️]  قدم وحصلني
      curr = next; //
    }
    this.first = previous;
  }
  search(item: T): number {
    let curr = this.first;
    let pos = 0;
    while (curr != null) {
      if (curr?.item == item) return pos;
      curr = curr?.next;
      pos++;
    }
    return -1;
  }
}

// Usage example
const linkedList = new LList<number>();
linkedList.insertFirst(100);
linkedList.insertFirst(100);
linkedList.insertFirst(130);
linkedList.insertFirst(140);
linkedList.insertLast(150);
linkedList.insertLast(160);
linkedList.reverse();
linkedList.print();
console.log(linkedList.search(1000)); // 120 100 150
// console.log("the list size is: " + linkedList.listSize); // Output: 10 50 30 40
