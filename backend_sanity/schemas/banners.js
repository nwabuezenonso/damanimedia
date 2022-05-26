export default {
    name: 'banners',
    title: 'Banners',
    type: 'document',
    fields: [
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ],
  };
  