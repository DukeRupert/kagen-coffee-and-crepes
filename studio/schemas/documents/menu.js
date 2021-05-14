export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      name: 'name',
      type: 'locationReference',
      title: 'Name'
    },
    {
      name: 'sweet',
      type: 'array',
      title: 'Sweet Crepes',
      of: [{ type: 'crepeReference' }]
    },
    {
      name: 'savory',
      type: 'array',
      title: 'Savory Crepes',
      of: [{ type: 'crepeReference' }]
    }
  ],
  preview: {
    select: {
      name: 'name.location.name'
    },
    prepare(selection) {
      const { name } = selection
      return {
        title: name ? name : 'unknown'
      }
    }
  }
}
