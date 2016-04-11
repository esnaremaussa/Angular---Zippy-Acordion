import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Zippy Accordion</h1>
    	<zippy title="Zippy 1">hello world</zippy>
    	<zippy title="Zippy 2">hello world 2</zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent { }