/**
 * Created by gaiidenn on 19.07.16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { Parties } from '../../../collections/parties';
import { PartiesForm } from '../parties-form/parties-form';
import { MeteorComponent } from 'angular2-meteor';
import { Mongo } from 'meteor/mongo';

import template from './parties-list.html';

@Component({
    selector: 'parties-list',
    template,
    directives: [
        PartiesForm,
        ROUTER_DIRECTIVES,
        LoginButtons
    ]
})
export class PartiesList extends MeteorComponent {
    parties: Mongo.Cursor<Party>;

    constructor(){
        super();
        this.subscribe('parties', () => {
            this.parties = Parties.find();
        });
    }

    removeParty(party) {
        Parties.remove(party._id);
    }

    search(value: string) {
        if (value) {
            this.parties = Parties.find({ location: value});
        } else {
            this.parties = Parties.find();
        }
    }
}
