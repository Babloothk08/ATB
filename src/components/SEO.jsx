
import {Helmet} from "react-helmet"
export default function SEO({ title, description, canonical }) {
  console.log(title,canonical)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    
    </Helmet>
  );
}