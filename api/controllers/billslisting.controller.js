import Listing from "../models/billslisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const billslisting = await Listing.create (req.body);
        return res.status(201).json(billslisting);
    } catch (error) {
        next (error);
    }
};