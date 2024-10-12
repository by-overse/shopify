import { ZodSchema } from 'zod';
import { typedMetaobject } from '../typedMetaobject';

/**
 * Converts a metaobject to an object, where the fields are typed and flattened.
 *
 * @param keys - The keys of the metaobject fields.
 * @param objSchema - The schema of the object.
 * @returns A Zod schema that converts a typed metaobject to an object.
 *
 * @example
 * ```ts
 * const metaobjectToObject = metaobjectToObject(['name', 'description'], z.object({
 *   name: z.string(),
 *   description: z.string(),
 * ));
 *
 * const metaobject = {
 *   id: '123',
 *   fields: [
 *     { key: 'name', value: 'Product 1' },
 *     { key: 'description', value: 'Description of product 1' },
 *   ],
 * };
 *
 * const object = metaobjectToObject.parse(metaobject);
 * // object = { id: '123', fields: { name: 'Product 1', description: 'Description of product 1' } }
 * ```
 */
export function metaobjectToObject<T extends readonly [string, ...string[]], U extends object>(
  keys: T,
  objSchema: ZodSchema<U>
) {
  //
  const object = typedMetaobject(keys).transform((metaobject) => {
    const fields = metaobject.fields.reduce<Record<string, unknown>>((acc, { key, value }) => {
      if (key) acc[key] = value;

      return acc;
    }, {});

    return {
      id: metaobject.id,
      fields: objSchema.parse(fields),
    };
  });

  return object;
}
