import { defineStore } from "pinia";
import type Post from "~/types/Post";

export const mainModuleStore = defineStore("main", {
    state: () => ({
        posts: [] as Post[],
    }),
    getters: {
        getPosts(state) {
            return state.posts;
        },
    },
    actions: {
        async fetchPosts() {
            let response: Response | null = null,
                data = [] as Post[];

            try {
                response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/",
                    {
                        method: "GET",
                        cache: "no-cache",
                        credentials: "include",
                    }
                );
            } catch (error) {
                console.log(error);
            }

            if (response && response.status === 200) {
                try {
                    data = await response.json();
                } catch (error) {
                    console.log(`Error in handle response ${error}`);
                }

                if (data.length > 0) {
                    this.$state.posts = data;
                }
            }
        },
    },
});