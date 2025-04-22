import { Header } from "../../Header/Header";
import { Breadcrumbs } from "../../Breadcrumbs/Breadcrumbs";
import "./Catalog.css"

export const Catalog = () => {
  return (
    <>
      <Header />
      <section className="catalog-section">
        <Breadcrumbs />
      </section>
    </>
  );
};
