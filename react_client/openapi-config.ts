import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../node_server/swagger.json',
  apiFile: './src/redux/api.ts',
  apiImport: 'apiSlice',
  outputFile: './src/redux/openapiStore.ts',
  exportName: 'openApi',
  hooks: true,
}

export default config
