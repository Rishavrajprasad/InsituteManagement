import Listing from "../models/purchaselisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const purchaselisting = await Listing.create (req.body);
        return res.status(201).json(purchaselisting);
    } catch (error) {
        next (error);
    }
};