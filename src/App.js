import Footer from "./Components/Footer";

function App(props) {


  const mystyle = {
    borderRadius: '50px',
    background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
    boxShadow:  "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
  };
  return (
    <div  style={mystyle} className="container py-4 mt-5 border border-light shadow-sm p-3 mb-5 bg-body rounded-3">
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
