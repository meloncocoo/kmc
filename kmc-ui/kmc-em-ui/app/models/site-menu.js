import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  label: attr(),
  children: hasMany('site-menu', { inverse: 'parent' }),
  parent: belongsTo('site-menu', { inverse: 'children' }),
  hasChildren() {
    return this.get('children').size() > 0;
  }
});
