import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import classnames from "classnames";
import styles from "./layout.module.scss";

export const Layout = ({
  title = "",
  content = "",
  href = "",
  className,
  children,
}) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title key='title'>{title ? title : "Pokemon-App"}</title>
          <meta
            name='description'
            content={content ? content : "Pokemon-App"}
          />
          <link ref='canonical' href={href ? href : "/"} />
        </Helmet>
      </HelmetProvider>
      <div className={classnames(styles.layout, "container")}>
        <div className='row'>
          <div className='col-12'>
            <main className={classnames(styles.container, className)}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
