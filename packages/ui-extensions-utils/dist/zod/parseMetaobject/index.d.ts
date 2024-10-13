import { ZodType, ZodTypeDef } from 'zod';
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
export declare function parseMetaobject<U extends object>(metaobject: unknown, objSchema: ZodType<U, ZodTypeDef, unknown>): {
    id: string;
    fields: U;
};
//# sourceMappingURL=index.d.ts.map