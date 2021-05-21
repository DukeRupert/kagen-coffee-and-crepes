export default {
  name: 'drink',
  type: 'document',
  title: 'Drink',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => [
        Rule.required()
          .min(5)
          .error('A title of min. 5 characters is required'),
        Rule.max(20).warning('Shorter titles are usually better, maximum characters allowed is 20.')
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'eg. 3.50',
      validation: Rule =>
        Rule.required()
          .length(4)
          .error('Price must be a total of 4 characters')
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
