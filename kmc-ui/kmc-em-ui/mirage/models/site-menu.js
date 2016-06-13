import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    children: hasMany('site-menu', { inverse: 'parent' }),
    parent: belongsTo('site-menu', { inverse: 'children' })
});
