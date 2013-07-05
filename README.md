jquery-tabs
===========

a super-light tab plugin for jquery

Dependencies
------------
 - jQuery
 - html structure where you have
  - tabs with a tab class (default: .tab, change selector in options)
  - content with content class (default: .tab-content, change cselector in options)
  - data-tab attributes in each that has the unique signifier for the pair

Usage
-----

HTML:
```
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
```

Initialize in JavaScript
```
 // without config
 $('.tab-container').tabs();
 
 // with custom config values
 $('.tab-container').tabs({
     selector : '.tab',
     cselector: '.tab-content',
     activeClass: 'selected',
     callback: function(e,ident){
         console.log(e, 'was clicked, currently selected:', ident);
     }
 });
```
