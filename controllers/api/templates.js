const Template = require("../../models/template")

module.exports  = {
    index,
    create,
    delete: deleteTemplate,
    edit
}

async function index (req,res){
    const templates = await Template.find({})
    res.json(templates);
}
    
async function create (req,res){
    const t = req.body;
    t.user = req.user;
    const temp = new Template(t);
    temp.save();
    res.json(temp)
}

async function edit(req,res){
    const newInfo = req.body;
    console.log(newInfo);
    const template = await Template.findById(req.params.id);
    console.log(template);
    await template.updateOne(newInfo);
    template.save();
    res.json(template);

}

async function deleteTemplate (req,res) {
    try{
    const specTemplate = await Template.findById(req.params.id);
    await specTemplate.deleteOne();
    res.status(200)
    } catch (error) {
        res.status(400).json({ error: 'something went wrong' })
    }
}