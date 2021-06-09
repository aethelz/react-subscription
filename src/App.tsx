import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import SelectedPlan from './SelectedPlan';
import CurrentStage from './CurrentStage';
import Navigation from './Navigation';

function App() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-max-desktop box">
            <div className="has-text-centered m-5">
              <h3 className="title">Set up cloud storage subscription</h3>
            </div>
            <SelectedPlan />
            <CurrentStage navigation={(props) => <Navigation {...props} />} />
          </div>
      </div>
    </section>
  );
}

export default App;
