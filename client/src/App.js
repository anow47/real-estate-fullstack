import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PageWrapper from './components/PageWrapper';

function App() {
    return (
        // the basename routes to home page in production or gh-pages
        <Router basename="/real-estate-fullstack">
            <div className="App">
                <Navigation />
                <PageWrapper />
                <Footer />
            </div>
        </Router>
    );
}
export default App;
