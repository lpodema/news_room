function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate().toString(),
        yyyy: date.getFullYear(),
    };

    return format.replace(/mm|dd|yyyy/gi, (matched) => map[matched]);
}
const date = new Date();
const today = formatDate(date, "yyyy-mm-dd");

const routes = [
    {
        path: "",
        exact: true,
        // main: () => <h2>Home</h2>,
        routing: { category: `/latest/${today}` },
    },
    {
        path: "Politica",
        // main: () => <h2>Politica</h2>,
        routing: { category: "news/category/1" },
    },
    {
        path: "Internacionales",
        // main: () => <h2>Internacionales</h2>,
        routing: { category: "news/category/2" },
    },
    {
        path: "Tecnologia",
        // main: () => <h2>tecnologia</h2>,
        routing: { category: "news/category/3" },
    },
    {
        path: "Espectaculos",
        // main: () => <h2>espectaculos</h2>,
        routing: { category: "news/category/4" },
    },
    {
        path: "Deportes",
        // main: () => <h2>deportes</h2>,
        routing: { category: "news/category/5" },
    },
    {
        path: "Diseño",
        // main: () => <h2>diseño</h2>,
        routing: { category: "news/category/6" },
    },
    // {
    //     path: "/search/",
    //     //     // main: () => <h2>diseño</h2>,
    //     routing: { category: "search/" },
    // },
];

export default routes;
