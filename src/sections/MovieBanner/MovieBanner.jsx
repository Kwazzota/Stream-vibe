import Section from "@/layouts/Section"
import MoviesBannerCard from "@/components/MoviesBannerCard";
// Импортируем картинку напрямую, чтобы Vite корректно обработал путь при сборке
import bannerImg from "@/assets/images/movie-banner/2.jpg";

const MovieBanner = () => {
    const titleId = 'movie-banner-title'

    return (
        <section
            className="container"
            aria-labelledby={titleId}
        >
            <MoviesBannerCard
                title="Kantara"
                titleId={titleId}
                TitleTag="h1"
                description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
                imgSrc={bannerImg}
                isSmallPaddingY
            />
        </section>
    )
}

export default MovieBanner