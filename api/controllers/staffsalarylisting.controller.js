import Listing from "../models/staffsalarylisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const staffsalarylisting = await Listing.create (req.body);
        return res.status(201).json(staffsalarylisting);
    } catch (error) {
        next (error);
    }
};