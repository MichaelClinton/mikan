import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Events
{  
	private onAuthenticatedSubject:Subject<any>;
	private onLoadSubject:Subject<any>;
	
	public onAuthenticated:Observable<any>;
	public onLoad:Observable<any>;
	
	constructor()
	{
		this.onAuthenticatedSubject = new Subject<any>();
		this.onLoadSubject = new Subject<any>();
		
		this.onAuthenticated = this.onAuthenticatedSubject.asObservable()
		this.onLoad = this.onLoadSubject.asObservable()
	};
	
	load()
	{
		this.onLoadSubject.next(true);
	};
		
	authenticate(user)
	{
		this.onAuthenticatedSubject.next(user);
	};
}