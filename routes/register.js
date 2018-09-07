var express = require('express');

const router = express.Router();

var admin = require('firebase-admin');

var db = admin.firestore();

router.use((req, res, next) => {
  console.log('Time: ' + Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('test');
});

router.post('/user/add', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let alreadyExists = false;
  console.log({
    email: email,
    password: password
  });

  /* get collection of all users */
  let docRef = await db.collection('ToDo-tasks');
  await docRef
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let data = doc.data();
        if (data.email === email) {
          res.status(409).send('this account already exists');
          alreadyExists = true;
          return;
        }
      });
      if (!alreadyExists) {
        docRef
          .add({
            email: email,
            password: password
          })
          .then(ref => {
            res.status(201).json({
              id: ref.id,
              email: email,
              password: password
            });
          })
          .catch(err => {
            res.send(err).status(500);
          });
      }
    })
    .catch(err => {
      res.send(err).status(500);
    });
});

module.exports = router;
