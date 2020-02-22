export default {
    singular: true,
    routes: [
        {
            path: "/",
            component: "./HelloWorld"
        }
    ],
    plugin: [["umi-plugin-react", {}]]
};
