import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => (
    <div
      class="bg-gray-900"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
};
export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Build ESM First</title>
          <meta name="twitter:title" content="Build ESM First" />
          <meta name="og:title" content="Build ESM First" />
          <meta
            name="description"
            content="Target modern runtimes in node and browsers first, then compile to support older browsers."
          />
          <meta
            name="twitter:description"
            content="Target modern runtimes in node and browsers first, then compile to support older browsers."
          />
          <meta name="og:type" content="website" />
          <meta name="twitter:site" content="@chrisbiscardi" />
          <meta name="twitter:creator" content="@chrisbiscardi" />
          {/* <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:image"
            content={`https://www.rustadventure.rs/opengraph-default.png`}
          /> */}
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        {props.children}
      </div>
    </MDXProvider>
  );
}
