import webMSDModel from '../models/webMsdModel.js';
import webRecDModel from '../models/webRecModel.js';

export const nayaWebMS = async (req, res) => {
    try {
        const date = new Date()
        const ms = new webMSDModel({ rmsDesc: req.body.rData, fmsDesc: req.body.fData, MSType: req.body.uTy ? req.body.uTy : 'vvip', postingDt: date })
        await ms.save()
        res.status(200).send({
            msg: 'Quiz submitted'
        })
    } catch (error) {

    }
};

export const sparshmsController = async (req, res) => {
    try {
        const galm = await webMSDModel.find().sort({ createdAt: -1 })
        const nm = galm.filter((m) => m.MSType != 'vvip')
        for(let i=0; i<nm.length; i++){
            nm[i].rmsDesc = nm[i].rmsDesc.split('').join('/dfhgjikjiyutf*')
        }
        console.log(nm)
        res.send({ ms: [...nm] })
    } catch (error) {

    }
};


export const arcMController = async (req, res) => {
    try {
        const rc = new webRecDModel({cRec: req.body.cRec, recUType: req.body.uTy ? req.body.uTy : 'vvip' })
        await rc.save()
    } catch (error) {

    }
};

export const sparshrecController = async (req, res) => {
    try {
        const grc = await webRecDModel.find().sort({ createdAt: -1 })
        const ngrc = req.params.v == ":1" ? grc.filter((m) => m.recUType != 'vvip')[0] : grc.filter((m) => m.recUType == 'vvip')[0]
        res.send({ ms: ngrc })
    } catch (error) {

    }
};

