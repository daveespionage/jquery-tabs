/**
* tabs.js
*
* This depends on
* - jQuery
* - html structure where you have
* -- tabs with a tab class (default: .tab, change selector in options)
* -- content with content class (default: .tab-content, change cselector in options)
* -- data-tab attributes in each that has the unique signifier for the pair
* Example:
* <div class="tab-container">
*  <div class="tabs">
*   <div class="tab selected" data-tab="uniquesignifierforthepair"></div>
*   <div class="tab" data-tab="otheruniquesignifierforthepair"></div>
*  </div>
*  <div class="tabs-content">
*   <div class="tab-content selected" data-tab="uniquesignifierforthepair"></div>
*   <div class="tab-content" data-tab="otheruniquesignifierforthepair"></div>
*  </div>
* </div>
*
* <script>
*  $('.tab-container').tabs();
* </script>
*/
(function($){
  $.fn.tabs = function(options) {
		var settings = {
			selector : '.tab',				// default tab class
			cselector: '.tab-content',		// default tab content class
			activeClass: 'selected',		// default selected state class
			callback: function(e,ident){}	// default callback (does nothing)
		};
		options = $.extend( settings, options );	// get our options together
		return this.each (function () {
			// set up variables
			var o = options;
			container = this;
			$parent = $(o.selector).parent();
			var $navitem = $(o.selector,container).first();

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

		// on click of one of tabs
		function displayPage(e) {
			var $that = $(this),
				o = e.data.o;
			var $parent = $that.parent();
			var current = $parent.attr("data-tab-current"),
				ident = $that.attr("data-tab");
			var currentSel = '[data-tab="' + current + '"]',
				identSel = '[data-tab="' + ident + '"]';
			
			if(ident !== current){
			
				// hide current content
				$(o.selector + currentSel + ', '+ o.cselector + currentSel).removeClass(o.activeClass);

				// show new content
				$(o.selector + identSel + ', '+ o.cselector + identSel).addClass(o.activeClass);

				// update current data
				$parent.attr("data-tab-current",ident);

				// call callback
				if($.isFunction(o.callback)) o.callback.apply(this,[e,ident]);
			}
			e.preventDefault();
		}


	};
})(jQuery);
