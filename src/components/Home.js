import image from "../background.jpg"

const Home = () => {
    return (
        <main>
            <img src={image} alt="The image is loading..." className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Hey! I am Thomas Shelby</h1>
            </section>
        </main>
    );
}
 
export default Home;