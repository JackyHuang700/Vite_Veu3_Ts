import { reactive } from 'vue'
import type { ISpin } from '@/composables/useAntDesignVue/types'
import type { TDeepPartial } from "@/types"

export default function usePopover (data_init?: TDeepPartial<ISpin>) {

    // ISpin
    const _data_init: TDeepPartial<ISpin> = reactive({
        attrs: {
            spinning: false,
            tip: '載入中',
            size: 'default',
            class: '',
            style: '',
        },
    })


    if (data_init?.attrs?.spinning) _data_init!.attrs!.spinning = data_init.attrs.spinning
    if (data_init?.attrs?.tip) _data_init!.attrs!.tip = data_init.attrs.tip
    if (data_init?.attrs?.size) _data_init!.attrs!.size = data_init.attrs.size
    if (data_init?.attrs?.class) _data_init!.attrs!.class = data_init.attrs.class
    if (data_init?.attrs?.style) _data_init!.attrs!.style = data_init.attrs.style


    return {
        spin_init: {
            ..._data_init,
            ...data_init,
        }
    }
}