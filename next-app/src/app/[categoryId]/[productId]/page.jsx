import { PerProduct } from "@/components/products/PerProduct";
import { fetchApiCall } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function PerProductPage({ params }) {

  console.log("params", params);

  let productPage = null;

  try{
    const url = `/${params?.categoryId}/${params?.productId}`;
    const productData = await fetchApiCall(`${process.env.NEXT_PUBLIC_STRAPI_SERVER_URL}/api/per-product-pages?filters[page_config][url][$eq]=${url}&populate[product_specifications][populate]=*&populate[drawing_3d][populate]=*&populate[category][populate]=*&populate[product_media][populate]=*&populate[page_config][populate]=*`);
    if(productData?.response?.data?.length === 0){
      notFound();
    }
    productPage = productData?.response?.data[0];
    return productPage === null ? notFound() : <PerProduct productPage={productPage} />;
  }
  catch(e){
    notFound();
  }

}
