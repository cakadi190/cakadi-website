import factory from '@adonisjs/lucid/factories'
import Career from '#models/career'

export const CareerFactory = factory
  .define(Career, async ({ faker }) => {
    return {}
  })
  .build()