import Listing from "../models/bbafeelisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const bbafeelisting = await Listing.create (req.body);
        return res.status(201).json(bbafeelisting);
    } catch (error) {
        next (error);
    }
};