/* eslint-disable react/prop-types */
import { Aside } from "../Aside/Aside";

// eslint-disable-next-line react/prop-types
export const Main = ({ data, children }) => {
  return (
    <section className="section" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="columns">
          {/* Columna principal */}
          <div className="column is -three-quarters">{children}</div>
          {/* Barra lateral */}
          <Aside data={data} />
        </div>
      </div>
    </section>
  );
};
