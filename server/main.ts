/**
 * Created by gaiidenn on 19.07.16.
 */
import { loadParties } from './load-parties';
import { Meteor } from 'meteor/meteor';

Meteor.startup(loadParties);