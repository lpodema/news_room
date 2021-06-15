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
        label: "Home",
        exact: true,
        routing: { category: `/latest/${today}` },
    },
    {
        path: "Politica",
        label: "Politica",
        routing: { category: "news/category/1" },
    },
    {
        path: "Internacionales",
        label: "Internacionales",
        routing: { category: "news/category/2" },
    },
    {
        path: "Tecnologia",
        label: "Tecnologia",
        routing: { category: "news/category/3" },
    },
    {
        path: "Espectaculos",
        label: "Espectaculos",
        routing: { category: "news/category/4" },
    },
    {
        path: "Deportes",
        label: "Deportes",
        routing: { category: "news/category/5" },
    },
    {
        path: "Diseño",
        label: "Diseño",
        routing: { category: "news/category/6" },
    },
];

export default routes;
