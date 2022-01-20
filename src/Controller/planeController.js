const Plane = require('../Model/Plane');


module.exports = {
    
    async Store(req, res){
        const { firstName, lastName, email, serviceTipe, country, celPhone} = req.body
    
        try{
            const plane = new Plane({
                firstName, lastName, email, serviceTipe, country, celPhone
            })
            const response = await plane.save()
            return res.json(response)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "Plane unsaved" })
            
        }
    },

    async Index(req, res){
    
        try{
           
            const plane = await Plane.find(req.body)
            return res.json(plane)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "Plane unListed" })
           
        }
    },

    async IndexOne(req, res){
    
        try{
			const plane = await Plane.findOne({_id:req.params.id});
			res.send(plane)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar Plano"})
		}
    },

    async DeleteOne(req, res){
		try{
			const plane = await Plane.deleteOne({_id:req.params.id});
			res.send({"message": "Plane apagado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Deletar Plano"})
		}
	}
}