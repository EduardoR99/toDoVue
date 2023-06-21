export const localStoragePlugin = (store) => {
    console.log('Plugin was initialized');
    store.replaceState(
        Object.assign(
            store.state,
            JSON.parse(window.localStorage.getItem('vuex-storage'))
        )
    )

    store.subscribe((mutation, state) => {
        console.log(mutation);
        window.localStorage.setItem('vuex-storage', JSON.stringify(state))
    })
}