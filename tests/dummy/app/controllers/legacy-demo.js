/* eslint no-console: 0 */
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { later } from '@ember/runloop';
import RSVP from 'rsvp';

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty'
];

const moarNumbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'thirty',
  'thirty one',
  'thirty two',
  'thirty three',
  'thirty four',
  'thirty five',
  'thirty six',
  'thirty seven',
  'thirty eight',
  'thirty nine',
  'fourty',
  'fourty one',
  'fourty two',
  'fourty three',
  'fourty four',
  'fourty five',
  'fourty six',
  'fourty seven',
  'fourty eight',
  'fourty nine',
  'fifty',
  'fifty one',
  'fifty two',
  'fifty three',
  'fifty four',
  'fifty five',
  'fifty six',
  'fifty seven',
  'fifty eight',
  'fifty nine',
  'sixty',
  'sixty one',
  'sixty two',
  'sixty three',
  'sixty four',
  'sixty five',
  'sixty six',
  'sixty seven',
  'sixty eight',
  'sixty nine',
  'seventy',
  'seventy one',
  'seventy two',
  'seventy three',
  'seventy four',
  'seventy five',
  'seventy six',
  'seventy seven',
  'seventy eight',
  'seventy nine',
  'eighty',
  'eighty one',
  'eighty two',
  'eighty three',
  'eighty four',
  'eighty five',
  'eighty six',
  'eighty seven',
  'eighty eight',
  'eighty nine',
  'ninety',
  'ninety one',
  'ninety two',
  'ninety three',
  'ninety four',
  'ninety five',
  'ninety six',
  'ninety seven',
  'ninety eight',
  'ninety nine',
  'one hundred',
  'one hundred and one',
  'one hundred and two',
  'one hundred and three',
  'one hundred and four',
  'one hundred and five',
  'one hundred and six',
  'one hundred and seven',
  'one hundred and eight',
  'one hundred and nine',
  'one hundred and ten',
  'one hundred and eleven',
  'one hundred and twelve',
  'one hundred and thirteen',
  'one hundred and fourteen',
  'one hundred and fifteen',
  'one hundred and sixteen',
  'one hundred and seventeen',
  'one hundred and eighteen',
  'one hundred and nineteen',
  'one hundred and twenty',
  'one hundred and twenty one',
  'one hundred and twenty two',
  'one hundred and twenty three',
  'one hundred and twenty four',
  'one hundred and twenty five',
  'one hundred and twenty six',
  'one hundred and twenty seven',
  'one hundred and twenty eight',
  'one hundred and twenty nine',
  'one hundred and thirty',
  'one hundred and thirty one',
  'one hundred and thirty two',
  'one hundred and thirty three',
  'one hundred and thirty four',
  'one hundred and thirty five',
  'one hundred and thirty six',
  'one hundred and thirty seven',
  'one hundred and thirty eight',
  'one hundred and thirty nine',
  'one hundred and fourty',
  'one hundred and fourty one',
  'one hundred and fourty two',
  'one hundred and fourty three',
  'one hundred and fourty four',
  'one hundred and fourty five',
  'one hundred and fourty six',
  'one hundred and fourty seven',
  'one hundred and fourty eight',
  'one hundred and fourty nine',
  'one hundred and fifty',
  'one hundred and fifty one',
  'one hundred and fifty two',
  'one hundred and fifty three',
  'one hundred and fifty four',
  'one hundred and fifty five',
  'one hundred and fifty six',
  'one hundred and fifty seven',
  'one hundred and fifty eight',
  'one hundred and fifty nine',
  'one hundred and sixty',
  'one hundred and sixty one',
  'one hundred and sixty two',
  'one hundred and sixty three',
  'one hundred and sixty four',
  'one hundred and sixty five',
  'one hundred and sixty six',
  'one hundred and sixty seven',
  'one hundred and sixty eight',
  'one hundred and sixty nine',
  'one hundred and seventy',
  'one hundred and seventy one',
  'one hundred and seventy two',
  'one hundred and seventy three',
  'one hundred and seventy four',
  'one hundred and seventy five',
  'one hundred and seventy six',
  'one hundred and seventy seven',
  'one hundred and seventy eight',
  'one hundred and seventy nine',
  'one hundred and eighty',
  'one hundred and eighty one',
  'one hundred and eighty two',
  'one hundred and eighty three',
  'one hundred and eighty four',
  'one hundred and eighty five',
  'one hundred and eighty six',
  'one hundred and eighty seven',
  'one hundred and eighty eight',
  'one hundred and eighty nine',
  'one hundred and ninety',
  'one hundred and ninety one',
  'one hundred and ninety two',
  'one hundred and ninety three',
  'one hundred and ninety four',
  'one hundred and ninety five',
  'one hundred and ninety six',
  'one hundred and ninety seven',
  'one hundred and ninety eight',
  'one hundred and ninety nine',
  'two hundred',
  'two hundred and one',
  'two hundred and two',
  'two hundred and three',
  'two hundred and four',
  'two hundred and five',
  'two hundred and six',
  'two hundred and seven',
  'two hundred and eight',
  'two hundred and nine',
  'two hundred and ten',
  'two hundred and eleven',
  'two hundred and twelve',
  'two hundred and thirteen',
  'two hundred and fourteen',
  'two hundred and fifteen',
  'two hundred and sixteen',
  'two hundred and seventeen',
  'two hundred and eighteen',
  'two hundred and nineteen',
  'two hundred and twenty',
  'two hundred and twenty one',
  'two hundred and twenty two',
  'two hundred and twenty three',
  'two hundred and twenty four',
  'two hundred and twenty five',
  'two hundred and twenty six',
  'two hundred and twenty seven',
  'two hundred and twenty eight',
  'two hundred and twenty nine',
  'two hundred and thirty',
  'two hundred and thirty one',
  'two hundred and thirty two',
  'two hundred and thirty three',
  'two hundred and thirty four',
  'two hundred and thirty five',
  'two hundred and thirty six',
  'two hundred and thirty seven',
  'two hundred and thirty eight',
  'two hundred and thirty nine',
  'two hundred and fourty',
  'two hundred and fourty one',
  'two hundred and fourty two',
  'two hundred and fourty three',
  'two hundred and fourty four',
  'two hundred and fourty five',
  'two hundred and fourty six',
  'two hundred and fourty seven',
  'two hundred and fourty eight',
  'two hundred and fourty nine',
  'two hundred and fifty',
  'two hundred and fifty one',
  'two hundred and fifty two',
  'two hundred and fifty three',
  'two hundred and fifty four',
  'two hundred and fifty five',
  'two hundred and fifty six',
  'two hundred and fifty seven',
  'two hundred and fifty eight',
  'two hundred and fifty nine',
  'two hundred and sixty',
  'two hundred and sixty one',
  'two hundred and sixty two',
  'two hundred and sixty three',
  'two hundred and sixty four',
  'two hundred and sixty five',
  'two hundred and sixty six',
  'two hundred and sixty seven',
  'two hundred and sixty eight',
  'two hundred and sixty nine',
  'two hundred and seventy',
  'two hundred and seventy one',
  'two hundred and seventy two',
  'two hundred and seventy three',
  'two hundred and seventy four',
  'two hundred and seventy five',
  'two hundred and seventy six',
  'two hundred and seventy seven',
  'two hundred and seventy eight',
  'two hundred and seventy nine',
  'two hundred and eighty',
  'two hundred and eighty one',
  'two hundred and eighty two',
  'two hundred and eighty three',
  'two hundred and eighty four',
  'two hundred and eighty five',
  'two hundred and eighty six',
  'two hundred and eighty seven',
  'two hundred and eighty eight',
  'two hundred and eighty nine',
  'two hundred and ninety',
  'two hundred and ninety one',
  'two hundred and ninety two',
  'two hundred and ninety three',
  'two hundred and ninety four',
  'two hundred and ninety five',
  'two hundred and ninety six',
  'two hundred and ninety seven',
  'two hundred and ninety eight',
  'two hundred and ninety nine'
];

