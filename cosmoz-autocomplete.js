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
			 */
			caseSensitive: {
				type: Boolean,
				value: false
			},
			/**
			 * Do not show the list of multi-selection values.
			 * Used when selected item list is handled by the compositing element.
			 */
			hideSelections: {
				type: Boolean,
				value: false
			},
			/**
			 * Whether to show a loading spinner.
			 * Useful when something external is controlling the items dynamically (XHR)
			 * and users should be informed something is going on.
			 */
			loading: {
				type: Boolean,
				value: false
			},
			/**
			 * Maximum number of shown results in a search.
			 */
			maxNumberResult: {
				type: Number,
				value: 30
			},
			/**
			 * Minimum length of search string for search to activate.
			 */
			minimumInputLength: {
				type: Number,
				value: 0
			},
			/**
			 * Make input value a single search including spaces instead of
			 * splitting up words in an AND query
			 */
			exactQuery: {
				type: Boolean,
				value: false
			},
			/**
			 * Label to show/float within the input to describe the search
			 */
			placeholder: {
				type: String,
				value: 'Search'
			},
			/**
			 * Prefix label on single item selection
			 */
			searchType: {
				type: String
			},

			/**
			 * Display actions provided in elements light DOM when the count
			 * of items in the selector is below this value.
			 */
			showActionsLimit: {
				type: Number,
				value: 5
			},

			/**
			 * Input value, the current search string.
			 */
			inputValue: {
				type: String,
				value: '',
				notify: true
			},

			/**
			 * If multiple results can be selected
			 */
			multiSelection: {
				type: Boolean
			},

			/**
			 * Index of the highlighted result in shownListData
			 */
			selectedSearchResult: {
				type: Number,
				value: 0
			},

			/**
			 * The shown list of results matching the inputValue query
			 */
			shownListData: {
				type: Array,
				computed: '_computeShownListData(inputValue, _focus, _searchKicker, items)'
			},
			/**
			 * Set to true to disable the floating label
			 */
			noLabelFloat: {
				type: Boolean,
				value: false
			},
			/**
			 * Set to true to disable element
			 */
			disabled: {
				type: Boolean,
				value: false
			},

			// PRIVATE


			/**
			 * Focus state of the input element
			 */
			_focus: {
				type: Boolean,
				value: false,
				observer: '_focusChanged'
			},

			/**
			 * Whether to show shownListData
			 */
			_hideSuggestions: {
				type: Boolean
			},

			/**
			 * The message to display for the current state error
			 */
			_searchErrorMsg: {
				type: String,
				computed: '_computeSearchErrorMessage(_focus, inputValue, minimumInputLength, shownListData.length)'
			},

			/**
			 * Workaround kicker to carry out a search when inputValue, focus and items is the same,
			 * like when selecting an item by pressing Enter on the keyboard
			 */
			_searchKicker: {
				type: Number,
				value: 0
			},

			/**
			 * State of whether we should show any result actions supplied
			 */
			_showActions: {
				type: Boolean,
				computed: '_computeShowActions(showActionsLimit, shownListData.length)'
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
				return this._('Enter at least {0} characters to search.', minLength);
			}
			if (numResults === 0) {
				return this._('No results found');
			}
			return '';
		},

		_computeShowActions: function (showActionsLimit, numShownResults) {
			return numShownResults <= showActionsLimit;
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

				var hasOtherInstance = false,
					itemValue = this._valueForItem(item),
					noSearchHit = false;

				if (this.selectedItems && this.selectedItems.length > 0) {

					// don't add already selected items
					if (this.selectedItems.indexOf(item) !== -1) {
						return;
					}

					// don't add new instances of the same items
					if (this.persistSelection) {
						hasOtherInstance = this.selectedItems.some(function (selectedItem) {
							if (this._valueForItem(selectedItem) === itemValue) {
								return true;
							}
						}, this);

						if (hasOtherInstance) {
							return;
						}
					}
				}

				noSearchHit = terms.some(function (term) {
					if (term === '') {
						return; // beginning/ending space in multi word search, continue
					}
					var searchProperty = itemValue;
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
				plain = this._valueForItem(result).toString(),
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
			if ((!this.selectedItems || this.selectedItems.length === 0) && this.inputValue.length > 0 && this.shownListData) {
				this.shownListData.some(function (item) {
					if (this.inputValue === this._valueForItem(item.data)) {
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
