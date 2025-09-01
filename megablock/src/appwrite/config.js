import conf from '../conf/conf.js';
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client= new Client();
    databases;
    storage;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
            console.log("Appwrite URL:", conf.appwriteUrl);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        this.bucket = conf.appwriteBucketId;
    }

    async createPost({title,slug,content,featuredImage,status,userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,

                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPosts(queries =[Query.equal("status",
        "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries
                )
            } catch (error) {
                throw error;
            }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
   
}

const service= new Service()
export default service