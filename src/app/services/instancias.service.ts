import { Injectable } from "@angular/core";
import '@nativescript/firebase-firestore';
import { firebase } from '@nativescript/firebase-core';
import { IInstancia } from '../interface/instancia';

@Injectable({
    providedIn: 'root'
})
export class InstanciasService {
    constructor() {
        this.getInstancias();
    }

    instancias: IInstancia[] = [];

    private getInstancias() {
        firebase()
            .firestore()
            .collection('instances')
            .onSnapshot(
                (snapshot) => {
                    this.instancias = [];
                    if (snapshot.size > 0) {
                        snapshot.forEach((document) => {
                            const instancia = document.data();
                            if (instancia.ativo) {
                                this.instancias.push(instancia);
                            }
                        })
                    }
                },
                (error) => {
                    console.warn(error);
                }
            );
    }
}
