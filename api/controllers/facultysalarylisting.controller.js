import Listing from "../models/facultysalarylisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const facultysalarylisting = await Listing.create (req.body);
        return res.status(201).json(facultysalarylisting);
    } catch (error) {
        next (error);
    }
};