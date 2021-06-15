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
        routing: { category: `/latest/${today}` },
    },
    {
        path: "politica",
        routing: { category: "news/category/1" },
    },
    {
        path: "internacionales",
        routing: { category: "news/category/2" },
    },
    {
        path: "tecnologia",
        routing: { category: "news/category/3" },
    },
    {
        path: "espectaculos",
        routing: { category: "news/category/4" },
    },
    {
        path: "deportes",
        routing: { category: "news/category/5" },
    },
    {
        path: "diseño",
        routing: { category: "news/category/6" },
    },

];

export default routes;
