import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceAuthentication
{  
	constructor(private http:Http)
	{
	};
	
	authenticate(email, password)
	{
		let headers = new Headers();
		
		headers.append('mikan-user', email);
		headers.append('mikan-password', password);
		
		return this.http.get("http://localhost:3000/authenticate", {headers: headers})
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