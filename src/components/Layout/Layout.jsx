import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const Layout = ({ data, children }) => {
  return (
    <>
      <Header />
      <Main data={data}>{children}</Main>
      <Footer />
    </>
  );
};
