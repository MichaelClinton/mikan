import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import {ComponentApp} from './component';
import {ComponentLogin} from './components/login/component';
import {ComponentMenu} from './components/menu/component';
import {ComponentTitle} from './components/title/component';
import {ComponentTitleHeader} from './components/titleheader/component';
import {ComponentTitleMenu} from './components/titlemenu/component';

import {Events} from './events';

import {ServiceAuthentication} from './services/authentication/service';
import {ServiceBook} from './services/book/service';
import {ServiceCookie} from './services/cookie/service';
import {ServiceIngredient} from './services/ingredient/service';
import {ServiceRecipe} from './services/recipe/service';
import {ServiceUser} from './services/user/service';

@NgModule
({
    imports:
	[
        BrowserModule,
		HttpModule
    ],
    declarations:
	[
        ComponentApp,
		ComponentLogin,
		ComponentMenu,
		ComponentTitle,
		ComponentTitleHeader,
		ComponentTitleMenu
    ],
	providers:
	[ 
		Events,
		ServiceAuthentication,
		ServiceBook,
		ServiceCookie,
		ServiceIngredient,
		ServiceRecipe,
		ServiceUser
	],
    bootstrap:
	[
		ComponentApp
	]
})

export class ModuleApp
{
}