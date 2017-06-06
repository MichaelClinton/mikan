import {Component, Input} from '@angular/core';
import {ServiceUser} from './services/user/service'
import {Events} from './events'

@Component
({
    moduleId: module.id,
    selector: 'mikan-app',
    templateUrl: 'template.html'
})

export class ComponentApp
{
    constructor(private user:ServiceUser, private event:Events)
	{
		user.getUser("u0000001").subscribe(
			result => this.authenticated(result), 
			error => this.error(error)
		);
    };
	
	authenticated(response)
	{		
		if(!response.error)
		{
			this.event.authenticate(response);
		}
    };
	
    error(response)
	{
        console.debug(response.message);
    };
}
