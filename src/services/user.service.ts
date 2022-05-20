import {AxiosResponse} from 'axios'
import { urls } from '../constants'
import { IUser } from '../interfaces'
import { axiosService } from './axios.service'

type Res<T>=Promise<AxiosResponse<T>>

const userService={
    getAll:():Res<IUser[]>=>axiosService.get(urls.users)
}

export {userService}