import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import Contact from './Contact';
import LivingRoom from './spaces/LivingRoom';

const BedRoom = () => <h1>Bed Room</h1>;
const BathRoom = () => <h1>Bath Room</h1>;
const FamilyRoom = () => <h1>Family Room</h1>;
const GuestRoom = () => <h1>Guest Room</h1>;
const Kitchen = () => <h1>Kitchen</h1>;
const DiningRoom = () => <h1>Dining Room</h1>;
const HomeOffice = () => <h1>Home Office</h1>;
const Library = () => <h1>Library</h1>;
const Sofas = () => <h1>Sofas</h1>;
const Seating = () => <h1>Seating</h1>;
const Chairs = () => <h1>Chairs</h1>;
const Tables = () => <h1>Tables</h1>;
const Cabinetry = () => <h1>Cabinetry</h1>;
const DiningBar = () => <h1>Dining & Bar</h1>;
const Decor = () => <h1>Decor</h1>;
const Lighting = () => <h1>Lighting</h1>;
const Beds = () => <h1>Beds</h1>;
const Matteresses = () => <h1>Matteresses</h1>;
const Bedding = () => <h1>Bedding</h1>;
const Storage = () => <h1>Storage</h1>;
const Furnishings = () => <h1>Furnishings</h1>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/spaces/livingroom" component={LivingRoom} />
          <Route exact path="/spaces/bedroom" component={BedRoom} />
          <Route exact path="/spaces/bathroom" component={BathRoom} />
          <Route exact path="/spaces/familyroom" component={FamilyRoom} />
          <Route exact path="/spaces/guestroom" component={GuestRoom} />
          <Route exact path="/spaces/kitchen" component={Kitchen} />
          <Route exact path="/spaces/diningroom" component={DiningRoom} />
          <Route exact path="/spaces/homeoffice" component={HomeOffice} />
          <Route exact path="/spaces/library" component={Library} />
          <Route exact path="/products/sofas" component={Sofas} />
          <Route exact path="/products/seating" component={Seating} />
          <Route exact path="/products/chairs" component={Chairs} />
          <Route exact path="/products/tables" component={Tables} />
          <Route exact path="/products/cabinetry" component={Cabinetry} />
          <Route exact path="/products/diningbar" component={DiningBar} />
          <Route exact path="/products/decor" component={Decor} />
          <Route exact path="/products/lighting" component={Lighting} />
          <Route exact path="/products/beds" component={Beds} />
          <Route exact path="/products/matteresses" component={Matteresses} />
          <Route exact path="/products/bedding" component={Bedding} />
          <Route exact path="/products/storage" component={Storage} />
          <Route exact path="/products/furnishings" component={Furnishings} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
