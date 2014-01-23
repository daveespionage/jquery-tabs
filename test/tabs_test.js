(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#tabs', {
    // This will run before each test in this module.
    setup: function() {
      this.container = $('.tab-container');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.container.tabs(), this.container, 'should be chainable');
  });

  test('has click.tabs assigned to individual tabs', function() {
    expect(1);
    this.container.tabs();
    var tabevent = $._data($('.tab').first()[0], 'events')["click"][0].namespace;
    strictEqual(tabevent, 'tabs', 'should have click.tabs assigned');
  });

  test('on click, shows second tab content, hides first', function() {
    expect(2);
    this.container.tabs();
    $('.tab').last().trigger('click.tabs');
    var firsttabcontent = $('.tab-content').first();
    var secondtabcontent = $('.tab-content').last();
    ok(!firsttabcontent.hasClass('selected'), 'should not have selected class');
    ok(secondtabcontent.hasClass('selected'), 'should have selected class');
  });

  test('on click back to first, shows first tab content, hides second', function() {
    expect(2);
    this.container.tabs();
    $('.tab').first().trigger('click.tabs');
    var firsttabcontent = $('.tab-content').first();
    var secondtabcontent = $('.tab-content').last();
    ok(firsttabcontent.hasClass('selected'), 'should have selected class');
    ok(!secondtabcontent.hasClass('selected'), 'should not have selected class');
  });

}(jQuery));
