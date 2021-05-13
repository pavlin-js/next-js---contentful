import { createClient } from 'contentful'

let client = createClient( {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
} )

export async function getStaticPaths() {

  let res = await client.getEntries( { content_type: 'recipe' } )

  return {
    paths: [
      { params: {}}
    ],
    fallback: 
  };
}

export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}