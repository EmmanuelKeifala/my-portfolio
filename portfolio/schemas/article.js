export default {
  name: 'articles',
  title: 'Articles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'time',
      title: 'Reading Time',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'avatar',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      type: 'string',
      options: {
        list: [
          {title: 'Featured', value: 'featured'},
          {title: 'Normal', value: 'normal'},
        ],
      },
    },
  ],
};
