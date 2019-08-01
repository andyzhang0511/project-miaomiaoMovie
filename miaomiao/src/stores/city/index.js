const state = {
    nmm: window.localStorage.getItem("NowNmm") || "北京",
    id: window.localStorage.getItem("NowId") || 1
};

const mutations = {
    CITY_INFO(state, {nmm,id}) {
        state.nmm = {nmm,id}.nmm;
        state.id = {nmm,id}.id;
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}