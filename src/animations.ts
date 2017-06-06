import {trigger, style, state, transition, animate, keyframes} from '@angular/core';

export const collapse = trigger('collapse', 
[
	state('collapsed', style({height:'0%'})),
	transition('open => collapsed', 
	[			
		animate(300, keyframes
		([
			style({height:'100%'}),
			style({height:'20%'}),
			style({height:'0%'})
		]))
	]),
	state('open', style({height:'100%'})),
	transition('collapsed => open', 
	[			
		animate(300, keyframes
		([
			style({height:'0%'}),
			style({height:'80%'}),
			style({height:'100%'})
		]))
	])
])

export const fade = trigger('fade',
[
	state('in' , style({opacity:'1'})),
	state('out', style({opacity:'0'})),
	transition('* => *', animate('300ms'))
])