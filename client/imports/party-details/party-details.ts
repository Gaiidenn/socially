/**
 * Created by gaiidenn on 19.07.16.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, CanActivate, ROUTER_DIRECTIVES } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { RequireUser } from 'angular2-meteor-accounts-ui';
import { Tracker } from 'meteor/tracker';
import { Parties } from '../../../collections/parties';

import template from './party-details.html';


@Component({
    selector: 'party-details',
    template,
    directives: [ROUTER_DIRECTIVES]
})
export class PartyDetails extends MeteorComponent {
    partyId: string;
    party: Party;

    constructor(
        private route: ActivatedRoute
    ) {
        super();
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.partyId = params['partyId'];

            this.subscribe('party', this.partyId, () => {
                this.party = Parties.findOne(this.partyId);
            }, true);
        });
    }

    saveParty(party) {
        if (Meteor.userId()) {
            Parties.update(party._id, {
                $set: {
                    name: party.name,
                    description: party.description,
                    location: party.location
                }
            });
        } else {
            alert('You must be logged in to change this party');
        }
    }
}