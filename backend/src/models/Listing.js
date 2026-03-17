import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  location: {
    type: String
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String
  },

  review: {
    type: String
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;