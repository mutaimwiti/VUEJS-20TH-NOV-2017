import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    tasks: []
};

const mutations = {
    addTask(state, {task}) {
        state.tasks.push(
            {
                name: task, status: 0
            }
        )
    },

    finishTask(state, {task}){
        state.tasks[state.tasks.indexOf(task)].status = 1;
    },

    deleteTask(state, {task}){
        state.tasks.splice(state.tasks.indexOf(task), 1);
    }
};

const actions = {
    addTask(context, payload) {
        context.commit('addTask', payload);
    }
};

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});

export default store;
