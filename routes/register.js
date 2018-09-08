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
  let auth = req.body.auth || '';
  let alreadyExists = false;
  console.log({
    email: email,
    password: password,
      auth: auth
  });

  /* get collection of all users */
  let docRef = await db.collection('ToDo-tasks');
  await docRef
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
        console.log(data.auth !== '');
        if (auth) {
          console.log('auth: ' + auth);
          if (data.email === email && auth === data.auth) {
              console.log('already exists');
              res.status(409).send('this account already exists');
              alreadyExists = true;
              return;
          }
        } else {
            console.log('non-auth: ' + auth);
            if (data.email === email && !data.auth) {
                console.log('already exists');
                res.status(409).send('this account already exists');
                alreadyExists = true;
                return;
            }
        }
      });
      console.log(alreadyExists);
      if (!alreadyExists) {
        docRef
          .add({
            email: email,
            password: password,
              auth: auth
          })
          .then(ref => {
            res.status(201).json({
              id: ref.id,
              email: email,
              password: password,
                auth: auth
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
