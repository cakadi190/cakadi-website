import factory from '@adonisjs/lucid/factories'
import Education from '#models/education'

export const EducationFactory = factory
  .define(Education, async ({ faker }) => {
    return {}
  })
  .build()