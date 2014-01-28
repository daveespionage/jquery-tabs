/*! Tabs - v0.0.7 - 2014-01-28
* https://github.com/daveespionage/jquery-tabs
* Copyright (c) 2014 David Cox-Espenlaub; Licensed MIT */
(function($){
  $.fn.tabs = function(options) {
    // on click of one of tabs
    var displayPage = function(e) {
      var $that = $(this),
        o = e.data.o,
        $parent = $that.parent(),
        current = $parent.attr("data-tab-current"),
        ident = $that.attr("data-tab"),
        currentSel = '[data-tab="' + current + '"]',
        identSel = '[data-tab="' + ident + '"]',
        currHeight;

      if(ident !== current){

        // find the current height for the current content;
        currHeight = $(o.cselector + currentSel).height();

        // hide current content
        $(o.selector + currentSel + ', '+ o.cselector + currentSel).removeClass(o.activeClass);

        // show new content
        $(o.selector + identSel + ', '+ o.cselector + identSel).addClass(o.activeClass);

        // update current data
        $parent.attr("data-tab-current",ident);

        // call callback
        if($.isFunction(o.callback)) {
          o.callback.apply(this,[e,ident]);
        }
      }
      e.preventDefault();
    };

    var settings = {
      // default tab class
      selector : '.tab',
      // default tab content class
      cselector: '.tab-content',
      // default selected state class
      activeClass: 'selected',
      // default callback (does nothing)
      callback: function(e,ident){
      }
    };

    // get our options together
    $.extend( settings, options );

    options = settings;

    return this.each (function () {
      // set up variables
      var o = options,
      container = this,
      $parent = $(o.selector).parent(),
      $navitem = $(o.selector,container).first();

      // store which tab we are on
      var ident = $navitem.attr('data-tab');
      $parent.attr("data-tab-current",ident);

      // set current tab active
      $navitem.addClass(o.activeClass);

      // hide other tab contents
      var $pages = $(o.cselector + '[data-tab!="' + ident + '"]', container);
      $pages.removeClass(o.activeClass);

      // add trigger event to tabs
      var $tabs = $(o.selector, container);
      $tabs.on('click.tabs',{o:o},displayPage);
    });

  };
})(jQuery);
