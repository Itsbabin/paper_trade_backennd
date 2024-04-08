import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dn1zufxma', 
    api_key: '394742956795486', 
    api_secret: 'vvdcuuahS--AHVe167eJ0HFLLfA',
  });

async function uploadMeadia (localpath) {
    try {
        const result = await cloudinary.uploader.upload(localpath, {
            resource_type: "auto"
        });
        console.log(result);
       return result;

      } catch (error) {
        console.log(error);
      }
}

export default uploadMeadia;