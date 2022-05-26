export default {
    name: 'featuredpost',
    title: 'Featuredpost',
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
    ],
  };