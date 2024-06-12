import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'


export default defineConfig({
  name: 'default',
  title: 'me-and-pic-sanity',

  projectId: '54x35z0z',
  dataset: 'production',
  apiVersion: '2023-06-12',
  basePath: '/admin',

  plugins: [structureTool()],


})