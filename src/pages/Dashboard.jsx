import Faq from "../components/Faq"
import NearestSearch from "../components/NearestSection"
import SearchSection from "../components/SearchSection"
import HeroSection from "../components/HeroSection"
import StartupRegistrationForm from "./RegisterStartupForm"



const Dashboard = () => {
    return (
        <>
        <HeroSection />
        <SearchSection />
        <NearestSearch />
        <Faq />
        <StartupRegistrationForm/>
        

        
        
        </>

    )
}

export { Dashboard }