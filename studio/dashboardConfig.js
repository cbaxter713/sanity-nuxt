export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-studio-k1hnvwnw',
                  apiId: 'c5bd4ba3-6f4c-41bf-86dc-3ca13358d475'
                },
                {
                  buildHookId: '602fdf3fd52bff45c43ff584',
                  title: 'Events Website',
                  name: 'sanity-nuxt-web-w8j33q69',
                  apiId: '6636f8e9-4de8-48ee-9700-03fac77f403d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cbaxter713/sanity-nuxt',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-web-w8j33q69.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