const countries = [
  { name: 'United States',  code: 'US', population: 321853000 },
  { name: 'Spain',          code: 'ES', population: 46439864 },
  { name: 'Portugal',       code: 'PT', population: 10374822 },
  { name: 'Russia',         code: 'RU', population: 146588880 },
  { name: 'Latvia',         code: 'LV', population: 1978300 },
  { name: 'Brazil',         code: 'BR', population: 204921000 },
  { name: 'United Kingdom', code: 'GB', population: 64596752 }
];

const contriesWithDisabled = [
  { name: 'United States',  code: 'US', population: 321853000 },
  { name: 'Spain',          code: 'ES', population: 46439864 },
  { name: 'Portugal',       code: 'PT', population: 10374822, disabled: true },
  { name: 'Russia',         code: 'RU', population: 146588880, disabled: true },
  { name: 'Latvia',         code: 'LV', population: 1978300 },
  { name: 'Brazil',         code: 'BR', population: 204921000, disabled: true },
  { name: 'United Kingdom', code: 'GB', population: 64596752 }
];

const names = [
  'María',
  'Søren Larsen',
  'João',
  'Miguel',
  'Marta',
  'Lisa'
];

const searchTypes = [
  { label: 'Title/Artist' },
  { label: 'Title' },
  { label: 'Artist' },
  { label: 'Foo' },
  { label: 'Bar' },
  { label: 'FooBar' },
  { label: 'Tomster' },
  { label: 'Aretha' },
  { label: 'Franklin' }
];

