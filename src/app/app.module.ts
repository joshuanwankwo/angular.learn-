import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesServices } from './courses.services';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
