/**
 * Controlador para iniciar sesion
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function login (req,res){
    res.send("Hello login!")
}

module.exports = { login }