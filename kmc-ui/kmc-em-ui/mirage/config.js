export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
    this.get('/site-menus');
    /*
    this.get('/siteMenus', function() {
        return {
            'siteMenus': [
                { "id": "1", "label": "Dashboard", "icon": "md-view-dashboard", "route": "index" },
                { "id": "2", "label": "系统管理", "icon": "md-settings", "children": [{
                        "id": "2-1", "label": "用户管理", "route": "system.user", "parent": "2"
                    }]
                }
            ]
        };
    });
    */
}
