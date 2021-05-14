export default {
  name: 'crepeReference',
  type: 'object',
  title: 'Crepe reference',
  fields: [
    {
      name: 'crepe',
      type: 'reference',
      to: [
        {
          type: 'crepe'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'crepe.name',
      media: 'crepe.image.asset'
    }
  }
}
