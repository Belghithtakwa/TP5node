const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routes/user.routes.js');
const postRoutes = require('./routes/post.routes.js');
const roleRoutes = require('./routes/role.routes.js');
const commentRoutes = require('./routes/comment.routes.js');



app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/comments', commentRoutes);
app.use('/posts', postRoutes);

app.listen(5500, () => {
  console.log('Server starts and listens on port 5500');
});