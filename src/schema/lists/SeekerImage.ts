import { list } from '@keystone-6/core';
import { relationship } from '@keystone-6/core/fields';
import { s3ImageUpload } from '../../config/s3';

const BusinessImage = list({
  fields: {
    image: s3ImageUpload,
    business: relationship({ ref: 'Business.images'})
  },
});

export default BusinessImage;
