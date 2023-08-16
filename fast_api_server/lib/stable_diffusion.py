import requests
import json
import traceback

def stable_diffusion_api(origin_base64, mask_base64, feature):
    try:
        url = "http://hackerton.batro.org:7860/sdapi/v1/img2img"
        body = {
            "init_images":[
                f"{origin_base64}"
            ],
            "mask": f"{mask_base64}",
            "resize_mode":0,
            "denoising_strength":0.75,
            "image_cfg_scale":0,
            "mask_blur":0,
            "inpainting_fill":0,
            "inpaint_full_res":True,
            "inpaint_full_res_padding":32,
            "inpainting_mask_invert":1,
            "seed":-1,
            "subseed":-1,
            "seed_resize_from_h":-1,
            "seed_resize_from_w":-1,
            "batch_size":1,
            "steps":30,
            "cfg_scale":7,
            "width":512,
            "height":512,
            "restore_faces":True,
            "tiling":False,
            "do_not_save_samples":False,
            "do_not_save_grid":False,
            "prompt":f"{feature}",
            "negative_prompt":"((unrealistic)), ((cartoon)), digital art, (bad anatomy), deformed body parts, low quality, worst quality, ((bad hands)), blur (((decorate))), (((people:1.4))), not custom people, no custom model",
            "eta":0,
            "s_min_uncond":0,
            "s_churn":0,
            "s_tmax":0,
            "s_tmin":0,
            "s_noise":1,
            "override_settings":{
                
            },
            "override_settings_restore_afterwards":False,
            "script_args":[
                
            ],
            "sampler_index":"DPM++ SDE Karras",
            "include_init_images":False,
            "send_images":True,
            "save_images":True,
            "alwayson_scripts":{
                
            }
        }
        json_body = json.dumps(body)
        
        response = requests.post(url, data = json_body)

        return response.json()
    except:
        print(traceback.format_exc())
        return {"code" : 500 , "message" : "Internal Error"}