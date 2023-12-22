import openhouseAILogo from "../../assets/openhouse-ai-logo.png";

const NavBar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                        {/* Your logo goes here */}
                        <img
                            className="block h-8 w-auto"
                            src={openhouseAILogo}
                            alt="OpenHouse.ai Logo"
                        />
                    
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
