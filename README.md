# ngx-translate with Language and Country Support 

The internationalization (i18n) library for Angular with language and country support.

This is a fork of [ngx-translate](https://github.com/ngx-translate/core) library.

Only difference from the original library is using country variable in functions like below.

```ts
import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app',
    template: `
        <div>{{ 'HELLO' | translate:param }}</div>
    `
})
export class AppComponent {
    param = {value: 'world'};

    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en', 'country');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en', 'country');
    }
}
```