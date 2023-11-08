import Listing from "../models/bcafeelisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const bcafeelisting = await Listing.create (req.body);
        return res.status(201).json(bcafeelisting);
    } catch (error) {
        next (error);
    }
};