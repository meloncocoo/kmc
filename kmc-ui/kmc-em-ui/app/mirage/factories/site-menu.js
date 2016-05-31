import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    label: function(i) { return 'Label' + i; }
});
