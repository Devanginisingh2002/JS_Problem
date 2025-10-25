'Here learning about the how we fetch multiple data, by using Promise-All'

function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Resolved");
        }, 2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched");
        }, 4000)
    })
}

async function getBlogData() {
    try{
        console.log("Fetching Blog Data");
        // Method 1:
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);

        // Method 2:
        /* By this, Fetching Data is better way, but we have a lot of data, Then we use Promise-All.
         * Promise.all -> as it fetch all the data and it takes array as parameter.
         * We can receive many return type as it depends on data. Here, we receive 2 return type (postData, commentData).
         * So, for handling this we need to create two variables.
        */

        // Both the methods behave same, but method 2 is better with syntax wise.

        console.log(postData);
        console.log(commentData);
        console.log("fetching data");
    }
    catch(error){
        console.log("Error", error);
    }
}

getBlogData();