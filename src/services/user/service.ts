import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ServiceCookie} from '../cookie/service'

@Injectable()
export class ServiceUser
{  
	constructor(private http:Http, private cookie:ServiceCookie)
	{
	};
	
	getUser(id)
	{
		let headers = new Headers();
	
		headers.append('mikan-id', id);
		headers.append('mikan-token', this.cookie.get('mikan-token'));
		
		return this.http.get("http://localhost:3000/user", {headers: headers})
		.map(this.result)
		.catch(this.error);
    }; 
	
	private result(response:Response)
	{		
		return response.json();
	};
	
	private error (response:Response):string
	{
		return response.statusText;
	};
}