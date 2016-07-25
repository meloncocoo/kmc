import Ember from 'ember';

export default Ember.TextField.extend({
    keyUp() {
        let $this = this.$();
        if ($this.val() === "") {
            $this.addClass("empty");
        } else {
            $this.removeClass("empty");
        }
    }
});
