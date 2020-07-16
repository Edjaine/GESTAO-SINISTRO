import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './singin.component.html',
    styleUrls: ['./singin.component.css']
})

export class SingComponent implements OnInit {
    formLogin: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService) {

    }
    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit(e: any): void {
        this.authService.autentica(e.userName, e.password);
    }
}
