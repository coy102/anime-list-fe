require('regenerator-runtime/runtime')
const dotenv = require('dotenv')

dotenv.config()
const host = process.env.VITE_GRAPHQL_HOST

const codegenOptions = async () => {
  const bearer = `Bearer`

  return {
    overwrite: true,
    generates: {
      'src/gqlcodegen/types.ts': {
        schema: {
          [host]: {
            headers: {},
          },
        },
        plugins: ['typescript'],
        config: {
          skipTypename: true,
        },
      },
      'src/gqlcodegen/queries/': {
        schema: {
          [host]: {
            headers: {},
          },
        },
        preset: 'near-operation-file',
        documents: 'src/gqlcodegen/queries/*.graphql',
        presetConfig: {
          extension: '.ts',
          baseTypesPath: '../types.ts',
          folder: '../hooks',
        },
        plugins: ['typescript-operations', 'typescript-react-apollo'],
        config: {
          noExport: false,
          skipTypename: true,
          withMutationFn: false,
          withResultType: false,
          withMutationOptionsType: false,
        },
      },
    },
  }
}

module.exports = codegenOptions()
