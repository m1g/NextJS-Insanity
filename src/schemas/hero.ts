const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'event',
        title: 'Event',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'event' }
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }]
      }
    ]
  }
  
  export default hero;