import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'a',
    attributeBindings: ['dataToggle:data-toggle', 'href', 'role'],
    href: '#',
    dataToggle: 'menubar',
    role: 'button',
    click() {
        this.get('onClick')();
    }
});
