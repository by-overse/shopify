import { z } from 'zod';

// ------------------------------------------------ --------------------------------
// # --- Utility to generate a typed metaobject schema
/**
 * Generates a Zod schema for a metaobject with typed keys.
 *
 * @param keys - The keys of the metaobject fields.
 * @returns A Zod schema for a typed metaobject.
 *
 * @example
 * ```ts
 * const metaobjectSchema = zodMetaobjectKeys(['name', 'description']);
 *
 * const metaobject = {
 *   id: '123',
 *   fields: [
 *     { key: 'name', value: 'Product 1' },
 *     { key: 'description', value: 'Description of product 1' },
 *   ],
 * };
 *
 * metaobjectSchema.parse(metaobject);
 * // { id: '123', fields: [ { key: 'name', value: 'Product 1' }, { key: 'description', value: 'Description of product 1' } ] }
 * ```
 */
const zodMetaobjectKeys = (keys) => z.object({
    id: z.string(),
    fields: z.array(z.object({
        key: z.enum(keys),
        value: z.string(),
    })),
});

export { zodMetaobjectKeys };
