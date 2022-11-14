import Blog01 from "./Blog01";
import BlogDetails01 from "./BlogDetails01";
import Collection from "./Collection";
import Contact from "./Contact";
import Create from "./Create";
import Dashboard from "./Dashboard";
import Explore01 from "./Explore01";
import Faqs from "./Faqs";
import HelpCenter from "./HelpCenter";
import Home01 from "./Home01";
import ItemDetails01 from "./ItemDetails01";
import ItemDetails02 from "./ItemDetails02";
import LiveAutions01 from "./LiveAutions01";
import LiveAutions02 from "./LiveAutions02";
import Login from "./Login";
import Ranking from "./Ranking";
import SignUp from "./SignUp";
import Wallet from "./Wallet";



const routes = [
  { path: '/', component: <Home01 />},
  { path: '/explore-v1', component: <Explore01 />},
  { path: '/collection', component: <Collection />},
  { path: '/live-auctions-v1', component: <LiveAutions01 />},
  { path: '/live-auctions-v2', component: <LiveAutions02 />},
  { path: '/item-details-v1', component: <ItemDetails01 />},
  { path: '/item-details-v2', component: <ItemDetails02 />},
  { path: '/dashboard', component: <Dashboard />},
  { path: '/ranking', component: <Ranking />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/faqs', component: <Faqs />},
  { path: '/wallet', component: <Wallet />},
  { path: '/login', component: <Login />},
  { path: '/signup', component: <SignUp />},
  { path: '/create', component: <Create />},
  { path: '/blog-v1', component: <Blog01 />},
  { path: '/blog-details-v1', component: <BlogDetails01 />},
  { path: '/contact', component: <Contact />},
  



]

export default routes;