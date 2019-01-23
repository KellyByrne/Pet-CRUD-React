import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import ShowPet from './pets/ShowPet';
import ShowPets from './pets/ShowPets';
import CreatePet from './pets/CreatePet';
import EditPet from './pets/EditPet';
import DeletePet from './pets/DeletePet';

const App = () => {
    return (
        <div className="container">
            <Router history={history}> 
                <div>
                    <Switch>
                        <Route path="/" exact component={ShowPets} />
                        <Route path="/pets/new" exact component={CreatePet} />
                        <Route path="/pets/:id" exact component={ShowPet} />
                        <Route path="/pets/edit/:id" exact component={EditPet} />
                        <Route path="/pets/delete/:id" exact component={DeletePet} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;