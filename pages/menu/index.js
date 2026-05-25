import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";

function Menu({ menus }) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing data={menus} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  return {
    props: {
      menus: data,
    },
    revalidate: 60 * 60 * 12, //SSG - ISR
  };
}

export default Menu;
