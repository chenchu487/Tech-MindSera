import Header from "../components/Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer />
    </>
  );
}

export default Layout;
