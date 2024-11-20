import vine from '@vinejs/vine';

export const createAuthValidator = vine.compile(
  vine.object({
    email: vine.string().email().maxLength(191),
    password: vine.string().minLength(8).maxLength(191),
    remember: vine.boolean(),
  })
)
