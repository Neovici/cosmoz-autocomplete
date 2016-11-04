/*global Cosmoz, Polymer, window, Node */
/**
 * Element to create an input with autocompletetion, multi selection,
 * case-intensive capabilities and more!
 *
 * @namespace element/cosmoz-autocomplete
 */
(function () {

	'use strict';

	window.Cosmoz = window.Cosmoz || {};

	Polymer({
		is: 'cosmoz-autocomplete',
		behaviors: [
			Cosmoz.MultiSelectableBehavior,
			Cosmoz.TemplateHelperBehavior,
			Cosmoz.TranslatableBehavior
		],

		properties: {
			/**
			 * Whether to care about capital letter distinctions.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @instance
			 */
			caseSensitive: {
				type: Boolean,
				value: false
			},
			/**
			 * Do not show the list of multi-selection values.
			 * Used when selected item list is handled by the compositing element.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @instance
			 */
			hideSelections: {
				type: Boolean,
				value: false
			},
			/**
			 * Maximum number of shown results in a search.
			 * @type {Int}
			 * @memberof element/cosmoz-autocomplete
			 * @default 30
			 * @instance
			 */
			maxNumberResult: {
				type: Number,
				value: 30
			},
			/**
			 * Minimum length of search string for search to activate.
			 * @type {Int}
			 * @memberof element/cosmoz-autocomplete
			 * @default 0
			 * @instance
			 */
			minimumInputLength: {
				type: Boolean,
				value: 0
			},
			/**
			 * Make input value a single search including spaces instead of
			 * splitting up words in an AND query
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @instance
			 */
			exactQuery: {
				type: Boolean,
				value: false
			},
			/**
			 * Placehold value for input box.
			 * @type {string}
			 * @memberof element/cosmoz-autocomplete
			 * @default 'Search'
			 * @instance
			 */
			placeholder: {
				type: String,
				value: 'Search'
			},
			/**
			 * Prefix label on single item selection
			 * @type {string}
			 * @memberof element/cosmoz-autocomplete
			 * @instance
			 */
			searchType: {
				type: String
			},

			/**
			 * if true along with other conditions, set action is executed.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @default false
			 * @instance
			 */
			resultAction: {
				type: Boolean,
				value: false
			},

			/**
			 * Display actions provided in elements light DOM when the count
			 * of items in the selector is below this value.
			 * @type {Number}
			 * @memberof element/cosmoz-autocomplete
			 * @default 10
			 * @instance
			 */
			showActionsLimit: {
				type: Number,
				value: 10
			},

			/**
			 * Input value, the current search string.
			 * @type {string}
			 * @memberof element/cosmoz-autocomplete
			 * @default ''
			 * @instance
			 */
			inputValue: {
				type: String,
				value: '',
				notify: true
			},

			shownListData: {
				type: Array,
				computed: '_computeShownListData(inputValue, _focus, _searchKicker)'
			},

			_focus: {
				type: Boolean,
				value: false,
				observer: '_focusChanged'
			},

			_hideSuggestions: {
				type: Boolean
			},

			multiSelection: {
				type: Boolean
			},

			selectedSearchResult: {
				type: Number,
				value: 0
			},

			_searchErrorMsg: {
				type: String,
				computed: '_computeSearchErrorMessage(_focus, inputValue, minimumInputLength, shownListData.length)'
			},

			_searchKicker: {
				type: Number,
				value: 0
			}

		},

		_computeShowMultiSelection: function (multiSelection, hideSelections) {
			return multiSelection && !hideSelections;
		},

		_computeHideAutocomplete: function (multiSelection, selectedItem) {
			return !multiSelection && selectedItem;
		},

		_computeSearchErrorMessage: function (focus, term, minLength, numResults) {
			if (!focus) {
				return '';
			}
			if (term.length < minLength) {
				return this._('Enter at least {0} characters to search.', this.minimumInputLength);
			}
			if (term.length > 0 && numResults === 0) {
				return this._('No results found');
			}
			return '';
		},

		_increaseNum: function (num, inc) {
			return num + inc;
		},

		clearOneSelection: function (event) {
			var item = event.model.item;
			if (this.isSelected(item)) {
				this.deselectItem(item);
			}
		},

		keyup: function (event, detail) {
			var
				el = this.$.searchResults,
				selectedItem;

			switch (event.keyCode) {
			case 13: // Enter
				if (this.selectedSearchResult >= 0) {
					selectedItem = this.shownListData[this.selectedSearchResult].data;
					this.selectItem(selectedItem);
					if (this.shownListData.length === this.selectedSearchResult + 1) {
						this.selectedSearchResult -= 1;
					}
					this._searchKicker += 1;
				} else {
					this.onResultActionClick();
					this.selectedSearchResult = undefined;
				}
				break;
			case 27: // Escape
				this.hideSuggestions();
				break;
			case 38: // Up
				el.selectPrevious(false);
				break;
			case 40: // Down
				el.selectNext(false);
				break;
			default:
				// console.log('no handler for ' + event.keyCode);
				break;
			}
		},

		hideSuggestions: function () {
			this._hideSuggestions = true;
			this.selectedSearchResult = 0;
		},

		selectSuggestion: function (item) {
			this.selectItem(item);
			this.hideSuggestions();
			this.inputValue = '';
		},

		search: function (terms) {
			var results = [];

			if (typeof terms === 'string') {
				terms = [terms];
			}

			if (this.items === undefined) {
				return [];
			}

			this.items.some(function (item) {

				// don't add already selected items
				if (this.selectedItems && this.selectedItems.length > 0 && this.selectedItems.indexOf(item) !== -1) {
					return;
				}

				var noSearchHit = terms.some(function (term) {
					if (term === '') {
						return; // beginning/ending space in multi word search, continue
					}
					var searchProperty = item[this.valueProperty];
					if (typeof searchProperty === 'number') {
						searchProperty = searchProperty.toString();
					}
					if (!this.caseSensitive) {
						term = term.toLowerCase();
						searchProperty = searchProperty.toLowerCase();
					}
					if (searchProperty.indexOf(term) === -1) {
						return true; // exit
					}
				}, this);

				if (noSearchHit) {
					return;
				}

				results.push(this.highlightResult(terms, item));

				if (results.length > this.maxNumberResult) {
					return true;
				}
			}, this);

			return results;
		},

		highlightResult: function (terms, result) {

			var regexpResult = '<b>$1</b>',
				plain = result[this.valueProperty].toString(),
				label = plain;

			terms.forEach(function (term) {
				if (term.length > 0) {
					var re = new RegExp('(' + term + ')', 'ig');
					label = label.replace(re, regexpResult);
				}
			});

			return {
				displayLabel: label,
				plainText: plain,
				data: result
			};
		},

		_computeShownListData: function (term, focus) {
			if (!focus || term.length < this.minimumInputLength) {
				this.debounce('hideSuggestions', this.hideSuggestions, 200);
			}
			if (term.length < this.minimumInputLength) {
				return [];
			}

			var
				terms = this.exactQuery ? [ term ] : term.split(' '),
				results = this.search(terms);

			if (this._focus && results.length > 0) {
				this._hideSuggestions = false;
			}
			return results;
		},

		onSearchResultSelect: function (event, detail) {
			var item = detail.item,
				itemIndex = item.index,
				selectedItem;

			if (itemIndex !== undefined) {
				selectedItem = this.shownListData[itemIndex].data;
				if (!this.isSelected(selectedItem)) {
					this.selectSuggestion(selectedItem);
					this.inputValue = '';
				}
			} else {
				this.onResultActionClick(item);
			}
		},

		_focusChanged: function (focus) {
			if (focus) {
				this.cancelDebouncer('hideSuggestions');
				return;
			}

			// On blur

			// auto-select item that matches input value exactly on blur
			if ((!this.selectedItems || this.selectedItems.length === 0) && this.inputValue.length > 0) {
				this.shownListData.some(function (item) {
					if (this.inputValue === item.data[this.valueProperty]) {
						this.selectSuggestion(item.data);
						return true;
					}
				}, this);
			}
		},

		onResultActionClick: function (item) {
			this.fire('action', {
				inputValue: this.inputValue
			}, {
				bubbles: true,
				cancelable: true,
				node: item
			});
		}
	});
}());