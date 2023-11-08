import Listing from "../models/btechfeelisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const btechfeelisting = await Listing.create (req.body);
        return res.status(201).json(btechfeelisting);
    } catch (error) {
        next (error);
    }
};