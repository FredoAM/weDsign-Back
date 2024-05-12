const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const invitationsRouter = require('./routes/invitations');
const usersRouter = require('./routes/users'); 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/invitations', invitationsRouter);
app.use('/login', usersRouter); 

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
