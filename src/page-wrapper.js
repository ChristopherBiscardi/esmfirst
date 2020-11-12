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

          <title>Rust Adventurers!</title>
          <meta name="twitter:title" content="Rust Adventurers" />
          <meta name="og:title" content="Rust Adventurers" />
          <meta name="description" content="Start your Rust Adventure!" />
          <meta
            name="twitter:description"
            content="Start your Rust Adventure!"
          />
          <meta name="og:type" content="website" />
          <meta name="twitter:site" content="@chrisbiscardi" />
          <meta name="twitter:creator" content="@chrisbiscardi" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:image"
            content={`https://www.rustadventure.rs/opengraph-default.png`}
          />
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        {props.children}
      </div>
    </MDXProvider>
  );
}
