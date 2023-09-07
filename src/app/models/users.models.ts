export interface UsersModel {
    _id?: string;
    username: string;
    email: string;
    password: string;
    profileImage: string | '';
    userType?: string;
    last_login:string;
    data_created:string;
   
}
export interface UserProfileModel{
    firstName:string;
    lastName:string;
    address: string,
    phone: string;
}

