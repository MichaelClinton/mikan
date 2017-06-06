import {platformBrowser}    from '@angular/platform-browser';
import {ModuleAppNgFactory} from '../compiled/src/module.ngfactory';

platformBrowser().bootstrapModuleFactory(ModuleAppNgFactory);