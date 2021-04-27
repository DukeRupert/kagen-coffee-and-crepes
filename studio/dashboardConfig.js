export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60878a25976dc674d05392c2',
                  title: 'Sanity Studio',
                  name: 'kagen-coffee-and-crepes-studio',
                  apiId: '39a8b047-f32c-477f-bd91-601a3b8ceb9b'
                },
                {
                  buildHookId: '60878a24976dc67cde5391ab',
                  title: 'Blog Website',
                  name: 'kagen-coffee-and-crepes',
                  apiId: '2bc6b462-f836-4265-9170-cb721f2c7a21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DukeRupert/kagen-coffee-and-crepes',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kagen-coffee-and-crepes.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
