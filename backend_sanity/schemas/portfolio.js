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
          name: 'imgUrl',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'tags',
          title: 'Tags',
          type:'string'
        },
    ],
  };
  