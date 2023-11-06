export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
    },
  ],
};
