// 1
interface BasicPerson {
  name: string;
  age: number;
  isStudent: boolean;
}

const person: BasicPerson = {
  name: "John Doe",
  age: 25,
  isStudent: false,
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const book: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
};

// 2
const StudentRecord: [string, number, boolean] = ["Alice", 22, true];

const Coordinate: [number, number] = [10, 20];

// 3
let unknownVar: unknown = "hello";

function toStringIfUnknown(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }
  return "Not a string";
}
console.log(toStringIfUnknown(unknownVar));

// 4
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function printDay(day: DaysOfWeek): void {
  console.log(DaysOfWeek[day]);
}
printDay(DaysOfWeek.Monday);


// 6
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  numberOfDoors: number;
  isElectric: boolean;
}

const car: Car = {
  make: "Tesla",
  model: "Model S",
  year: 2024,
  numberOfDoors: 4,
  isElectric: true,
};

// 7
type Address = {
  street: string;
  city: string;
  postalCode: string;
};

type PersonWithAddress = BasicPerson & { address: Address };

const personWithAddress: PersonWithAddress = {
  name: "Mark",
  age: 28,
  isStudent: true,
  address: {
    street: "Main St",
    city: "Springfield",
    postalCode: "12345",
  },
};

// 8
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled,
}

interface Order {
  orderId: number;
  status: OrderStatus;
  totalAmount: number;
}

interface Customer {
  customerId: number;
  name: string;
}

type CustomerOrder = Order & Customer;

const customerOrder: CustomerOrder = {
  orderId: 456,
  status: OrderStatus.Shipped,
  totalAmount: 150.0,
  customerId: 789,
  name: "Sarah",
};


/////////////////////////////////////////////

// 1. Person interfeysi
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

// Person interfeysidan foydalanib ob'ekt yaratish
const person1: Person = {
  name: "John Doe",
  age: 25,
  isStudent: false,
};

// 2. Book interfeysi
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

// Book interfeysidan foydalanib ob'ekt yaratish
const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
};


////////

// 1. number turidagi massiv
const numbers: number[] = [1, 2, 3, 4, 5];

// 2. Massivdagi sonlarning yig‘indisini hisoblaydigan funksiya
const sumNumbers = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// 3. string turidagi massiv
const fruits: string[] = ["apple", "banana", "cherry"];

// 4. Katta harf bilan qaytaruvchi funksiya
const capitalizeFruits = (arr: string[]): string[] => {
  return arr.map(fruit => fruit.toUpperCase());
};

////////

// 1. StudentRecord tuple
const studentRecord: [string, number, boolean] = ["Alice", 22, true];

// 2. Coordinate tuple
const coordinate: [number, number] = [10, 20];

///////

// 1. any turidagi o‘zgaruvchi
let randomValue: any;
randomValue = "Hello";
randomValue = 42;
randomValue = true;

// 2. any turidagi massiv
const mixedArray: any[] = ["text", 123, false];

// Massivni konsolga chiqaruvchi funksiya
const printArray = (arr: any[]): void => {
  arr.forEach(item => console.log(item));
};

//////////

// 1. unknown turidagi o‘zgaruvchi
let unknownValue: unknown;
unknownValue = "Hello";
unknownValue = 42;

// 2. unknown turini stringga o‘zgartirishdan oldin tekshiruvchi funksiya
const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

if (isString(unknownValue)) {
  console.log(unknownValue.toUpperCase());
}
// 1. never 
const throwError = (message: string): never => {
  throw new Error(message);
};

// 2. never 
const infiniteLoop = (): never => {
  while (true) {
    console.log("Looping forever...");
  }
};


///////

// 1. addNumbers funksiyasi
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// 2. formatDate funksiyasi
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};


/////////
// 1. Person va Employee interfeyslari
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

// 2. Worker intersection tipi
type Worker = Person & Employee;

const  Worker = {
  name: "Jane Doe",
  age: 30,
  employeeId: 12345,
  department: "HR",
};

/////////
// 1. Vehicle interfeysi
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

// 2. Car interfeysi
interface Car extends Vehicle {
  numberOfDoors: number;
  isElectric: boolean;
}

const myCar: Car = {
  make: "Tesla",
  model: "Model S",
  year: 2024,
  numberOfDoors: 4,
  isElectric: true,
};


/////////

// 1. Student interfeysi
interface Student {
  name: string;
  age: number;
  grades: number[];
  address: [string, number];
}

// 2. getStudentSummary funksiyasi
const getStudentSummary = (student: Student): string => {
  const averageGrade = student.grades.reduce((a, b) => a + b) / student.grades.length;
  return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade}`;
};


//////////

// 2. Order interfeysi
interface Order {
  orderId: number;
  status: OrderStatus;
  totalAmount: number;
}

// 3. Customer interfeysi
interface Customer {
  customerId: number;
  name: string;
}

// 4. CustomerOrder intersection tipi
type CustomerOrder1 = Order & Customer;

const customerOrder1: CustomerOrder = {
  orderId: 456,
  status: OrderStatus.Shipped,
  totalAmount: 150.00,
  customerId: 789,
  name: "Sarah",
};
