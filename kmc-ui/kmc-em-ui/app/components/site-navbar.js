import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'nav',
    attributeBindings: ['role'],
    role: 'navigation',
    classNames: ["site-navbar", "navbar", "navbar-default", "navbar-mega"],
    feed: Ember.inject.service(),
    folded: true,
    unfold: function() {
        Ember.$('body').removeClass('site-menubar-fold').addClass('site-menubar-unfold');
        this.set('folded', false);
    },
    fold: function() {
        Ember.$('body').removeClass('site-menubar-unfold').addClass('site-menubar-fold');
        this.set('folded', true);
    },
    actions: {
        toggleSiteMenu() {
            this.get('feed').trigger('toggle-site-menu', {});
        },
        /*
        toggleMenu: function() {
            if (this.folded === null || this.folded === true) {
                this.unfold();
            } else {
                this.fold();
            }
            return false;
        },*/
        toggleFullScreen: function() {
            alert('Not implement.');
        }
    }
});
