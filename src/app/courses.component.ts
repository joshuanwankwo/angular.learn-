import {Component} from '@angular/core'
import { CoursesServices } from './courses.services';

@Component({
    selector: 'course',
    template: `
            <h2>{{ getTitle() }}</h2>
            
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
            <table>
                <tr>
                <td [attr.colspan]="colspan"></td>
                </tr>
            </table>
            <img [src]="src" />
            <h5> Title: {{ course.title | lowercase }}</h5>
            <h5> Students: {{ course.students | number }}</h5>
            <h5> Rating: {{ course.rating | number:"1.1-1" }}</h5>
            <h5> Price: {{ course.price | currency:"USD":true }}</h5>
            <h5> ReleaseDate: {{ course.releaseDate | date }}</h5>
            <button (click)="onSave()" class="btn btn-primary" [style.display]="'block'" [style.backgroundColor]=" isActive ? 'blue': 'white' ">BUY</button>
            <input [value]="password"  (keyup.enter)="password = $event.target.value; enter(password)" />
            <input [(ngModel)]="email"  (keyup.enter)="enter(email)" />
            <p>{{ course.text | summary:17 }}</p>
            `
})

export class CoursesComponent{
    title = 'List of Courses';
    colspan: 2;
    src = 'http://lorempixel.com/400/200';

    courses;
    course;
    password = "hashed";
    email= "something@somewhere.thing";

    getTitle(){
        return this.title
    };

    isActive = true;

    onSave(){
        console.log("First Angular click")
    };

    onDivClick(){
        console.log("Div Was also clicked")
    };

    enter(from){
        console.log("Submited")
        console.log(from)
    }

    constructor(service: CoursesServices){
        this.courses = service.getCourses();
        this.course = service.course;
    }
}