/* Components */
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

function GalleryPage(){
    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation/>
            <main className="main">
                <section className="main__background text-background-light bg-highlight-light py-14">
                    <section className="section section--hero">
                        <article className="article flex flex-col justify-center gap-1.5">
                            <h1 className="article__title text-4xl font-extrabold">Galeria</h1>
                            <p className="article__text text-xl">Onde guardamos nossas memórias</p>
                        </article>
                    </section>
                </section>

                {/* Drones IFSC 2023 */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Drones IFSC 2023</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default GalleryPage