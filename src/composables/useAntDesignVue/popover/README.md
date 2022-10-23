```javascript

import usePopover from "@/composables/useAntDesignVue/popover"

const { popper_init: popper_com1 } = usePopover({
  // visible: false,
  // attrs: {
    // trigger:  '',
    // title: '標題',
    // content: '內容',
  // },
  })

  <!-- v-model:visible="popper_bmo1.visible" -->
  <a-popover 
    v-bind="popper_bmo1.attrs"
  >
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <template #title v-if="false">
      <span>Title</span>
    </template>
    <button>button</button>
  </a-popover>

```