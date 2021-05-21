export default {
  name: 'coffeeReference',
  type: 'object',
  title: 'Coffee reference',
  fields: [
    {
      name: 'coffee',
      type: 'reference',
      to: [
        {
          type: 'coffee'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'coffee.name',
      media: 'coffee.image.asset'
    }
  }
}
