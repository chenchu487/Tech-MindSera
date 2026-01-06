import Header from "../components/Header/Header.jsx";

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
