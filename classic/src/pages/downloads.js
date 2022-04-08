// Import React and @theme/Layout from docusaurus
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";

export default function BrandStyleGuide() {
  return (
    <Layout>
      <div className="container">
        <h1>Download Resources</h1>
        <p>
          Get design files, material theme template, and assets used in the
          making ogf Homely Recipes.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/pages/brand-style-guide"
          >
            Download the Style Guide →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
