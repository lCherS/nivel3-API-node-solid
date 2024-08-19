import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  async setup() {
    console.log('executou pte')

    return {
      async teardown() {
        console.log('teardown')
      },
    }
  },
}
