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
          name:'imgUrl',
          title:'ImgUrl',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
    ],
  };