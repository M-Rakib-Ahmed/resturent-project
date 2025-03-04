

const Banner = () => {
    return (
        <div className="relative w-11/12 mt-10 mx-auto h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('https://i.imgpost.net/2025/03/04/oQlg.png')" }}>
            
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            <div className="relative text-center text-white px-6 md:px-12">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Discover an exceptional cooking <br /> class tailored for you!
                </h1>
                <p className="text-sm md:text-base mb-6">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
                    Database and solve 500+ coding <br /> problems to become an exceptionally
                    well world-class Programmer.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-600">
                        Explore Now
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition">
                        Our Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;