export default Controller.extend({
  names,
  simpleOptions: numbers,
  defaultHighlightedExample: numbers[3],
  moarNumbers,
  simpleSelected: 'six',

  complexOptions: countries,
  complexSelected: countries[1],

  prefilledSelection: 'seven',

  complexOptionsWithDisabled: contriesWithDisabled,

  multipleSelection: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'],
  emptyMultipleSelection: [],

  optionOfGroup: null,
  groupedOptions: [
    { groupName: 'Smalls', disabled: true, options: ['one', 'two', 'three'] },
    { groupName: 'Mediums', disabled: true, options: ['four', 'five', 'six'] },
    {
      groupName: 'Bigs',
      options: [
        { groupName: 'Fairly big', options: ['seven', 'eight', 'nine'] },
        { groupName: 'Really big', options: ['ten', 'eleven', 'twelve'] },
        'thirteen'
      ]
    },
    'one hundred',
    'one thousand'
  ],

  actions: {
    onSelectOpen(select) {
      select.actions.search('foo');
    },

    searchFoo() {
      return ['one', 'two'];
    },

    debugSelection(option) {
      console.debug('I\'ve selected', option);
    },

    search(term) {
      let length = term.length;
      return numbers.filter((str) => str.length === length); // returns the numbers with the same length than the current
    },

    asyncSearch(term) {
      return new RSVP.Promise(function(resolve) {
        later(function() {
          resolve(numbers.filter((str) => str.indexOf(term) > -1));
        }, 1500);
      });
    },

    didFocus(select) {
      select.actions.open();
    }
  },

  promiseOptions: computed(function() {
    return new RSVP.Promise(function(resolve) {
      setTimeout(function() {
        console.debug('PromiseOptions resolved!');
        resolve(numbers);
      }, 5000);
    });
  }),

  endsWithMatcher(value, text) {
    return text === '' || value.slice(text.length * -1) === text;
  },

  // Flexbox issue
  searchTypes,
  searchKey: searchTypes[0]
});
