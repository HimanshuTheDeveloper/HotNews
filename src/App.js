// import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import NewsList from './components/newsList/NewsList';


function App() {
  return (
    <div className="container">
      <Logo />
      <video src="/videos/video.mp4" controls autoplay loop muted></video>
      
      <NewsList />
    </div>
  );
}

export default App;
