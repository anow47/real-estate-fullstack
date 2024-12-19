import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PageWrapper from './components/PageWrapper';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <PageWrapper />
                <Footer />
            </div>
        </Router>
    );
}
export default App;
