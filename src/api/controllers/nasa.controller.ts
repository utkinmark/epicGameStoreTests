import axios, { AxiosRequestConfig } from 'axios'
import { nasaApiKey } from '../../configs/config.json'

export class nasaController {
    async getApod(date: string, hd: boolean) {
        var config: AxiosRequestConfig = {
            method: 'get',
            url: 'https://api.nasa.gov/planetary/apod?api_key='+ nasaApiKey +'&date='+ date + '&hd=' + hd,
            headers: {}
        };
        let result = await axios(config)
        return result.data
    }
}