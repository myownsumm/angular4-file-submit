import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleDirective} from './sample.directive';

export * from './sample.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SampleDirective,
    ],
    exports: [
        SampleDirective,
    ]
})
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: []
        };
    }
}
