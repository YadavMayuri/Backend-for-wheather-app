import Users from "../modals/UsersModal.js";
import encrypt from "encryptjs";



export const registrationCheck= async (req, res, next) => {   
    try {
        const { name, email, password } = req.body;

        if (!name) return res.send("Name is required - middleware");
        if (!email) return res.send("Email is requierd - middleware");
        if (!password) return res.send("Password is requierd - middleware");

        if (password.length < 8) {
            return res.send("Password length is less than 8 !")
        }
        const response = await Users.find({ email: email }).exec();
        console.log(response, "response")
        if (response.length) {
            return res.send("Email already exist or You are already resgistered!");
        }
        next();

    } catch (error) {
        return res.send(error)
    }
}



export const ValidUser = async (req, res, next) => {
    try {
        const { id, password} = req.body;
        if (!id) return res.send("id is required - middleware");
        if (!password) return res.send("Password is required - middleware");

        var secretkey = 'ios';

        const response = await Users.find({ _id : id }).exec();
        console.log(response, "response here");

        var deciphertext = encrypt.decrypt(response[0].password, secretkey, 256);
        console.log("Deciphered password is : " + deciphertext);

        if (deciphertext === password) {  
            next();
        } else {
            return res.send("Incorrect password - middleware");
        }


    } catch (error) {
        res.send(error)
    }
}