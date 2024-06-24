import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  node_env:z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid Environment Variables')
}

export const env = _env.data