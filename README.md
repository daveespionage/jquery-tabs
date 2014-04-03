# Tabs

A lightweight tabbed interface plugin for jQuery

[![Build Status](https://travis-ci.org/daveespionage/jquery-tabs.svg?branch=master)](https://travis-ci.org/daveespionage/jquery-tabs)


## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/daveespionage/jquery-tabs/master/dist/tabs.min.js
[max]: https://raw.github.com/daveespionage/jquery-tabs/master/dist/tabs.js

In your web page:

```html
<div class="tab-container">
 <div class="tabs">
  <div class="tab selected" data-tab="uniquesignifierforthepair"></div>
  <div class="tab" data-tab="otheruniquesignifierforthepair"></div>
 </div>
 <div class="tabs-content">
  <div class="tab-content selected" data-tab="uniquesignifierforthepair"></div>
  <div class="tab-content" data-tab="otheruniquesignifierforthepair"></div>
 </div>
</div>

<script src="jquery.js"></script>
<script src="dist/tabs.min.js"></script>
<script>
jQuery(function($) {
 $('.tab-container').tabs();
});
</script>
```

## Documentation
 *Requires*
 - jQuery
 - html structure where you have
  - tabs with a tab class (default: .tab, change selector in options)
  - content with content class (default: .tab-content, change cselector in options)
  - data-tab attributes in each that has the unique signifier for the pair

## Examples
 *without config object, using only defaults*
```javascript
 $('.tab-container').tabs();
```

 *overriding defaults with custom config*
```javascript
 $('.tab-container').tabs({
     selector : '.tab',
     cselector: '.tab-content',
     activeClass: 'selected',
     callback: function(e,ident){
         console.log(e, 'was clicked, currently selected:', ident);
     }
 });
```

## Release History

0.0.4 production version used in client site  
0.0.5 added functional unit tests, grunt build  
0.0.6 added base styles for out-of-box use with example page  
0.0.7 removed height adjustment javascript
