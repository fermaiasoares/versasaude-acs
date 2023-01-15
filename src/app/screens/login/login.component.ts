import { Component, OnInit } from '@angular/core';
import { Dialogs, AlertOptions, Page } from '@nativescript/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'Login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    items: Array<{ municipio: string; value: string }> = [
        { municipio: 'Teste', value: '1' },
        { municipio: 'Teste 2', value: '2' }
    ];

    public formLogin: FormGroup;

    constructor(private page: Page) {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = 'res://background_image';
        this.page.backgroundRepeat = 'no-repeat';

        this.formLogin = new FormGroup({
            instancia: new FormControl(null, [Validators.required]),
            usuario: new FormControl(null, [Validators.required]),
            senha: new FormControl(null, [Validators.required])
        })
    }

    ngOnInit(): void {
    }

    invalidField(field: string) {
        return {
            'has-error': this.formLogin.get(field).touched && !this.formLogin.get(field).valid
        }
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
