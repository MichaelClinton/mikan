import {Component, Input, ViewChild} from '@angular/core';
import {collapse, fade} from '../../animations'
import {ServiceAuthentication} from '../../services/authentication/service'
import {ServiceCookie} from '../../services/cookie/service'
import {Events} from '../../events'

@Component
({
	animations: [collapse],
	host: {"[@collapse]":"collapse"},
    moduleId: module.id,
    selector: 'mikan-control-login',
    templateUrl: 'template.html'
})

export class ComponentLogin
{	
	@ViewChild('email') email;
	@ViewChild('password') password;
	
	collapse:string = 'open';
	
    constructor(private authentication:ServiceAuthentication, private cookie:ServiceCookie, private event:Events)
	{
		event.onAuthenticated.subscribe(
			result => console.debug(result)
		);
    };
	
	authenticate()
	{	
		var email = this.email.nativeElement.value;
		var password = this.password.nativeElement.value;
		
		this.authentication.authenticate(email, password).subscribe(
			result => this.onAuthenticated(result), 
			error => this.error(error)
		);
	};
	
	onAuthenticated(response)
	{		
		if(response.token)
		{
			this.cookie.set("mikan-token", response.token);
			this.collapse = "collapsed";
		}
    };
	
    error(response)
	{
        console.debug(response.message);
    };
}