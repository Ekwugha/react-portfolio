import './App.css';
import { Switch, Route } from 'react-router-dom';
import CustomNavbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import ServicePage from './pages/services/services.page';
import SkillsPage from './pages/skills/skills.page';
import WorkPage from './pages/work/work.page';
import ContactPage from './pages/contact/contact.page';
import GoTop from './components/go-top-btn/gotop.component';
import ScrollToTop from './components/scrolltotop/scrolltotop.component'
import './components/background/background.styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';

function App() {
  return (
    <ScrollToTop>
    <div className="App">
      <CustomNavbar />
      <GoTop />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/about' component={AboutPage} />
          <Route  path='/service' component={ServicePage} />
          <Route  path='/skills' component={SkillsPage} />
          <Route  path='/work' component={WorkPage} />
          <Route  path='/contact' component={ContactPage} />
        </Switch>
    </div>
    </ScrollToTop>
  );
}

export default App;
