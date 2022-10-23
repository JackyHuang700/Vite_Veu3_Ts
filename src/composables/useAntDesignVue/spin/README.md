```javascript

import useSpin from "@/composables/useAntDesignVue/spin"

    const _data_init: TDeepPartial<ISpin> = reactive({
        attrs: {
            spinning: false,
            tip: '載入中',
            size: 'default',
            class: '',
            style: '',
        },
    })

    <a-spin v-bind="spin_com.attrs"/>


```