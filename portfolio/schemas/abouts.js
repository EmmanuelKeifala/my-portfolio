export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description1',
      title: 'Description 1',
      type: 'string',
    },
    {
      name: 'description2',
      title: 'Description 2',
      type: 'string',
    },
    {
      name: 'description3',
      title: 'Description 3',
      type: 'string',
    },
    {
      name: 'clientSatisfied',
      title: 'Satisfied Clients',
      type: 'number',
    },
    {
      name: 'projectsCompleted',
      title: 'Projects Completed',
      type: 'number',
    },
    {
      name: 'workingExperience',
      title: 'Working Experience',
      type: 'number',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
