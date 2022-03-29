import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Built with simplicity in mind",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Homely Recipes was designed from the ground up to be easily usable and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on what gives value",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Homely Recipes lets you focus on your recipes, and we&apos;ll do the
        chores. Go ahead and move your recipes into the <code>collections</code>{" "}
        directory.
      </>
    ),
  },
  {
    title: "Powered by JamStack",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing the power of
        JamStack. Homely Recipes can be extended while reusing the same header
        and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
