import Footer from "./Components/Footer";

function App(props) {
  return (
    <div className="container py-4 mt-5 border border-light shadow-sm p-3 mb-5 bg-body rounded-3">
      <div className="p-3 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 text-dark">Xpovi</h1>

          <hr />

          {props.button}

          <hr />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
