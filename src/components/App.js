import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import BlockDetails from './BlockDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './NotFound';

function App() {
    return (
        <Router>
            <div className="app">
           <NavBar />
			<main className="main">
				<Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/create" element={<Create />}/>
                    <Route path="/blogs/:id" element={<BlockDetails />} />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
			</main>
        </div>
        </Router>
        
    );
}

export default App;