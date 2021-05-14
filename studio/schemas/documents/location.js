export default {
  name: 'location',
  type: 'document',
  title: 'Location',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
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
      name: 'map',
      type: 'mainImage',
      title: 'Map'
    },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        {
          name: 'line1',
          type: 'string',
          title: 'Line 1',
          description: 'e.g. 270 Williams Blvd'
        },
        {
          name: 'line2',
          type: 'string',
          title: 'Line 2',
          description: 'Richland, WA 99354'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      description: 'e.g. 509-851-7186'
    },
    {
      name: 'hours',
      type: 'array',
      title: 'Business Hours',
      description: 'e.g. Monday-Sunday: 7am to 5pm',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address.line1'
    }
  }
}
