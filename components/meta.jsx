/* Framework */
import Head from "next/head";

export default function Meta() {
  return (
    <>
      <Head>
        <title>Archtyped</title>
        <meta name="title" content="Archtyped" />
        <meta name="description" content="A Void for the Comforted." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://archtyped.com/" />
        <meta property="og:title" content="Archtyped" />
        <meta property="og:description" content="A Void for the Comforted." />
        <meta
          property="og:image"
          content="https://archtyped.com/Archtyped_Image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://archtyped.com/" />
        <meta property="twitter:title" content="Archtyped" />
        <meta
          property="twitter:description"
          content="A Void for the Comforted."
        />
        <meta
          property="twitter:image"
          content="https://archtyped.com/Archtyped_Image.png"
        />
      </Head>
    </>
  );
}