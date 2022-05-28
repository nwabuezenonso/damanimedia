// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import brand from './brands';
import contact from './contact';
import featuredPost from './featuredPost';
import portfolio from './portfolio';
import product from './product';
import testimonials from './testimonials';
import stories from './stories';
import banners from './banners';
import featured from './featured';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   featured,
   banners,
   brand,
   contact,
   featuredPost,
   portfolio,
   product,
   testimonials,
   stories
  ]),
})
