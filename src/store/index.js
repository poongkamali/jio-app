import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        // part of storage
        // recipe:[],
    },
    getters:{
        // get data from state store
        // getrecipe(state){
        //     return state.recipe
        // }
    },
    mutations:{
        // for state changing propose
        // SET_RECIPE(state, recipe){
        //     state.recipe = recipe
        // }
    },
    actions:{
        // for get data from backend DB
    }
})