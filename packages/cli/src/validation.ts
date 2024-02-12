import {z} from 'zod';
import {typeSchema} from '@ozaki/shared';

const cliSchema = z
  .object({
    output: z.coerce.string({
      required_error: 'Output is required',
      invalid_type_error: 'Output must be a path',
    }),
    font: z.coerce.string().default('./src/Roboto-Regular.ttf'),
    help: z.coerce.boolean().optional(),
    '--': z.array(z.unknown()).nullish(),
    type: typeSchema,
  })
  .strict();

type cliSchemaType = z.infer<typeof cliSchema>;

export {cliSchema, cliSchemaType};
