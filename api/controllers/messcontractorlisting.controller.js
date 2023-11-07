import Listing from "../models/messcontractorlisting.model.js";
export const createListing = async (req, res, next) => {

    try {
        const messcontractorlisting = await Listing.create (req.body);
        return res.status(201).json(messcontractorlisting);
    } catch (error) {
        next (error);
    }
};