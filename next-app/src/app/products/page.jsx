import { Products } from "@/components/products/Products";
import { whatsNew } from "@/data/products";
import { fetchApiCall } from "@/lib/utils";

export const metadata = whatsNew.metadata;

export default async function ProductsPage() {

  const products = await fetchApiCall(`${process.env.NEXT_PUBLIC_STRAPI_SERVER_URL}/api/product?populate[page_config][populate]=*&populate[products][populate][products][populate][product_page][populate][page_config][populate][seo]=*&populate[products][populate][products][populate][product_page][populate][product_media][populate]=*&populate[products][populate][products][populate][card_action][populate]=*`);

  return (
    <>
      <Products products={products?.response?.data?.products} />
    </>
  );
}
