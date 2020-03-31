import { html } from 'lit-html';
import '../cosmoz-autocomplete'

export default {
  title: 'Autocomplete',
  component: 'cosmoz-autocomplete',
};

export const singleComponent = () => html`
  <cosmoz-autocomplete .label=${'Choose color'} ></cosmoz-autocomplete>
`;
