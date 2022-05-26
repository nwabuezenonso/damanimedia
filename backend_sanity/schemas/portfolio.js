export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        },
        {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
            hotspot: true,
        }
        },
        {
        name: 'tags',
        title: 'Tags',
        type:'array',
        of: [
            {
            name:'tag',
            title:'Tag',
            type:'string'
            }
        ]
        },
    ],
  };