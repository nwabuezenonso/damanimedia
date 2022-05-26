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
            name: 'photographer',
            title: 'Photographer',
            type: 'string',
        },
        {
            name: 'cinimatographer',
            title: 'cinimatographer',
            type: 'string',
        },
        {
            name: 'bride',
            title: 'Bride',
            type: 'string',
        },
        {
            name: 'eventplanner',
            title: 'eventplanner',
            type: 'string',
        },
        {
            name: 'decor',
            title: 'Decor',
            type: 'string',
        },
        {
            name: 'outfit',
            title: 'Outfit',
            type: 'string',
        },
        {
            name: 'makeup',
            title: 'Makeup',
            type: 'string',
        },
        {
            name: 'hair',
            title: 'Hair',
            type: 'string',
        },
        {
            name: 'horsetailandbeads',
            title: 'Horsetail and Beads',
            type: 'string'
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
        {
        name:'contactname',
        title:'contact Name',
        type:'string'
        },
        {
        name:'contactemail',
        title:'contact Email',
        type:'string'
        },
        {
        name:'contactmessage',
        title:'contact Message',
        type:'text'
        }
    ],
  };