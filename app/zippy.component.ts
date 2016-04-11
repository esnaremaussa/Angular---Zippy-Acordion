import {Component, Input} from 'angular2/core';

@Component({
	selector: 'zippy',
	template:`
		<div class="panel panel-default">
		  <div class="panel-heading" (click)="open()">
		  	{{ title }}
		  	<i 
		  		class="glyphicon arrow"
		  		[ngClass]="{
					'glyphicon-chevron-up': state,
					'glyphicon-chevron-down': !state
		  		}"
		  	>
		  	</i>
		  </div>
		  <div class="panel-body" [hidden]="!state">
		  	<ng-content></ng-content>
		  </div>
		</div>
	`,
	styles:[`
		.arrow{
			float: right;
		} 
		.panel-heading{
			cursor: pointer;
		}
		.panel{
			margin-bottom: 0px;
		}
	`]
})
export class ZippyComponent{
	state = false;
	@Input() title: string;

	open(){
		this.state = !this.state;
	}

}