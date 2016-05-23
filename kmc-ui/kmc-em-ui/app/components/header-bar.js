import Ember from 'ember';

export default Ember.Component.extend({
    folded: true,
    unfold: function() {
        $('body').removeClass('site-menubar-fold').addClass('site-menubar-unfold');
        this.set('folded', false);
    },
    fold: function() {
        $('body').removeClass('site-menubar-unfold').addClass('site-menubar-fold');
        this.set('folded', true);
    },
    actions: {
        toggleMenu: function() {
            if (this.folded === null || this.folded === true) {
                this.unfold();
            } else {
                this.fold();
            }
            return false;
        },
        toggleFullScreen: function() {
            alert('Not implement.');
        }
    }
});
