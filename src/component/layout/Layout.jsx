import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
