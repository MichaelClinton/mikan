import {Injectable} from '@angular/core';

@Injectable()
export class ServiceCookie
{  
	constructor()
	{
	};
		
	set(name:string, value:string) 
	{
		document.cookie = name + "=" + value;
	};
	
	get(name:string) 
	{
		var name = name + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var cookies = decodedCookie.split(';');
		
		for(var i = 0; i <cookies.length; i++)
		{
			var cookie = cookies[i];
			
			while (cookie.charAt(0) == ' ') 
			{
				cookie = cookie.substring(1);
			}
			
			if (cookie.indexOf(name) == 0)
			{
				return cookie.substring(name.length, cookie.length);
			}
		}
		
		return null;
	};
}