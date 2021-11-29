import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { pasteBinApiKey } from '../../configs/config.json'

export class pasteBinController {
    async sendPaste(paste: string) {
        var data = qs.stringify({
            'api_dev_key': pasteBinApiKey,
            'api_paste_code': paste,
            'api_option': 'paste' 
          });
          var config: AxiosRequestConfig = {
            method: 'post',
            url: 'https://pastebin.com/api/api_post.php',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          let result = await axios(config)
          return result.data
    }
}
