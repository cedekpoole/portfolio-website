import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'github',
      title: 'Github Project URL',
      type: 'url',
    }),

    defineField({
      name: 'liveProject',
      title: 'Live Project URL',
      type: 'url',
    }),
  
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectNumber',
      title: 'Project Number',
      type: 'number',
    }),

  ],

  preview: {
  },
})
