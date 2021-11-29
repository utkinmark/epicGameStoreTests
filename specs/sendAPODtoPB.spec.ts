import { nasaController } from '../src/api/controllers/nasa.controller'
import { pasteBinController } from '../src/api/controllers/pasteBin.controller'
describe('send APOD to pasteBin', function () {
  let nasaClient = new nasaController
  let pbClient = new pasteBinController
  
  it('give hdurl and  explanation for APOD request', async function () {
    let apodResult = await nasaClient.getApod('2020-01-01', true)
    expect(apodResult.hdurl).toBe('https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_2662.jpg')
    expect(apodResult.explanation).toBeDefined
  })

  it('send APOD explanation to pasteBin and recieve link', async function () {
    let apodResult = await nasaClient.getApod('2020-01-01', true)
    let sendResult = await pbClient.sendPaste(apodResult.explanation)
    expect(sendResult).toContain('https://pastebin.com/')
  })
});