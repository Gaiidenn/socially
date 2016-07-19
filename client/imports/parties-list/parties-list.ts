/**
 * Created by gaiidenn on 19.07.16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Parties } from '../../../collections/parties';
import { PartiesForm } from '../parties-form/parties-form';
import { Mongo } from 'meteor/mongo';

import template from './parties-list.html';

@Component({
    selector: 'parties-list',
    template,
    directives: [
        PartiesForm,
        ROUTER_DIRECTIVES
    ]
})
export class PartiesList {
    parties: Mongo.Cursor<Party>;

    constructor(){
        this.parties = Parties.find();
    }

    removeParty(party) {
        Parties.remove(party._id);
    }
}
