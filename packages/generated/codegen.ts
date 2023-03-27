import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: '../../apps/api/schema.graphql',
	documents: ['../../apps/web/**/*.graphql'],
	generates: {
		'./generated.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
				'typescript-resolvers',
			],
			config: {
				withHooks: true,
				scalars: {
					Date: 'string',
					DateTime: 'string',
					SearchString: 'string',
				},
			},
			hooks: {
				afterOneFileWrite: ['yarn postgenerate'],
			},
		},
	},
};

export default config;
