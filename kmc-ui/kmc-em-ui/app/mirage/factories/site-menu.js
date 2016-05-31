import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  label(i) { return 'Label$(i)'; } 
});
