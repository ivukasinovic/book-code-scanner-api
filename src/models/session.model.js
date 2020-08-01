const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const sessionSchema = mongoose.Schema(
  {
    sessionName: {
      type: String,
      required: true,
      trim: true,
    },
    books: Array,
    dateTime: String,
  },
  {
    timestamps: true,
  }
);

sessionSchema.plugin(toJSON);

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
