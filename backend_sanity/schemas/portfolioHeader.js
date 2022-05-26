export default {
    name: 'stories',
    title: 'WeddingStories',
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
            type:  'image',
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