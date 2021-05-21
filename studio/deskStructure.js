import S from '@sanity/desk-tool/structure-builder'
import { FcLike, FcShop, FcViewDetails, FcSettings, FcIcons8Cup, FcReading } from 'react-icons/fc'

const hiddenDocTypes = listItem =>
  ![
    'category',
    'author',
    'post',
    'siteSettings',
    'crepe',
    'location',
    'menu',
    'coffee',
    'drink'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FcSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Menus')
        .icon(FcViewDetails)
        .schemaType('menu')
        .child(S.documentTypeList('menu').title('Menus')),
      S.listItem()
        .title('Crepes')
        .icon(FcLike)
        .schemaType('crepe')
        .child(S.documentTypeList('crepe').title('Crepes')),
      S.listItem()
        .title('Coffees')
        .icon(FcIcons8Cup)
        .schemaType('coffee')
        .child(S.documentTypeList('coffee').title('Coffees')),
      S.listItem()
        .title('Drinks')
        .icon(FcIcons8Cup)
        .schemaType('drink')
        .child(S.documentTypeList('drink').title('Drinks')),
      S.listItem()
        .title('Locations')
        .icon(FcShop)
        .schemaType('location')
        .child(S.documentTypeList('location').title('Locations')),
      S.listItem()
        .title('Authors')
        .icon(FcReading)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
