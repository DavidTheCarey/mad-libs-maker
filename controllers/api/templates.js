const Template = require("../../models/template")

module.exports  = {
    index,
    create,
    delete: deleteTemplate
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

async function deleteTemplate (req,res) {
    const specTemplate = Template.find(user=req.params.id);
    Template.deleteOne(specTemplate);
    res.json(specTemplate);
}