function sample(a:number,b:number):number /*to return only number*/{
   return a+b;
}
// we can maintain the consistency of the elements in the objects 
//using class or interface

// here we use class
/*class person {
    sno:number // here we specify the data types on the properties that is to be used in the objects 
    name:string
    city:string
}*/

/* interface person {
    sno:number
    name:string
    city:string
}
const people:person[]/*  here we specify the array type */ /*= [

    {sno:1,name:"Rahul",city:"Chennai"},
    {sno:1,name:"Rahul",city:"Chennai"}
] 

console.log(people)
*/

// classes and constructor 
// if we compile the ts file we get the transcribed js file is es5 format
// we can transcribe the ts file in versions of  js file using the command 
// tsc -target es2022 functions.ts // in command prompt 
/* class Employee{
    private sno:number;// still js does not support access specifiers 
    private name:string;// only in ts 
    private city:string;
   
    constructor(sno:number,name:string,city:string){
       this.sno = sno
       this.name = name
       this.city = city
    }
   
    display():void{
       console.log(this.sno,this.name,this.city)
    }
   } */
/* 
web Server 
apache http Server
microsoft iis 
etc

old web practices 

we combine the 
HTML,css and js files and put it into webserver
we minify the files and deploy it in the server
for example the bootstrap.js is used in development environement 
and bootstrap.min.js is used in production environment
bootstrap.min.js is the minimised version used in production to reduce the loading time

deployment now a days 
html - > html5
css -> satisfies,less,scss -> these are compiled to css later 
js - > TS 

developer activities
-> unit testing 
-> unit to unit communication - > integration testing
-> acceptance testing (end to end testing)
-> converting ts to JS
-> run a development server(node js based mostly cli)
-> linting -> checking the quality of code

bundling 

we start bundling with a main page flle and link it with all the files , functions thar are used
, skip the files and functions that are never called/ used and usually pack all these js files 
into one or few files 

[100's of files '] -> one or few js files

bundling tool -> webpack

bundling -> web server 


Angular cli
tool 
generate angular Code 
build angular app 
test 
run angular 
lint the app
pack the angular app


angular spa(collection of components to build a app)(component based framework)
|
|
--------> module 
            |
            |-------> component
            |-------> pipes
            |-------> directive
            |-------> services
            |-------> routing configurations

component has to minimal as possible 
small visual unit in a big web page 

component ui contains : 

data --> ts objects are used to handle data 
events --> ts functions are used to handle events 
template (html)
style (css)



 */