import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton'
import '../sass/layout/_layout.scss'

export default function Layout() {
    return (
        <>
            <div style={{ width: '100%', height: '100%', display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Header />
                <div className='layout' style={{ width: '100%', height: '100%', display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", overflow: "hidden" }}><Outlet />
                    <div style={{ position: "fixed", bottom: "15%", right: "5%" }}>
                        <WhatsAppFloatingButton />
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}