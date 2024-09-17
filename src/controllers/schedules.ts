import Schedule = require( '../models/Schedule');
import { Request, Response } from 'express';
import 'dotenv/config';

const getAllSchedules = async (_: Request, res: Response )=> {
    res.setHeader('Access-Control-Allow-Origin', process.env.SCHEDULE_FRONT_URL!);
    try{
        const allSchedule = await Schedule.find({});
        res.status(200).json(allSchedule);
    } catch (err){ 
        res.status(500).json(err);
    }
}

const createSchedule = async (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.SCHEDULE_FRONT_URL!);
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Origin, Authorization, X-Requested-With");
    try{
        const createSchedule = await Schedule.create(req.body);
        res.status(200).json(createSchedule);
    } catch (err){ 
        console.log(err);
        res.status(500).json(err);
    }
}

const getSingleSchedule = async (req: Request, res: Response): Promise<any> => {
    res.setHeader('Access-Control-Allow-Origin', process.env.SCHEDULE_FRONT_URL!);
    try{
        const getSingleSchedule = await Schedule.findOne({_id: req.params.id });
        if(!getSingleSchedule){
            return res.status(404).json(`id:${req.params.id}は存在しません`);
        }
        res.status(200).json(getSingleSchedule);
    } catch (err){ 
        res.status(500).json(err);
    }
}

const resOptions = async (req: Request, res: Response): Promise<any> => {
    res.setHeader("Access-Control-Allow-Origin", process.env.SCHEDULE_FRONT_URL!);
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE, PATCH");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Origin, Authorization, X-Requested-With");
    try{
        const getSingleSchedule = await Schedule.findOne({_id: req.params.id });
        if(!getSingleSchedule){
            return res.status(404).json(`id:${req.params.id}は存在しません`);
        }
        res.sendStatus(204);
    } catch (err){ 
        res.status(500).json(err);
    }
}

const updateSchedule = async (req: Request, res: Response): Promise<any>  => {
    res.setHeader('Access-Control-Allow-Origin', process.env.SCHEDULE_FRONT_URL!);
    try{
        const updateSchedule = await Schedule.findOneAndUpdate(
            {_id: req.params.id },
            req.body,
            {
                new: true
            }
        );
        if(!updateSchedule){
            return res.status(404).json(`id:${req.params.id}は存在しません`);
        }
        res.status(200).json(updateSchedule);
    } catch (err){ 
        res.status(500).json(err);
    }
}

const deleteSchedule = async (req: Request, res: Response): Promise<any>  => {
    res.setHeader('Access-Control-Allow-Origin', process.env.SCHEDULE_FRONT_URL!);
    try{
        const deleteSchedule = await Schedule.findOneAndDelete(
            {_id: req.params.id },
            req.body,
        );
        if(!deleteSchedule){
            return res.status(404).json(`id:${req.params.id}は存在しません`);
        }
        res.status(200).json(deleteSchedule);
    } catch (err){ 
        res.status(500).json(err);
    }
}

export = {
    getAllSchedules,
    createSchedule,
    getSingleSchedule,
    updateSchedule,
    deleteSchedule,
    resOptions
};