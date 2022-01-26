import mongoose from 'mongoose'
import {
  ProfileErrors,
  ValidateProfile,
} from '../utils/validation.js'

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  company: {
    type: String,
    validate: [
      (value) => ValidateProfile.company(value),
      ProfileErrors.company,
    ],
  },
  website: {
    type: String,
    validate: [
      (value) => ValidateProfile.website(value),
      ProfileErrors.website,
    ],
  },
  location: {
    type: String,
    validate: [
      (value) => ValidateProfile.location(value),
      ProfileErrors.location,
    ],
  },
  status: {
    type: String,
    required: true,
    validate: {
      validator: ValidateProfile.status,
      message: () => ProfileErrors.status,
    },
  },
  skills: {
    type: [String],
    required: true,
    default: undefined,
  },
  bio: {
    type: String,
    validate: [
      (value) => ValidateProfile.bio(value),
      ProfileErrors.bio,
    ],
  },
  githubUsername: {
    type: String,
    validate: [
      (value) => ValidateProfile.githubUsername(value),
      ProfileErrors.githubUsername,
    ],
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
        validate: [
          (value) =>
            ValidateProfile.experience.title(value),
          ProfileErrors.experience.title,
        ],
      },
      company: {
        type: String,
        required: true,
        validate: [
          (value) => ValidateProfile.company(value),
          ProfileErrors.company,
        ],
      },
      location: {
        type: String,
        validate: [
          (value) => ValidateProfile.location(value),
          ProfileErrors.location,
        ],
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
        validate: [
          (value) =>
            ValidateProfile.experience.description(value),
          ProfileErrors.experience.description,
        ],
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
        validate: [
          (value) =>
            ValidateProfile.education.school(value),
          ProfileErrors.education.school,
        ],
      },
      degree: {
        type: String,
        required: true,
        validate: [
          (value) =>
            ValidateProfile.education.degree(value),
          ProfileErrors.education.degree,
        ],
      },
      fieldOfStudy: {
        type: String,
        required: true,
        validate: [
          (value) =>
            ValidateProfile.education.fieldOfStudy(value),
          ProfileErrors.education.fieldOfStudy,
        ],
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
        validate: [
          (value) =>
            ValidateProfile.education.description(value),
          ProfileErrors.education.description,
        ],
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Profile', ProfileSchema)
