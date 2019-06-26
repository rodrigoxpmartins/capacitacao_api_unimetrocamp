 const get = function(req, res){
    const task = [
        {
            "title": "Aprender HTML",
            "description": "Estudar a tag body"
        },
        {
            "tittle": "Aprender CSS",
            "description": "Estudar alinhamento"

        }
    ];

    res.send(task);
 }

 const create = function(req, res){

 }

 const update = function (req,res){

 }

 const remove = function (req,res){

}

module.exports = { get, create, update, remove}