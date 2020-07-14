import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './singin.component.html',
    styleUrls: ['./singin.component.css']
})

export class SingComponent implements OnInit {
    formLogin: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }
    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            userName: ['', Validators.required, Validators.email],
            password: ['', Validators.required]
        });
    }

    onSubmit(e) {
        console.log(e);
    }
}
