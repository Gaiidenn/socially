/**
 * Created by gaiidenn on 19.07.16.
 */
import { Parties } from '../collections/parties';

export function loadParties() {
    if (Parties.find().count() === 0) {
        let parties = [
            {   'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'location': 'Palo Alto',
                'public': true
            },
            {   'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'location': 'Palo Alto',
                'public': true
            },
            {   'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'location': 'San Francisco',
                'public': false
            }
        ];

        for (let i = 0; i < parties.length; i++) {
            Parties.insert(parties[i]);
        }
    }
}