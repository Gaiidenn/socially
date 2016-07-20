/**
 * Created by gaiidenn on 19.07.16.
 */
import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Parties } from '../../../collections/parties';

import template from './parties-form.html';

@Component({
    selector: 'parties-form',
    template
})
@InjectUser("user")
export class PartiesForm extends MeteorComponent {
    user: Meteor.User;
    partiesForm: ControlGroup;

    constructor() {
        super();
        let fb = new FormBuilder();

        this.partiesForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
            'public': [false]
        });
    }

    addParty(party) {
        if (this.partiesForm.valid) {
            if (Meteor.userId()) {
                Parties.insert({
                    name: party.name,
                    description: party.description,
                    location: party.location,
                    owner: Meteor.userId(),
                    'public': party.public
                });
                (<Control>this.partiesForm.controls['name']).updateValue('');
                (<Control>this.partiesForm.controls['description']).updateValue('');
                (<Control>this.partiesForm.controls['location']).updateValue('');
                (<Control>this.partiesForm.controls['public']).updateValue(false);
            } else {
                alert('You must be logged in to add a party');
            }
        }

    }
}