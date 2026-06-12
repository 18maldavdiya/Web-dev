const posts = [
    { postId: 1, likes: 100 },
    { postId: 2, likes: 200 }
];

let totalLikes = 0;

for (let post of posts) {
    totalLikes += post.likes;
}

console.log(totalLikes);