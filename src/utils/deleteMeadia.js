import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dn1zufxma', 
    api_key: '394742956795486', 
    api_secret: 'vvdcuuahS--AHVe167eJ0HFLLfA',
  });

  async function deleteMeadia (public_id) {
    try {
        await cloudinary.api.delete_resources([public_id])
        .then((result) => {
            console.log("uploaded media deleted due to some error");
        });
    
      } catch (error) {
        console.log(error);
      }
}

export default deleteMeadia;