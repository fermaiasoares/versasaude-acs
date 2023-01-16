import { Component, OnInit } from '@angular/core';
import { Dialogs, AlertOptions, Page } from '@nativescript/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { IInstancia } from '../../interface/instancia';

@Component({
    selector: 'Login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    items: IInstancia[] = [
        {
            id: 'https://homologacao.versasus.com.br',
            ativo: 1,
            cidade: 'Caratinga',
            uf: 'MG',
            cidade_id: 'caratinga',
            text: 'Ambiente de Homologação'
        }
    ]

    public formLogin: FormGroup;

    constructor(private page: Page, public firebaseService: FirebaseService) {
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
        // if (!this.formLogin.valid) {
        //     const alertOption: AlertOptions = {
        //         title: 'Erro ao realizar login',
        //         message: 'Preencha o formulário corretamente para continuar.',
        //         okButtonText: 'Okay',
        //         cancelable: false
        //     }

        //     return Dialogs.alert(alertOption);
        // }
    }
}
