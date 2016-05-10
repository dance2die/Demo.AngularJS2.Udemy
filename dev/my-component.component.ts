import {Component} from 'angular2/core'

@Component({
    selector: 'my-component',
    template: `
        Hi I'm {{name}}. This is my first angular 2 app.
        <span [class.is-awesome]="inputElement.value === 'yes'">It's awesome</span>
        <br />
        <br />
        This line is great.
        <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent{
    name = "Eddie";
}