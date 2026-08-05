// Хелпер для корректного разрешения путей к ассетам в Vite
const getAssetUrl = (path) => new URL(path, import.meta.url).href;

const collectionGroups = [
    {
        isActive: true,
        title: 'Movies',
        items: [
            {
                title: 'Our Genres',
                categoryItems: [
                    { title: "Action", images: [getAssetUrl('../assets/images/categories/action/1.jpg'), getAssetUrl('../assets/images/categories/action/2.jpg'), getAssetUrl('../assets/images/categories/action/3.jpg'), getAssetUrl('../assets/images/categories/action/4.jpg')] },
                    { title: "Adventure", images: [getAssetUrl('../assets/images/categories/adventure/1.jpg'), getAssetUrl('../assets/images/categories/adventure/2.jpg'), getAssetUrl('../assets/images/categories/adventure/3.jpg'), getAssetUrl('../assets/images/categories/adventure/4.jpg')] },
                    { title: "Comedy", images: [getAssetUrl('../assets/images/categories/comedy/1.jpg'), getAssetUrl('../assets/images/categories/comedy/2.jpg'), getAssetUrl('../assets/images/categories/comedy/3.jpg'), getAssetUrl('../assets/images/categories/comedy/4.jpg')] },
                    { title: "Drama", images: [getAssetUrl('../assets/images/categories/drama/1.jpg'), getAssetUrl('../assets/images/categories/drama/2.jpg'), getAssetUrl('../assets/images/categories/drama/3.jpg'), getAssetUrl('../assets/images/categories/drama/4.jpg')] },
                    { title: "Horror", images: [getAssetUrl('../assets/images/categories/horror/1.jpg'), getAssetUrl('../assets/images/categories/horror/2.jpg'), getAssetUrl('../assets/images/categories/horror/3.jpg'), getAssetUrl('../assets/images/categories/horror/4.jpg')] },
                ],
            },
            {
                title: 'Popular Top 10 in Genres',
                categoryItems: [
                    { title: "Action", badge: 'Top 10 In', images: [getAssetUrl('../assets/images/categories/action/1.jpg'), getAssetUrl('../assets/images/categories/action/2.jpg'), getAssetUrl('../assets/images/categories/action/3.jpg'), getAssetUrl('../assets/images/categories/action/4.jpg')] },
                    { title: "Adventure", badge: 'Top 10 In', images: [getAssetUrl('../assets/images/categories/adventure/1.jpg'), getAssetUrl('../assets/images/categories/adventure/2.jpg'), getAssetUrl('../assets/images/categories/adventure/3.jpg'), getAssetUrl('../assets/images/categories/adventure/4.jpg')] },
                    { title: "Comedy", badge: 'Top 10 In', images: [getAssetUrl('../assets/images/categories/comedy/1.jpg'), getAssetUrl('../assets/images/categories/comedy/2.jpg'), getAssetUrl('../assets/images/categories/comedy/3.jpg'), getAssetUrl('../assets/images/categories/comedy/4.jpg')] },
                    { title: "Drama", badge: 'Top 10 In', images: [getAssetUrl('../assets/images/categories/drama/1.jpg'), getAssetUrl('../assets/images/categories/drama/2.jpg'), getAssetUrl('../assets/images/categories/drama/3.jpg'), getAssetUrl('../assets/images/categories/drama/4.jpg')] },
                    // ... (я сократил дубликаты для читаемости, примени getAssetUrl ко всем оставшимся строкам по аналогии)
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: { slidesPerView: 1.6, slidesPerGroup: 1, spaceBetween: 20 },
                        481: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
                        1024: { spaceBetween: 20, allowTouchMove: false },
                        1441: { spaceBetween: 30, allowTouchMove: false },
                    },
                },
            },
            {
                title: 'Trending Now',
                movieItems: [
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/1.jpg'), duration: '1h 30min', views: '2K' },
                    { title: 'BhaiJaan', imgSrc: getAssetUrl('../assets/images/movies/2.jpg'), duration: '1h 57min', views: '1.5K' },
                    { title: 'Suraj pe Mangal', imgSrc: getAssetUrl('../assets/images/movies/3.jpg'), duration: '2h 10min', views: '1.8K' },
                    { title: 'Pathan', imgSrc: getAssetUrl('../assets/images/movies/4.jpg'), duration: '2h 20min', views: '3K' },
                    { title: 'Ant-Man', imgSrc: getAssetUrl('../assets/images/movies/5.jpg'), duration: '1h 42min', views: '5K' },
                    // ... примени getAssetUrl ко всем остальным элементам массива
                ]
            },
            {
                title: 'New Releases',
                movieItems: [
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/1.jpg'), released: { label: '14 April 2023', dateTime: '2023-04-14' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/2.jpg'), released: { label: '14 April 2023', dateTime: '2023-04-14' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/3.jpg'), released: { label: '14 April 2023', dateTime: '2023-04-14' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/4.jpg'), released: { label: '14 April 2023', dateTime: '2023-04-14' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/5.jpg'), released: { label: '14 April 2023', dateTime: '2023-04-14' } },
                    // ... примени getAssetUrl ко всем остальным элементам массива
                ],
            },
            {
                title: 'Must - Watch Movies',
                movieItems: [
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/1.jpg'), duration: '1h 57min', rating: { value: 4.5, label: '20K' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/2.jpg'), duration: '1h 57min', rating: { value: 4.7, label: '20K' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/3.jpg'), duration: '1h 57min', rating: { value: 4, label: '20K' } },
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/4.jpg'), duration: '1h 57min', rating: { value: 5, label: '20K' } },
                    // ... примени getAssetUrl ко всем остальным элементам массива
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: { slidesPerView: 1.6, slidesPerGroup: 1, spaceBetween: 20 },
                        481: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
                        1024: { spaceBetween: 20, allowTouchMove: false },
                        1441: { spaceBetween: 30, allowTouchMove: false },
                    },
                },
            },
        ],
    },
    {
        title: 'Shows',
        items: [
            // ... Аналогично примени getAssetUrl ко всем путям в секции Shows
            // Пример:
            {
                title: 'Trending Shows Now',
                movieItems: [
                    { title: 'Morbius', imgSrc: getAssetUrl('../assets/images/movies/1.jpg'), duration: '1h 30min', season: '4 Season', href: '/show' },
                    // ...
                ]
            }
        ]
    }
]

export default collectionGroups;