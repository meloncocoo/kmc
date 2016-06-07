import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["site-menubar"],
    auto: true,
    init: function() {
        this._super();
    },
    didInsertElement: function() {
        this._super(...arguments);
        this.$().mmenu({offCanvas: false});

        var $body = Ember.$('body'),
            $html = Ember.$('html');

        $html.removeClass('css-menubar').addClass('js-menubar');

        if ($body.is('.site-menubar-top')) {
            this.set('top', true);
        }

        if ($body.is('.site-menubar-fold-alt')) {
            this.set('foldAlt', true);
        }

        if ($body.data('autoMenubar') === false || $body.is('.site-menubar-keep')) {
            if ($body.hasClass('site-menubar-fold')) {
                this.set('auto', 'fold');
            } else if ($body.hasClass('site-menubar-unfold')) {
                this.set('auto', 'unfold');
            }
        }

        this.$().on('changed.site.menubar', Ember.$.proxy(function() {
            this.update();
        }, this));

        this.change();
    },
    change: function() {
      var breakpoint = Breakpoints.current();
      if (this.get('auto') !== true) {
        switch (this.get('auto')) {
          case 'fold':
            this.reset();
            if (breakpoint.name === 'xs') {
              this.hide();
            } else {
              this.fold();
            }
            return;
          case 'unfold':
            this.reset();
            if (breakpoint.name === 'xs') {
              this.hide();
            } else {
              this.unfold();
            }
            return;
        }
      }

      this.reset();

      if (breakpoint) {
        switch (breakpoint.name) {
          case 'lg':
          case 'md':
          case 'sm':
            this.fold();
            break;
          case 'xs':
            this.hide();
            break;
        }
      }
    },
    animate: function(doing, callback) {
        var self = this;
        Ember.$('body').addClass('site-menubar-changing');

        doing.call(self);
        this.$().trigger('changing.site.menubar');

        setTimeout(function() {
            callback.call(self);
            Ember.$('body').removeClass('site-menubar-changing');

            this.$().trigger('changed.site.menubar');
        }, 500);
    },
    reset: function() {
        this.set('opened', null);
        this.set('folded', null);
        Ember.$('body').removeClass('site-menubar-hide site-menubar-open site-menubar-fold site-menubar-unfold');
        Ember.$('html').removeClass('disable-scrolling');
    },
    open: function() {
        if (this.get('opened') !== true) {
            this.animate(function() {
                Ember.$('body').removeClass('site-menubar-hide').addClass('site-menubar-open site-menubar-unfold');
                this.set('opened', true);
                Ember.$('html').addClass('disable-scrolling');
            }, function() {
                this.scrollable.enable();
            });
        }
    },
    hide: function() {
    },
    fold: function() {
        this.scrollable.disable();

        if (this.get('folded') !== true) {
            this.animate(function() {

                Ember.$('body').removeClass('site-menubar-unfold').addClass('site-menubar-fold');
                this.set('folded',  true);
                this.hoverTrigger();

            }, function() {
                if (this.get('folded', null)) {
                //$.site.resize();
                }
            });
        }
    },
    unfold: function() {
    },
    hoverTrigger: function() {
      var self = this,
        $body = Ember.$('body');

      if (this.get('folded')) {
        this.$().on("mouseenter", function() {
          $body.addClass('site-menubar-hover');

          setTimeout(function() {
            self.scrollable.enable();
          }, 500);

        }).on("mouseleave", function() {
          $body.removeClass('site-menubar-hover');

          var api = self.$().data('mmenu');
          if (api) {
            api.openPanel(Ember.$('#mm-0'));
          }

          setTimeout(function() {
            self.scrollable.disable();
          }, 500);
        });
      }
    },
    hoverTriggerOff: function() {
      this.$().off('mouseenter');
      this.$().off('mouseleave');
    },
    toggle: function() {
        var breakpoint = Breakpoints.current();
        var folded = this.get('folded');
        var opened = this.get('opened');

        switch (breakpoint.name) {
        case 'lg':
        case 'md':
        case 'sm':
            if (folded === null || folded === true) {
                this.unfold();
            } else {
                this.fold();
            }
            break;
        case 'xs':
            if (opened === null || opened === false) {
                this.open();
            } else {
                this.hide();
            }
            break;
        }
    },
    update: function() {
        this.scrollable.update();
    },
    scrollable: {
        api: null,
        native: false,
        init: function() {
            // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //   this.native = true;
            //   $body.addClass('site-menubar-native');
            //   return;
            // }

            if (Ember.$('body').is('.site-menubar-native')) {
                this.set('native', true);
                return;
            }
            /*
            this.api = $.site.menubar.$instance.children('.mm-panels').asScrollable({
                namespace: 'scrollable',
                skin: 'scrollable-inverse',
                direction: 'vertical',
                contentSelector: '>',
                containerSelector: '>'
            }).data('asScrollable');
            */
        },

        update: function() {
            if (this.api) {
                this.api.update();
            }
        },

        enable: function() {
            if (this.native) {
                return;
            }
            if (!this.api) {
                this.init();
            }
            if (this.api) {
                this.api.enable();
            }
        },

        disable: function() {
            if (this.api) {
                this.api.disable();
            }
        }
    },
    actions: {
        update: function() {
            alert('update');
        }
    }
});
