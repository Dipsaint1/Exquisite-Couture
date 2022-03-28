const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                "/users": [
                    {id: 1, username: "Bilbo"},
                    {id: 5, username: "Esmeralda"},
                ],
                "/users/1": {
                    id:           1, 
                    username:     "Bilbo",
                    upvotes:      360,
                    city:         "Lisbon",
                    topPostId:    454321
                },
                "/users/5": {
                    id:           5, 
                    username:     "Esmeralda",
                    upvotes:      571,
                    city:         "Honolulu",
                    topPostId:    454321
                },
                "/posts/454321": {
                    id:           454321, 
                    title:        "Ladies and Gentlemen, may I introduce my pet pig, Hamlet"
                },
                "/about":         "This is the about page"
            };

            const data = pages[url];
            if(data){
                resolve({status: 200, data});
            } 
            else{
                reject({status: 404});
            }
            
        }, 1000);    // Event promise loads for 1 second
    });
};



fakeRequest("/users")
    .then(result => {
        console.log(result);
        const id = result.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then(result => {  // Collects the data returned from immediate 'then' above
        console.log(result);
        const postId = result.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then(result => {  // Collects the data returned from immediate 'then' above
        console.log(result.status);
        console.log(result.data.title);
    })

    .catch((error) => { // Catches all the error
        console.log("OH NO!", error);
});




// fakeRequest("/users")
//     .then((result) => {
//         const id = result.data[0].id;
//         fakeRequest(`/users/${id}ee`)
//         .then((result) => {
//             const postId = result.data.topPostId;
//             fakeRequest(`/posts/${postId}`)
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log("PostId Invalid!", error);
//             });
//         })
//         .catch((error) => {
//             console.log("UserId Invalid!", error);
//         });
//     })
//     .catch((error) => {
//         console.log("OH NO!", error);
// });
