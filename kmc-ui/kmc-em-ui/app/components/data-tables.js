import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'table',
    didInsertElement: function() {
        this._super(...arguments);
        this.$().DataTable({
            responsive: true,
            fixedHeader: {
                header: true,
                headerOffset: 20 
            },
            "bPaginate": true,
            "sDom": "t" // just show table, no other controls
        });
    }
});
