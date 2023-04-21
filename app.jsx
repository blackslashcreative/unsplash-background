function App() {
  const [background, setBackground] = React.useState('');

  React.useEffect(() => {
    async function getBackgroundImage() {
      const apikey   = ''; // ADD YOUR API KEY HERE
      const collectionID = ''; // MAKE A COLLECTION OF PHOTOS AND ADD THE COLLECTION ID HERE
      const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${apikey}&collections=${collectionID}`);
      setBackground(response.data.urls.full);
    }
    getBackgroundImage();
  }, []);

  return (
    <div className="container-fluid h-100" style={{ backgroundSize: `cover`, backgroundImage: `url(${background})` }}>
      <div className="row align-items-center text-center h-100">
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSheet">
          <div className="modal-dialog" role="document">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
