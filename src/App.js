import './styles/App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row'
import requests from './requests'
import { Helmet } from "react-helmet"
import Footer from './components/Footer'


function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Eneotu | Netflix Clone</title>
      </Helmet>
      <Nav />
      <Banner />
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Row title='Popular' fetchUrl={requests.fetchPopular} />
      <Row title='Horror' fetchUrl={requests.fetchHorror} />
      <Footer />
    </div>
  );
}

export default App;
