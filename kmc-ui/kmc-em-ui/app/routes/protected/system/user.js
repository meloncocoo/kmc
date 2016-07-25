import Ember from 'ember';

export default Ember.Route.extend({
    pageInfo: {
        title: '用户管理'
    },
    buttons: [
        { icon: 'md-edit', action: 'edit', label: 'Edit' },
        { icon: 'md-refresh-alt', action: 'refresh', label: 'Refresh' },
        { icon: 'md-settings', action: 'setup', label: 'Settings' }
    ],
    actions: {
        refresh() {

        },
        edit() {

        },
        setup() {

        }
    }
});
