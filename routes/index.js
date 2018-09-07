var express = require('express');

const router = express.Router();

const rxjs = require('rxjs');

var admin = require('firebase-admin');
var serviceAccount = require('../../../Google/todolist-b99fa-firebase-adminsdk-1m02g-349bf54581.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todolist-b99fa.firebaseio.com"
});

var db = admin.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

router.use((req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
});


/* GET request to retrieve all tasks from the ToDoList */
router.get('/tasks/:userID', async (req, res) => {
    let data = [];
    let userID = req.params.userID;
    let ref = await db.collection('ToDo-tasks')
        .doc(userID)
        .collection('Tasks')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let docObj = doc.data();
                docObj.id = doc.id;
                data.push(docObj);
                console.log(doc.id, ' => ', doc.data());
            });
            res.json(data);
        })
        .catch(err => {
            console.log('error getting docs');
        })
});

router.get('/task/:userID/:id', async (req, res) => {
    const userID = req.params.userID;
    const id = req.params.id;
    let ref = await db.collection('ToDo-tasks')
        .doc(userID)
        .collection('Tasks')
        .doc(id)
        .get();
    console.log(ref.data());
    res.json(ref.data());
});


router.post('/task/add', (req, res) => {
    let id = req.body.id;
    let userID = req.body.userID;
    let task = req.body.task;
    let priority = req.body.priority;
    // const taskObj = {
    //     task: task,
    //     priority: priority,
    //     dateCreated: Date.now(),
    //     dateUpdated: Date.now()
    // };
    let docRef;
    if (id) {
       docRef = db.collection('ToDo-tasks')
        .doc(userID)
        .collection('Tasks')
        .doc(id);
       // .set(taskObj);
       // .then(() => {
       //         taskObj.id = id;
       //          res.json(taskObj);
       //      });
    } else {
        docRef = db.collection('ToDo-tasks')
        .doc(userID)
        .collection('Tasks')
        .doc();
        // .set(taskObj);
        // .then(() => {
        //     res.json(taskObj);
        // });
    }
    const newID = docRef.id;
    const taskObj = {
        id: newID,
        task: task,
        priority: priority,
        dateCreated: Date.now(),
        dateUpdated: Date.now()
    };
    docRef.set(taskObj);
    res.json(taskObj);
});

router.put('/task/update', async (req, res) => {
    let id = req.body.id;
    let userID = req.body.userID;
    let task = req.body.task;
    let priority = req.body.priority;
    console.log({
        task: task,
        priority: priority,
        id: id,
        userID: userID
    });
    let docRef = await db.collection('ToDo-tasks')
        .doc(userID)
        .collection('Tasks')
        .doc(id);
    await docRef.update({
        dateUpdated: Date.now(),
        task: task,
        priority: priority
    })
        .then(resp => {
            res.json({
                resp: resp
            }).status(200);
        })
        .catch(err => {
            res.status(500).json({
                resp: err.toString()
            });
        });
});

router.post('/task/delete', async (req, res) => {
    const id = req.body.id;
    const userID = req.body.userID;
    await db.collection('ToDo-tasks')
        .doc(userID)
        .collection('Tasks')
        .doc(id)
        .delete().then(() => {
            res.status(200).json({
                resp: 'task deleted'
            });
    }).catch(err => {
        console.error(err);
        res.status(500).json({
            resp: err.toString()
        });
    });
});

module.exports = router;
