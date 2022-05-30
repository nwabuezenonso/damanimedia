import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client =  sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
    ignoreBrowserTokenWarning: true
})

// used for woking with images
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source) // exporting data when working with images