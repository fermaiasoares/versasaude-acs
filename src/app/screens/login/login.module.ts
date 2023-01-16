import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { NativeScriptPickerModule } from "@nativescript/picker/angular";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InstanciasService } from '../../services/instancias.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        NativeScriptPickerModule,
        NativeScriptFormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    providers: [
        InstanciasService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
