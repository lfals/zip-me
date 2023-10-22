// @ts-nocheck
import { writable } from 'svelte/store';

/* Default store value */
let foo = ""

/* Check for an existing value in localStorage */
if (typeof localStorage !== `undefined`) {
    if (localStorage.getItem('links') !== null) {
        foo = JSON.parse(localStorage.getItem('links'));
    }
}

/* Set store to default value or localStorage value */
export const store = writable(foo);


/* Listen for changes to the store, and update localStorage with the most recent value */
store.subscribe((newValue) => {
    if (typeof localStorage !== `undefined`) {
        localStorage.setItem('links', JSON.stringify(newValue));
    }
});