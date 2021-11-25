import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props) => {
  const { children, showFooter } = props;

  return (
    <>
      <Header />
      {children}
      {showFooter && <Footer />}
    </>
  );
};
