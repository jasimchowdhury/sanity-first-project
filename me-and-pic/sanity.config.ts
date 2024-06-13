import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas'


export default defineConfig({
  name: 'default',
  title: 'me-and-pic-sanity',

  projectId: '54x35z0z',
  dataset: 'production',
  apiVersion: '2023-06-12',
  basePath: '/admin',

  plugins: [structureTool()],
  schema: {types: schemas}


})