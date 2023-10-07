const loadSingleBlog = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache" //use for data load dynamicly
        // cache:"force-cache" 
    });
    return res.json()
};

export default loadSingleBlog;