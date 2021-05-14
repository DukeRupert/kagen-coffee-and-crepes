export default {
  name: 'locationReference',
  type: 'object',
  title: 'Location reference',
  fields: [
    {
      name: 'location',
      type: 'reference',
      to: [
        {
          type: 'location'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'location.name',
      subtitle: 'location.address.line1'
    }
  }
}
