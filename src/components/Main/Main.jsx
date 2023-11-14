// eslint-disable-next-line react/prop-types
export const Main = ({ children }) => {
  return (
    <section className="section" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="columns">
          {/* Columna principal */}
          <div className="column is-three-quarters">{children}</div>
          {/* Barra lateral */}
          <div className="column is-one-quarter">
            <aside className="menu">
              <p className="menu-label">Menú</p>
              <ul className="menu-list">
                <li>
                  <a href="#">Enlace 1</a>
                </li>
                <li>
                  <a href="#">Enlace 2</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
