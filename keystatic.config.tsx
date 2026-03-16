import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    creativeFramework: singleton({
      label: 'Creative Framework',
      path: 'src/content/creative-framework/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.text({ label: 'Title' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
