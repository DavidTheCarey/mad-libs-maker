const Entry = require("../../models/entry")

module.exports  = {
    index,
    create,
    delete: deleteEntry,
}

async function index (req,res){
    const entries = await Entry.find({})
    res.json(entries);
}

async function create (req,res){
    const madlib = req.body;
    console.log(madlib);
    madlib.user = req.user;
    const newMadLib = new Entry(madlib);
    newMadLib.save();
    res.json(newMadLib);
}

async function deleteEntry (req,res){
    try{
        const specEntry = await Entry.findById(req.params.id);
        await specEntry.deleteOne();
        res.status(200)
        } catch (error) {
            res.status(400).json({ error: 'something went wrong' })
        }
}