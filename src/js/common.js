import "../blocks/calculator/calculator.js";
import "../blocks/examples/examples.js";
import "../blocks/quality/quality.js";
import "../blocks/license/license.js";
import "../blocks/workers/workers.js";
import "../blocks/reviews/reviews.js";
import "../blocks/header/header.js";
import "../blocks/prices/prices.js";
import "../blocks/scheme/scheme.js";
import "../blocks/phone/phone.js";
import "../blocks/modal/modal.js";
import "../blocks/range/range.js";
import "../blocks/insta/insta.js";
import "../blocks/video/video.js";
import "../blocks/faq/faq.js";

/* Polyfills */
(function(e) {
	e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
	e.closest = e.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
}(Element.prototype));

(function(e) {
	var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
	!matches ? (e.matches = e.matchesSelector = function matches(selector) {
		var matches = document.querySelectorAll(selector);
		var th = this;
		return Array.prototype.some.call(matches, function(e) {
			return e === th;
		});
	}) : (e.matches = e.matchesSelector = matches);
})(Element.prototype);