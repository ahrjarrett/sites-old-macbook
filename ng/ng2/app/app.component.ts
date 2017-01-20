import {Component} from 'angular2/core';
import {CoursesComponent} from './app/courses.component';
import {AuthorsComponent} from './app/authors.component';

@Component({
	selector: 'my-app',
	template: `<h1> My first Angular 2 App </h1>
		<courses></courses>
		<authors></authors>`,
	directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent { }