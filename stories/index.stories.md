```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/web-components.js';

export default {
  title: 'WebComponents',
  component: 'web-components',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# WebComponents

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add web-components
```

```js
import 'web-components/web-components.js';
```

```js preview-story
export const Simple = () => html`
  <web-components></web-components>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <web-components title="Hello World"></web-components>
`;
```
