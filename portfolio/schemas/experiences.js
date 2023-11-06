export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'workExperience'}],
    },
    {
      name: 'companyLink',
      title: 'Company Link',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
  ],
};
