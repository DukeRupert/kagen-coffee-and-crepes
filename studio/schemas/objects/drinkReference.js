export default {
  name: 'drinkReference',
  type: 'object',
  title: 'Drink reference',
  fields: [
    {
      name: 'drink',
      type: 'reference',
      to: [
        {
          type: 'drink'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'drink.name',
      media: 'drink.image.asset'
    }
  }
}
