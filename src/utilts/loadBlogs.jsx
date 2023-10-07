const loadBlogs = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache' //use for data load staticly in build time
    })
    return res.json()
};

export default loadBlogs;