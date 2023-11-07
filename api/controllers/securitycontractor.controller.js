import Listing from "../models/securitycontractor.model.js";
export const createListing = async (req, res, next) => {

    try {
        const securitycontractorlisting = await Listing.create (req.body);
        return res.status(201).json(securitycontractorlisting);
    } catch (error) {
        next (error);
    }
};