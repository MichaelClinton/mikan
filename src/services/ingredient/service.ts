import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceIngredient
{  
	constructor(private http:Http)
	{
	};
	
	getIngredient(id)
	{
		return this.http.get("http://localhost:3000/ingredient:" + id)
		.map(this.result)
		.catch(this.error);
    }; 
	
	getIngredients()
	{
		return this.http.get("http://localhost:3000/ingredient/all")
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