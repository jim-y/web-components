```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/j-button';

export default {
  title: 'button',
  component: 'j-button',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# Button

A `Button` component

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add @jim-y/web-components
```

```js
import '@jim-y/web-components/dist/j-button.js';
```

```js preview-story
export const Default = () => html` <j-button>Default Button</j-button> `;
```

## Variations

###### Primary

```js preview-story
export const PrimaryButton = () => html`
  <j-button color="primary">Primary Button</j-button>
`;
```
