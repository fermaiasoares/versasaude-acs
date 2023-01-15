import { Component, OnInit, ViewChild } from '@angular/core';
import { Dialogs, AlertOptions, EventData, Page } from '@nativescript/core';
import { PickerFieldComponent } from "@nativescript/picker/angular";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'Login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChild('instancias', { static: false }) instancias: PickerFieldComponent;

    items: Array<{ municipio: string; value: string }> = [
        { municipio: 'Teste', value: '1' },
        { municipio: 'Teste 2', value: '2' }
    ];

    public formLogin: FormGroup;

    constructor(page: Page) {
        page.actionBarHidden = true;
        page.backgroundImage = 'res://background_image';
        page.backgroundRepeat = 'no-repeat';

        this.formLogin = new FormGroup({
            instancia: new FormControl(null, [Validators.required]),
            usuario: new FormControl(null, [Validators.required]),
            senha: new FormControl(null, [Validators.required])
        })
    }

    ngOnInit(): void {
        // @ts-ignore
        // console.log(this.instancias.nativeElement.selectedValue);
    }

    handleSignIn() {
        if (!this.formLogin.valid) {
            const alertOption: AlertOptions = {
                title: 'Erro ao realizar login',
                message: 'Preencha o formulário corretamente para continuar.',
                okButtonText: 'Okay',
                cancelable: false
            }

            return Dialogs.alert(alertOption);
        }
    }
}
