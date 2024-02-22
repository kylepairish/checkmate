function NavBar() {
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto">
                <ul className="flex text-gray-300">
                    <li className="mr-4">Home</li>
                    <li className="mr-4">Blog</li>
                    <li className="mr-4">Projects</li>
                    <li className="mr-4">About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
