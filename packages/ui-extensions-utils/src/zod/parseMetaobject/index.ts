import { z, ZodType, ZodTypeDef } from 'zod';

/**
 * Converts a metaobject to an object, where the fields are typed and flattened.
 *
 * @param metaobject - The metaobject to convert.
 * @param objSchema - The schema of the object.
 * @returns The parsed object.
 *
 * @example
 * ```ts
 * const metaobject = {
 *   id: '123',
 *   fields: [
 *     { key: 'name', value: 'Product 1' },
 *     { key: 'description', value: 'Description of product 1' },
 *   ],
 * };
 *
 * const objSchema = z.object({
 *  name: z.string(),
 *  description: z.string(),
 * });
 *
 * parseMetaobject(metaobject, objSchema);
 * // { name: 'Product 1', description: 'Description of product 1' }
 * ```
 */
export function parseMetaobject<U extends object>(metaobject: unknown, objSchema: ZodType<U, ZodTypeDef, unknown>) {
  //
  const object = z
    .object({
      id: z.string(),
      fields: z.array(
        z.object({
          key: z.string(),
          value: z.string().nullable().optional(),
        })
      ),
    })
    .transform((metaobj) => {
      const fields = metaobj.fields.reduce<Record<string, unknown>>((acc, { key, value }) => {
        if (key) acc[key] = value;

        return acc;
      }, {});

      return {
        id: metaobj.id,
        fields: objSchema.parse(fields),
      };
    });

  return object.parse(metaobject);
}
