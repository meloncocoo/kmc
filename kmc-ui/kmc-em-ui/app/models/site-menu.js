import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
    label: attr('string'),
    children: hasMany('site-menu', { inverse: 'parent' }),
    parent: belongsTo('site-menu', { inverse: 'children' }),
    hasChildren: Ember.computed('children', function() {
        return this.get('children.length') > 0;
    })
});
