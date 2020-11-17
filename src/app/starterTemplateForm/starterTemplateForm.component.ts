import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;
    submitted: Boolean;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Fred Template',
            lastName:'',
            address:'',
            city:'',
            province:'',
            country:'',
            postalCode:'',
            phoneNumber:'',
            email: ''
        };
        this.submitted = false;
    }

    onSubmit() {
        this.submitted = true;
    }

}