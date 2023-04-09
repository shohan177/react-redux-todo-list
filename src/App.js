import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Footer from './component/Footer';

function App() {
    return (
        <div
            class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            <Navbar />


            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* header */}
                <Header />
                <hr class="mt-4" />

                {/* todo list */}
                <TodoList />

                <hr class="mt-4" />

                {/* footer */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
