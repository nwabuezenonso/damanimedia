export default {
    name: 'stories',
    title: 'Stories',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        },
        {
          name: 'imgUrl',
          title: 'ImgUrl',
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