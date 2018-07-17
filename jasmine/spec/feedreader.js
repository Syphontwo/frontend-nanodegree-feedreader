/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a URL defined', function(){
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBe('');
           });
         });

        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a non-empty name', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           });
         });
    });

    describe('The menu', function(){

      /* ensures the menu element is
       * hidden by default.
       */
       it('is hidden by default', function(){
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });

       /* ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
       it('toggles visibility when clicked', function(){

         $('.menu-icon-link').click();
         expect($('body').hasClass('menu-hidden')).toBe(false);

         $('.menu-icon-link').click();
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });

    describe('Initial entries', function(){
        beforeEach(function(done){
          loadFeed(0, done);
        });

      /* ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       it('are loaded and contain at least one entry', function(done){
         expect($(".feed .entry").length).toBeGreaterThan(0);
         done();
       });
    });

    describe('New feed selection', function(){

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       xit('correctly changes conent', function(){

       });
    });
}());
