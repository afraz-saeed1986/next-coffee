import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Comments from "@/components/templates/Product/Comments";
import ProductDetails from "@/components/templates/Product/ProductDetails";
import React from "react";

function Product({ product }) {
  return (
    <>
      <ProductDetails data={product} />
      <Comments />
    </>
  );
}

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      id: String(product.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json();

  console.log("Product =>", product);

  return {
    props: {
      product,
    },
  };
}

export default Product;
