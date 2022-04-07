export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624f0b5a3ea06d0d94899610',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w58xet9h',
                  apiId: 'a5eef8b4-6263-406e-8887-1741911462d9'
                },
                {
                  buildHookId: '624f0b5bf902b614dfe032b1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vn8kqsi6',
                  apiId: 'b1dea4e8-be92-4919-b9b0-e617cc832dd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tjs1990-hub/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vn8kqsi6.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
