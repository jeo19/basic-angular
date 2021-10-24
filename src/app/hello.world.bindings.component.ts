import { Component } from "@angular/core";

@Component({
        selector:'hello-world',
        templateUrl:'./hello.world.bindings.component.html'
})
export class HelloWorldBindingsComponent{
    fontColor='blue';
    sayHello=1;
    canClick=false;
    message='Hello World';
    sayMessage(){
        alert(this.message)
    }

}