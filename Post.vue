<template>
    <div>
        <div class="container-fluid mt-3" v-if="post">
            <div class="row">
                <div class="col-12 text-center">
                    <img class="rounded post-image-size" :src="post.img" :alt="post.title">
                    <h2 class="cm-post-text-props">{{post.title}}: {{post.name}}</h2>
                    <p class="cm-post-text-size" v-if="visibleDetailText">{{post.body}}</p>
                    <button class="btn btn-dark cm-btn-post-width cm-btn-post-props text-capitalize" @click="visibleDetailText = !visibleDetailText">read</button>
                </div>
                <div class="col-12 text-left">
                    <router-link to="/blog" class="btn btn-dark cm-card-btn-size">Back to posts</router-link>
                </div>
            </div>
        </div>
        <!-- Footer, begin -->
        <footer class="mt-3 cm-footer-visible">
            <div class="container">
                <div class="row cm-row">
                    <div class="col-3 cm-col-3">
                        <div class="icon-container text-center"><i class="fab fa-vk text-primary cm-text-size"></i></div>
                    </div>
                    <div class="col-3 cm-col-3">
                        <div class="bg-info rounded icon-container text-center"><i class="fab fa-facebook-f text-light cm-text-size"></i></div>
                    </div>
                    <div class="col-3 cm-col-3 cm-mb-icon">
                        <div class="bg-light rounded icon-container text-center"><i class="fab fa-twitter text-info cm-text-size"></i></div>
                    </div>
                    <div class="col-3 cm-col-3 cm-mb-icon">
                        <div class="bg-primary rounded icon-container text-center"><i class="fab fa-linkedin-in text-light cm-text-size"></i></div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer, end -->
    </div>
</template>

<script>
export default {
    data: function() {
		return {
			posts: [
				{title: 'Story 1', body: 'Some comment 1', name: 'Derek', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 2', body: 'Some cooment 2', name: 'Joe', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 3', body: 'Some cooment 3', name: 'Mike', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 4', body: 'Some cooment 4', name: 'Ron', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 5', body: 'Some cooment 5', name: 'Dii', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 6', body: 'Some cooment 6', name: 'Lonni', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 7', body: 'Some cooment 7', name: 'Derek', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 8', body: 'Some cooment 8', name: 'Joe', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 9', body: 'Some cooment 9', name: 'Mike', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 10', body: 'Some cooment 10', name: 'Ron', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 11', body: 'Some cooment 11', name: 'Dii', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 12', body: 'Some cooment 12', name: 'Lonni', img: 'https://www.w3schools.com/howto/img_snow_wide.jpg'},
                {title: 'Story 13', body: 'Some cooment 13', name: 'Derek', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 14', body: 'Some cooment 14', name: 'Joe', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 15', body: 'Some cooment 15', name: 'Mike', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 16', body: 'Some cooment 16', name: 'Ron', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 17', body: 'Some cooment 17', name: 'Dii', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 18', body: 'Some cooment 18', name: 'Lonni', img: 'https://www.w3schools.com/howto/img_snow_wide.jpg'},
                {title: 'Story 19', body: 'Some cooment 19', name: 'Derek', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 20', body: 'Some cooment 20', name: 'Joe', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 21', body: 'Some cooment 21', name: 'Mike', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 22', body: 'Some cooment 22', name: 'Ron', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 23', body: 'Some cooment 23', name: 'Dii', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 24', body: 'Some cooment 24', name: 'Lonni', img: 'https://www.w3schools.com/howto/img_snow_wide.jpg'},
                {title: 'Story 25', body: 'Some cooment 25', name: 'Derek', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 26', body: 'Some cooment 26', name: 'Joe', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 27', body: 'Some cooment 27', name: 'Mike', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 28', body: 'Some cooment 28', name: 'Ron', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 29', body: 'Some cooment 29', name: 'Dii', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 30', body: 'Some cooment 30', name: 'Lonni', img: 'https://www.w3schools.com/howto/img_snow_wide.jpg'},
                {title: 'Story 31', body: 'Some cooment 31', name: 'Derek', img: 'https://www.w3schools.com/howto/img_lights_wide.jpg'},
                {title: 'Story 32', body: 'Some cooment 32', name: 'Joe', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 33', body: 'Some cooment 33', name: 'Mike', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 34', body: 'Some cooment 34', name: 'Ron', img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'},
                {title: 'Story 35', body: 'Some cooment 35', name: 'Dii', img: 'https://www.w3schools.com/howto/img_nature_wide.jpg'},
                {title: 'Story 36', body: 'Some cooment 36', name: 'Lonni', img: 'https://www.w3schools.com/howto/img_snow_wide.jpg'}
			],
            post: null,
            visibleDetailText: false,
            postsCount: 0,
		}
    },
    created: function() {
        let postId = (this.$route.params.id) - 1;
        this.post = this.posts[postId];
    }
}
</script>

<style scoped>
    /*Post styles */

    .post-image-size {
        width: 100%;
        max-height: 350px;
    }

    .cm-post-text-props {
        font-size: 35px;
        font-weight: normal;
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

    .cm-post-text-size {
        font-size: 1.5rem;
        font-weight: normal;
    }

    .cm-card-text-bottom-props {
        font-size: 16px;
        font-weight: 600;
    }

    .cm-btn-post-width {
        width: 30%;
    }

    .cm-btn-post-props {
        font-size: 1.5rem !important;
        font-weight: normal;
        /*text-transform: capitalize;*/
    }

    /*Footer styles*/

    .cm-footer-visible {
        background-color: #343a40;
        min-height: 5rem;
        width: 100%;
    }

    .cm-flex-container-bottom {
        display: flex;
        justify-content: space-around;
    }

    .icon-container {
        padding: 5px 15px; 
        margin-top: 0.75rem;
    }

    .cm-text-size {
        font-size: 3rem;
    }

    /*Media queries styles of Footer*/

    @media screen and (max-width: 399px) {
        .cm-col-3 {
            min-width: 50%;
            max-width: none !important;
        }

        .cm-mb-icon {
            margin-bottom: 0.7rem;
        }
    }

    @media screen and (min-width: 961px) {
        .cm-col-3 {
            flex: none !important;
            max-width: none !important;
            width: 7rem !important;
        }

        .cm-row {
            justify-content: center;
        }
    }
</style>