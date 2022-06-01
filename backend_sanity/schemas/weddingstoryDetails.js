export default {
    name: 'weddingstoriesdetails',
    title: 'Weddingstoriesdetails',
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
      {
        name: 'tags',
        title: 'Tags',
        type:'string'
      },
    ],
  };