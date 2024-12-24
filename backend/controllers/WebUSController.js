import bcrypt from 'bcrypt'
import webUsModel from '../models/webUsModel.js';

export const judoController = async (req, res) => {
    try {
        const exisitingwebUs = await webUsModel.findOne({ email: req.body.email });
        if (exisitingwebUs) {
            return res
                .status(400)
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newwebUs = new webUsModel(req.body);
        await newwebUs.save();
    } catch (error) {
        
    }
};

export const ghusoController = async (req, res) => {
    try {
        const webUs = await webUsModel.findOne({ email: req.body.email });
        if (!webUs) {
            return res
                .status(400)
        }
        const isMatch = await bcrypt.compare(req.body.password, webUs.password);
        if (!isMatch) {
            return res
                .status(400)
        }
        let date = new Date().getDate()
        let gupt = `${date}${process.env.SECRETDET}`
        if(gupt != req.body.question){
            return res
                .status(400)
        }
        res.status(200).send();
    } catch (error) {
        
    }
};
