import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import SelectedPlan from './SelectedPlan';
import CurrentStage from './CurrentStage';
import Navigation from './Navigation';

function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6 is-5-desktop">
            <div className="has-text-centered">
              <h1 className="title is-2">Cloud storage subscription</h1>
            </div>
            <SelectedPlan />
            <CurrentStage navigation={(props) => <Navigation {...props} />} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
