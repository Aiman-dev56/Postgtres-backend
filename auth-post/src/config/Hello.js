

const hello = () => {
    console.log("Hello, World!");
}

const greet = (name) => {
    return`Hello ${name}!`;
}

const goodBye = () => {
    console.log("Good Bye!");
}

const welcome = (name) => {
    alert(`Welcome $(name)!`);
}

const helloWorld = () => {
    console.log("Hello World!");
}

const sayHi = (name) => {
    return `Hi ${name}!`;
}

const sayGoodBye = (name) => {
    console.log(`Good Bye ${name}!`);
}

const RegisterEmail = "aimana@123";

const RegisterName = "Aiman";

const NewUserEmail = "aimana@123";

if (NewUserEmail === RegisterEmail) {
    return `Welcome back ${RegisterName}!`;
} else {
    return "Register Yourself first!";;
}

if(NewUserEmail === RegisterEmail) {
    console.log(`Welcome back ${RegisterName}!`);
}

const Password = "123456";

const NewUserPassword = "123456";

if(Password === NewUserPassword) {
    console.log("Password is correct!");
}


var user = {
    name: "Aiman",
    email: "aiman@123",
    password: "123456"
}

const greeting = (user) => {
    return`Hello ${user.name}!
    Your email is ${user.email} 
    and your password is ${user.password}`;
}