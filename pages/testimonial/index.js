import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Comments from "@/components/templates/Testimonial/Comments";
import React from "react";

function Testimonial({ comments }) {
  return (
    <>
      <PageHeader route="Testimonial" />
      <Comments data={comments} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
    revalidate: 60 * 60 * 12, // SSG - ISR
  };
}

export default Testimonial;
