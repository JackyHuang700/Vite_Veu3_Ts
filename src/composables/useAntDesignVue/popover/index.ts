import { reactive } from 'vue'
import type { IPopover } from '@/composables/useAntDesignVue/types'
import type { TDeepPartial } from "@/types"

export default function usePopover(data_init?: TDeepPartial<IPopover>){

    // IPopover
    const _data_init: TDeepPartial<IPopover> = reactive({
        visible: false,
    
        attrs: {
            trigger: 'hover',
            title: '標題',
            // content: '',
        },
    })


    if(data_init?.visible) _data_init!.visible = data_init.visible
    if(data_init?.attrs?.trigger) _data_init!.attrs!.trigger = data_init.attrs.trigger
    if(data_init?.attrs?.title) _data_init!.attrs!.title = data_init.attrs.title
    if(data_init?.attrs?.content) _data_init!.attrs!.content = data_init.attrs.content


    return {
        popper_init: {
            ..._data_init,
            ...data_init,
        }
    }
}