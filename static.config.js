import path from 'path'
import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import stringify from 'fast-safe-stringify'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/pages/index'
      },
      {
        path: '/foo',
        template: 'src/pages/foo'
      },
      {
        is404: true,
        path: '/404',
        template: 'src/pages/404'
      }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-css-modules'),
      {
        localIdentName: '[name]__[local]--[hash:base64:5]',
      }
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
