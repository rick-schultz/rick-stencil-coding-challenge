import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'example-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'example-component.spec.tsx',
      'example-component.e2e.ts',
    ],
  },
};

export const empty = (content : HTMLElement) => `<example-component>${content}</example-component>`;
