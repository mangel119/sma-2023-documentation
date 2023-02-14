import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Management",
    Svg: require("@site/static/img/scrum.svg").default,
    description: (
      <>
        Lideran el proyecto y velan para que se cumplan las normas y los
        procesos establecidos. Se encargan de eliminar los posibles retrasos que
        surjan en el proyecto.
      </>
    ),
  },
  {
    title: "UX/UI Design",
    Svg: require("@site/static/img/ux.svg").default,
    description: (
      <>
        Gestiona la experiencia de usuario. Su objetivo es que la interacción
        del usuario con el producto sea sencilla e intuitiva.
      </>
    ),
  },
  {
    title: "Content Producement",
    Svg: require("@site/static/img/content.svg").default,
    description: (
      <>
        Crean contenido de actualidad y de alta calidad que haga que los
        usuarios regresen. Haciendo resaltar el sitio por encima de las otras
        distracciones de internet.
      </>
    ),
  },
  {
    title: "Development",
    Svg: require("@site/static/img/developer.svg").default,
    description: (
      <>
        Son los responsables de concebir y elaborar paquetes de software, así
        como implementarlos y ponerlos a punto.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
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

export default function HomepageFeatures(): JSX.Element {
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
