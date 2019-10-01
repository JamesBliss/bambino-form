import { configure, addDecorator, addParameters } from '@storybook/react';

addParameters({
  options: {
    theme: {
      brandTitle: 'bambino-form',
      brandUrl: 'https://jamesbliss.github.io/bambino-form'
    },
    hierarchyRootSeparator: /\|/,
  }
})

// automatically import all files ending in *.story.js
const req = require.context('../__stories__', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
