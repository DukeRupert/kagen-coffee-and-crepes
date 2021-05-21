export default {
  name: 'crepe',
  type: 'document',
  title: 'Crepe',
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
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'price',
      type: 'object',
      title: 'Price',
      fields: [
        {
          name: 'full',
          type: 'string',
          title: 'Full',
          description: 'eg. 7.00 or 11.50',
          validation: Rule =>
            Rule.required()
              .length(4)
              .error('Price must be a total of 4 characters')
        },
        {
          name: 'mini',
          type: 'string',
          title: 'Mini',
          description: 'eg. 7.00 or 11.50',
          validation: Rule =>
            Rule.required()
              .length(4)
              .error('Price must be a total of 4 characters')
        }
      ]
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
