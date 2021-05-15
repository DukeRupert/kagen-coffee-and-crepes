// src/components/Menu/serializer.js
import urlBuilder from "@sanity/image-url";
import client from "../../sanityClient";
import Image from "./Image.svelte";

const urlFor = (source) => urlBuilder(client).image(source);

export default {
  marks: {
    link: ({ children, mark }) => ({
      component: Link,
      childNodes: children,
      props: mark,
    }),
  },
  types: {
    mainImage: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: urlFor(node).width(450).auto("format").url(),
        alt: node.alt,
      },
    }),
  },
};
