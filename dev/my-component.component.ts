import {Component, OnInit} from 'angular2/core'
import {TestComponent} from "./test.component";

@Component({
    selector: 'my-component',
    template: `
        Hi I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span>. This is my first angular 2 app.
        <span [class.is-awesome]="inputElement.value === 'yes'">It's awesome</span>
        <br />
        <br />
        This line is great.
        <input type="text" #inputElement (keyup)="0">
        <br />
        <br />
        <button [disabled]="inputElement.value !=='yes'">Enabled only "yes" was entered</button>
        <test></test>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})
export class MyComponentComponent implements OnInit{
    name: string;

    ngOnInit():any {
        this.name = "Max";
    }
}