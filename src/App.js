import Nav from './components/Nav'
import Feed from './components/Feed'
import Infos from './components/Infos'
import Storys from './components/Storys'

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="container__layout">
          <div className="container__layout__main">
            <Storys />
            <Feed />
          </div>
          <Infos />
        </div>
      </div>
    </div>
  );
}
