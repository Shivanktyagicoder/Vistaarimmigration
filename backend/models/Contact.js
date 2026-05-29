const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    fullName:    { type: String, required: true, trim: true, maxlength: 100 },
    email:       { type: String, required: true, lowercase: true, trim: true, maxlength: 200 },
    countryCode: { type: String, trim: true, default: '' },
    phone:       { type: String, required: true, trim: true, maxlength: 20 },
    service: {
      type: String, required: true, trim: true,
      enum: ['Student Visa', 'Work Permit', 'PR / Immigration', 'Business Visa', 'Schengen Visa', 'Visitor Visa', 'Dependent Visa'],
    },
    country: {
      type: String, required: true, trim: true,
      enum: ['Canada 🇨🇦', 'United Kingdom 🇬🇧', 'Australia 🇦🇺', 'United States 🇺🇸', 'Germany 🇩🇪', 'New Zealand 🇳🇿'],
    },
    message:     { type: String, required: true, trim: true, maxlength: 2000 },
    ipAddress:   { type: String, default: 'Unknown' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in-progress', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
)

// Index for fast admin queries
contactSchema.index({ createdAt: -1 })
contactSchema.index({ email: 1 })
contactSchema.index({ status: 1 })

module.exports = mongoose.model('Contact', contactSchema)
