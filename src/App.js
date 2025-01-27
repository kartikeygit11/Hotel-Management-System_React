
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRoom from './componets/rooms/AddRoom';
import ExistingRooms from './componets/rooms/ExistingRooms';
import EditRoom from './componets/rooms/EditRoom';
import NavBar from './componets/layouts/NavBar';
import Room from './componets/rooms/Room';
import HotelService from './componets/common/HotelService';
import Home from './componets/home/Home';
import ContactUs from './componets/common/ContactUs';
import Footer from './componets/common/Footer';
import AboutUs from './componets/common/AboutUs';
import BookingForm from './componets/bookings/BookingForm';
import BookingSuccess from './componets/bookings/BookingSuccess';
import CheckOut from './componets/bookings/CheckOut';
import PaymentPage from './componets/bookings/PaymentPage';
import AdminLogin from './componets/admin/AdminLogin';
import AdminDashboard from './componets/admin/AdminDashboard.jsx';
import FeedbackList from './componets/admin/FeedbackList.jsx';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/rooms" element={<Room />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} />
        <Route path="/add-rooms" element={<AddRoom />} />
        <Route path="/update/:roomId" element={< EditRoom/>} />
        <Route path="/services" element={< HotelService/>} />
        <Route path="/contact" element={< ContactUs/>} />
        <Route path="/about-us" element={< AboutUs/>} />
        <Route path="/book-room/:roomId" element={< CheckOut/>} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/booking-payment" element={<PaymentPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/api/feedbacks" element={<FeedbackList />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
     
        <Route path="/" element={< Home/>} />
       </Routes>
       <Footer/>
    </Router>
  );
}
export default App;
