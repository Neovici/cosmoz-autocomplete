/**
 * Element to create an input with autocompletetion, multi selection,
 * case-insensitive capabilities and more!
 *
 * @namespace element/cosmoz-autocomplete
 */
(function () {

	'use strict';

	window.Cosmoz = window.Cosmoz || {};

	Polymer({
		is: 'cosmoz-autocomplete',
		behaviors: [
			Cosmoz.TemplateHelperBehavior,
			Cosmoz.TranslatableBehavior,
			Polymer.IronValidatableBehavior,
			Polymer.IronFormElementBehavior
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

			items: {
				type: Array,
				value: function () {
					return [];
				},
				observer: 'itemsChanged'
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
				value: 0,
				observer: '_minimumInputLengthChanged'
			},

			/**
			 * Make input value a single search including spaces instead of
			 * splitting up words in an AND query
			 */
			exactQuery: {
				type: Boolean,
				value: false
			},

			persistSelection: {
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
				notify: true,
				observer: '_inputValueChanged'
			},

			/**
			 * If multiple results can be selected
			 */
			multiSelection: {
				type: Boolean,
				value: false
			},

			required: {
				type: Boolean,
				value: false
			},

			/**
			 * Index of the highlighted result in shownListData
			 */
			selectedSearchResult: {
				type: Number,
				value: 0
			},

			_showClear: {
				type: Boolean,
				computed: '_computeShowClear(disabled, selectedItem)'
			},

			/**
			 * The shown list of results matching the inputValue query
			 */
			shownListData: {
				type: Array,
				computed: '_computeShownListData(inputValue, _focus, minimumInputLength, _searchKicker, items, selectedItems.length)'
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

			selectedItem: {
				type: Object,
				notify: true,
				value: null,
				observer: 'selectedItemChanged'
			},

			selectedItems: {
				type: Array,
				notify: true,
				value: function () {
					return [];
				},
				observer: 'selectedItemsChanged'
			},

			valueProperty: {
				type: String,
				value: 'label'
			},

			tabbindex: {
				type: Number
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
			 * Whether to make results show above element
			 */
			_dropUp: {
				type: Boolean,
				value: false
			},

			/**
			 * Whether to show shownListData
			 */
			_hideSuggestions: {
				type: Boolean,
				value: true
			},

			/**
			 * The message to display for the current state error
			 */
			_errorMessage: {
				type: String,
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
			},

			_searchErrorMessage: {
				type: String
			}
		},

		observers: [
			'isSelectedDisabled(disabled, selectedItem, valueProperty)'
		],

		isSelectedDisabled: function (disabled, selectedItem, valueProperty) {
			if (disabled && selectedItem) {
				this.inputValue = this.get(valueProperty, selectedItem);
			}
		},

		itemsChanged: function (newItems) {
			if (this.persistSelection || !Array.isArray(newItems) || !Array.isArray(this.selectedItems)) {
				return;
			}
			this.selectedItems.forEach(function (item, index) {
				if (newItems.indexOf(item) !== -1) {
					return;
				}
				this.splice('selectedItems', index, 1);
			}, this);
		},

		_inputValueChanged: function () {
			this._validateComponent();
		},

		_minimumInputLengthChanged: function () {
			this._validateComponent();
		},

		selectedItemChanged: function (item) {
			var value = '';
			if (item && !this.multiSelection) {
				value = this._valueForItem(item);
			}
			this.inputValue = value;

			if (this.selectedItems === undefined || this.selectedItems === null || !Array.isArray(this.selectedItems)) {

				this.selectedItems = [];
				if (item !== undefined && item !== null) {
					this.push('selectedItems', item);
				}

			} else if (this.selectedItems.indexOf(item) === -1) {

				this.splice('selectedItems', 0, this.selectedItems.length);

				if (item !== undefined && item !== null) {
					this.push('selectedItems', item);
				}
			}
		},

		selectedItemsChanged: function (items) {
			if (items === undefined || items === null || !Array.isArray(items)) {
				this.selectedItems = [];
				return;
			}
			if (items.length === 0) {
				return;
			}
			var item = items[0];
			if (this.selectedItem !== item) {
				this.set('selectedItem', item);
			}
		},

		_shownListDataChanged: function () {
			this._validateComponent();
		},

		_computeShowMultiSelection: function (multiSelection, hideSelections) {
			return multiSelection && !hideSelections;
		},

		_computeShowClear: function (disabled, selectedItem) {
			return !disabled && selectedItem;
		},

		_computeShowActions: function (showActionsLimit, numShownResults) {
			return numShownResults <= showActionsLimit;
		},

		_computeShownListData: function (term, focus) {
			if (!focus || term.length < this.minimumInputLength) {
				this.debounce('hideSuggestions', this.hideSuggestions, 200);
			}

			if (term.length < this.minimumInputLength || this.selectedItem && term === this._valueForItem(this.selectedItem)) {
				return [];
			}
			var
				terms = this.exactQuery ? [ term ] : term.split(' '),
				results = this.search(terms),
				offsetTop,
				offsetBottom;

			if (results.length === 0) {
				this._searchErrorMessage = this._('No results found');
			} else {
				this._searchErrorMessage = null;
			}

			if (this._focus) {
				Polymer.RenderStatus.afterNextRender(this, function () {
					/* eslint-disable no-invalid-this */
					if (this.offsetParent === null) {
						return;
					}
					offsetTop = this.offsetTop;
					offsetBottom = this.offsetParent.offsetHeight - offsetTop;
					this._hideSuggestions = false;
					this._dropUp = offsetTop > offsetBottom;
					/* esling-enable no-invalid-this */
				});
			}

			return results;
		},

		_getValidity: function () {
			return this._validateComponent(true);
		},

		_increaseNum: function (num, inc) {
			return num + inc;
		},

		clearOneSelection: function (event) {
			if (!Array.isArray(this.selectedItems)) {
				return;
			}
			var item = event.model.item,
				selectIndex = this.selectedItems.indexOf(item);
			if (selectIndex !== -1) {
				this.splice('selectedItems', selectIndex, 1);
			}
		},

		isSelected: function (item) {
			return Array.isArray(this.selectedItems) && this.selectedItems.indexOf(item) !== -1;
		},

		keyup: function (event, detail) {
			var
				el = this.$.searchResults,
				selectedItem;

			switch (event.keyCode) {
			case 13: // enter

				if (this.selectedSearchResult >= 0) {
					if (!this.shownListData[this.selectedSearchResult]) {
						this._requestNextFocus();
						break;
					}

					selectedItem = this.shownListData[this.selectedSearchResult].data;

					if (this.shownListData.length === this.selectedSearchResult + 1) {
						this.selectedSearchResult -= 1;
					}

					this._searchKicker += 1;

					// this.inputValue = this.multiSelection ? '' : selectedItem.label;

					this.selectSuggestion(selectedItem);
					this._requestNextFocus();
				} else {
					this.onResultActionClick();
					this.selectedSearchResult = undefined;
				}
				break;
			case 27: // escape
				this.hideSuggestions();
				break;
			case 38: // up
				el.selectPrevious(false);
				break;
			case 40: // down
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

		selectItem: function (item) {
			if (!this.multiSelection) {
				if (this.selectedItem !== item) {
					this.selectedItem = item;
				}
				return;
			}
			if (!Array.isArray(this.selectedItems) || this.selectedItems.indexOf(item) !== -1) {
				return;
			}
			this.push('selectedItems', item);
		},

		selectSuggestion: function (item) {
			this.selectItem(item);
			this.hideSuggestions();
			this.inputValue = this.multiSelection ? '' : this._valueForItem(item);
		},

		search: function (terms) {
			var results = [],
				searchTerms = terms;

			if (typeof terms === 'string') {
				searchTerms = [terms];
			}

			if (this.items === undefined || this.items === null) {
				return [];
			}

			this.items
				.filter(function (item) {

					if (item === null || item === undefined) {
						return false;
					}

					if (Array.isArray(this.selectedItems) && this.selectedItems.length > 0) {
						// don't add already selected items
						if (this.selectedItems.indexOf(item) !== -1) {
							return false;
						}

						// don't add new instances of the same items
						if (this.persistSelection) {
							return this.selectedItems.some(function (selectedItem) {
								return selectedItem === item;
							}, this);
						}
					}

					return true;
				}, this)
				.every(function (item) {
					var searchProperty,
						searchHit;

					searchProperty = this._valueForItem(item);

					if (typeof searchProperty === 'number') {
						searchProperty = searchProperty.toString();
					}
					if (!this.caseSensitive) {
						searchProperty = searchProperty.toLowerCase();
					}

					searchHit = searchTerms
						.filter(function (term) {
							// beginning/ending space in multi word search, continue
							return term !== '';
						})
						.every(function (term) {
							var searchTerm = term;
							if (!this.caseSensitive) {
								searchTerm = term.toLowerCase();
							}
							return searchProperty.indexOf(searchTerm) !== -1;
						}, this);


					if (!searchHit) {
						return true;
					}

					results.push(this.highlightResult(searchTerms, item));

					return results.length <= this.maxNumberResult;

				}, this);
			return results;
		},

		highlightResult: function (terms, result) {

			if (result === null || result === undefined) {
				return;
			}

			var regexpResult = '<b>$1</b>',
				plain = this._valueForItem(result).toString(),
				label = plain;

			terms
				.filter(function (term) {
					return term.length > 0;
				})
				.forEach(function (term) {
					var re = new RegExp('(' + term + ')', 'ig');
					label = label.replace(re, regexpResult);
				});

			return {
				displayLabel: label,
				plainText: plain,
				data: result
			};
		},

		_requestNextFocus: function () {
			this.fire('request-next-focus', {
				tabindex: this.tabbindex
			}, {
				bubbles: false,
				cancelable: true
			});
		},

		_getDropUpClass: function (dropUp) {
			return dropUp ? 'dropup' : '';
		},

		onSearchResultSelect: function (event, detail) {
			var item = detail.item,
				selectedItem;

			if (item.index !== undefined) {
				selectedItem = this.shownListData[item.index].data;
				if (!this.isSelected(selectedItem)) {
					this.selectSuggestion(selectedItem);
				}
			} else {
				this.onResultActionClick(item);
			}
		},
		_focusChanged: function (focus) {

			this._validateComponent();

			if (focus) {
				this.cancelDebouncer('hideSuggestions');
				return;
			}

			// on blur

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

		_valueForItem: function (item) {
			if (item === null || item === undefined) {
				return;
			}
			return item[this.valueProperty];
		},

		onResultActionClick: function (item) {
			this.fire('action', {
				inputValue: this.inputValue
			}, {
				bubbles: true,
				cancelable: true,
				node: item
			});
		},
		emptySelection: function () {
			this.set('selectedItem', null);
		},
		focus: function (focus) {
			this.async(function () {
				if (focus) {
					this.$.searchInput.focus();
				} else {
					this.$.searchInput.blur();
				}
			}, 1);

			this._validateComponent();
		},

		_validateComponent: function (printErrorMessage) {

			if (!printErrorMessage)  {
				this._errorMessage = '';
			}

			// an item is selected and the term matches the value?
			if (this.selectedItem && this.inputValue === this._valueForItem(this.selectedItem)) {
				if (printErrorMessage) {
					this._errorMessage = '';
				}
				return true;
			}

			// this is required and nothing is selected?
			if (this.required && (!this.selectedItems || !this.selectedItems.length)) {
				if (printErrorMessage) {
					this._errorMessage = this._('Nothing selected.');
				}
				return false;
			}

			this._errorMessage = '';
			// passed all the above
			return true;
		}
	});
}());
