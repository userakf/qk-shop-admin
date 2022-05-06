import { UserInfo } from "@/api/types/common";
import { defineStore } from "pinia";
import { setItem, getItem, removeItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
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

export const useUserInfoStore = defineStore('userinfo', {
    state: () => ({
        user: getItem<UserInfo>(USER)
    }),
    actions: {
        setUser(payload: UserInfo | null) {
            this.user = payload
            setItem(USER, this.user)
        },
        removeUser(){
            removeItem(USER)
        }
    }
})