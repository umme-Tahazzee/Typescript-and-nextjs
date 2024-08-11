import mongoose from "mongoose";

type ConnectionObject = {
      isConnected?: number

}

const connection: ConnectionObject = {}

async function dbconnect(): Promise<void> {
    if(connection.isConnected){
         console.log('already connected');
         return
         
    }

    try {
      const db =  await mongoose.connect(process.env.MONGODB_URl || '', {})
      connection.isConnected =  db.connections[0].readyState
      console.log('Db connected successfully');
      
    } catch (error) {
        console.log('database connection fail', error);
        process.exit(1);
        
    }
}
export default dbconnect;