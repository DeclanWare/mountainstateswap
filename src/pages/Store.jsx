import NavBar from "../components/Navbar/NavBar.jsx"
import Listing from "../components/Listing/Listing.jsx"
import Messaging from "../components/Messaging/Messaging.jsx"
import Listings from "../components/Listings/Listings.jsx"
import './Store.css'

//assets
import SampleMessages from '../assets/SampleMessages.txt';
import Layout from "../components/Layout/Layout.jsx"


function Store() {
    return (
        <Layout>
            <Listings />
        </Layout>
    )
}

export default Store;