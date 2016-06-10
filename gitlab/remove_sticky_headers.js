/*
 * On gitlab the main bar with the repo name/search and the
 * quick links bar to project/activity/etc are sticky.
 * This means that as you scroll they scroll with you.
 * When looking at code or comments this gets in the way
 * as those ui elements aren't really needed and I'd much
 * rather just scroll up and free up some space to see 7-8
 * more lines of code.
 *
 * Paste the following code into GreaseMonkey or TamperMonkey
 * so that it runs when a page from gitlab is loaded to and
 * 'unsticks' those sticky headers.
 */

$('header').first().css('position', 'absolute');
$('.layout-nav').first().css('position', 'absolute');
