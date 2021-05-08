const { Post } = require('../models');

const postData = [
    {
        post_content: 'Superman still can not prevent placeholder text.',
    },
    {
    },
    {
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

