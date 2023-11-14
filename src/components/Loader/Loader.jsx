const Loader = () => {
  return (
    <div className="has-text-centered pt-5">
      <progress
        className="progress is-small is-primary"
        max="100"
        style={{ width: "50%", margin: "auto" }}
      ></progress>
      <p className="is-size-7">Cargando...</p>
    </div>
  );
};

export { Loader };
