import { NgModule } from '@angular/core';

import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        FlexLayoutModule
    ],
    exports: [
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        FlexLayoutModule
    ]
})
export class AppMaterialModule { }