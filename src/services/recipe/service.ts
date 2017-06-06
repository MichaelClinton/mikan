import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceRecipe
{  
	constructor(private http:Http)
	{
	};
	
	getRecipe(id)
	{
		return this.http.get("http://localhost:3000/recipe:" + id)
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