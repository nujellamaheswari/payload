import type { Collection } from '../../../collections/config/types'

import isolateTransactionID from '../../../utilities/isolateTransactionID'
import { resetPasswordOperation } from '../../operations/resetPassword'

function resetPasswordResolver(collection: Collection) {
  async function resolver(_, args, context) {
    if (args.locale) context.req.locale = args.locale
    if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale

    const options = {
      api: 'GraphQL',
      collection,
      data: args,
      depth: 0,
      req: isolateTransactionID(context.req),
    }

    const result = await resetPasswordOperation(options)

    return result
  }

  return resolver
}

export default resetPasswordResolver
