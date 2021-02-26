const express = require('express');
const mongodb = require('mongodb');

const router  = express.Router();

// get tool
router.get('/', async (req, res) => {
  const tools = await loadToolsCollection();

  res.send(await tools.find({}).toArray());
})

router.get('/:id', async (req, res) => {
  const tools = await loadToolsCollection();
  
  res.send(await tools.findOne(mongodb.ObjectID(req.params.id)))
})

// add tool
router.post('/', async (req, res) => {
  const tools = await loadToolsCollection();

  await tools.insertOne({
    name: req.body.name,
    description: req.body.description,
    game: req.body.game,
    catagory: req.body.catagory,
    addedAt: new Date()
  });

  res.sendStatus(201)
})

// delete tool
router.delete('/:id', async (req, res) => {
  const tools = await loadToolsCollection()

  await tools.deleteOne({_id: new mongodb.ObjectID(req.params.id)})

  res.sendStatus(200)
})

router.put('/:id', async (req, res) => {
  const tools = await loadToolsCollection()

  await tools.updateOne(
    {_id: new mongodb.ObjectID(req.params.id)},
    { $set: req.body }
  )

  res.sendStatus(200)
})


async function loadToolsCollection() {

  const user = process.env.MONGODB_USER
  const pass = process.env.MONGODB_PASS
  const client = await mongodb.MongoClient.connect(`mongodb+srv://${user}:${pass}@cluster0.zevxn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true});

  return client.db('gtd').collection('tools');
}

module.exports = router