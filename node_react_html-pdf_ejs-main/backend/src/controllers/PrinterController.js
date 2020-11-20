
const pdf = require('html-pdf')
const ejs = require('ejs');

module.exports = {
    async index (request){
        
        const data = request.body;
        const texto = JSON.stringify(data);
        const n = texto.length;
        console.log(n)
        
        const options = {
            type: 'pdf',
            format: 'A5',
            orientation: 'portrait'
        }

        try {
            pdf.create(
                `${texto}`
                ,options).toFile('./pdf/meupdf.pdf',
            (err,res) => {
                try {
                    console.log(res)
                } catch (error) {
                    console.log(err)
                }
            })
        } catch (error) {
            console.log(err)
        }
    },
};




