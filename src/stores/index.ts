import { defineStore } from "pinia";

export const useCommonStore = defineStore('common', {
    state: () => ({
        isCollapse: true
    }),
    actions: {
        setIsCollapse(): void {
            this.isCollapse = !this.isCollapse
        }
    }
})