export interface IInput<T = string> {
    value: T
    attrs: {
        loading: boolean
    }
    listeners: {
        change: {
            (): void
        }
    }
}

/** */
export interface IInputNumber {
    attrs: {
        /** */
        size: string
        /** */
        step: string | number
    }
    listeners: {
        /** */
        change: {
            (val: number | string): void,
        },
        /** */
        blue?: {},
        /** */
        focust?: {},
        /** */
        pressEnter?: {
            (value: number, info: { offset: number, type: 'up' | 'down' }): void
        },
    }
}

/** */
export interface ISwitch<T = string> {
    // checked: checkedValue
    checked: T
    attrs: {
        /** */
        autofocus: boolean
        /** */
        disabled: boolean
        /** */
        loading: boolean
        /** */
        size: string
    }
    listeners: {
        /** */
        change: {
            (checked: boolean | string | number, event: Event): void
        },
        /** */
        click: {
            (checked: boolean | string | number, event: Event): void
        },
    }
}

/** */
export interface IRate<T = number> {
    value: T
    attrs: {
        /** */
        count: number
        /** */
        disabled: boolean
    }
    listeners: {
        /** */
        blur: {}
        /** */
        change: {}
        /** */
        focus?: {}
        /** */
        hoverChange?: {}
        /** */
        keydown?: {}
    }

}


/** */
export interface IPopover {
    /** v-model:visible="popper_init.visible"， 若串接，會造成 attrs.trigger 失效 */
    visible: boolean
    attrs: {
        /** */
        title: string
        /** */
        content?: string
        /** */
        trigger: "hover" | "focus" | "click"
        /** */
        //   placement
        /** */
        class?: string | string[]
        /**  */
        style?: string
    }
}


/** loading 動畫 */

export interface ISpin {
    attrs: {
        /** */
        spinning: boolean
        /** 提示訊息 */
        tip: string
        /** */
        size: 'default' | 'small' | 'large'
        class: string | string[]
        /**  */
        style: string
    }

}

/** */
/** 代辦清單 - useModal */
export interface IModal<T = boolean> {
    visible: T
    attrs: {
        class: string | string[]
        /**  */
        style: string
    }
    listeners: {
        ok: {
            (e: Event): void
        }
        cancel: {
            (e: Event): void
        }
    }

}