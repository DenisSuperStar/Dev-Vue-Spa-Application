<template>
    <div class="container-fluid">
        <div class="row">
            <!-- Generation posts begin -->
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" v-for="(post, index) in posts" :key="index">
                <div v-if="index <= showPostsCount">
                    <div class="mt-3">
                        <div class="card cm-card">
                            <img :src="post.img" :alt="post.title" @click="toggle(index)" class="card-img-top border-dark cm-card-border-width cm-card-bottom">
                            <div class="card-body border-dark cm-card-body cm-card-body-border-width">
                                <h5 class="card-title cm-card-title-size">{{post.title}}</h5>
                                <p class="card-text cm-card-text-size">{{post.body}}</p>
                                <router-link :to="{name: 'post', params: {id: index + 1}}" class="btn btn-dark cm-card-btn-size">View {{post.title}} of page</router-link>
                                <p class="card-text cm-card-text-bottom-props mt-3">By {{post.name}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Modal Window begin-->
                    <div class="modal fade cm-modal-visible cm-fade" v-if="visibleWindow" :class="{'cm-modal-visible': visibleWindow, 'cm-fade': visibleWindow}">
                        <div class="modal-dialog modal-lg cm-modal-nested">
                            <div class="modal-content cm-model-content rounded">
                                <div class="modal-header cm-modal-header">
                                    <button type="button" class="close" @click="close">
                                    <span>&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body cm-modal-body">
                                    <img class="img-content rounded" :src="currentPost.img" :alt="post.title" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal Window end -->
            </div>
            <!-- Generation posts end -->
        </div>
        <div class="container mt-3 mb-3">
            <div class="row">
                <div class="col-12">
                <button class="btn btn-dark cm-show-more-btn-height cm-show-more-btn-width text-capitalize" v-if="showPostsCount < postsCount" @click="showPostsCount += 4">show more posts</button>
                </div>
            </div>
        </div>
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
            showPostsCount: 7,
            postsCount: 0,
            visibleWindow: false,
            currentPostId: 0,
            currentPost: null
        };
    },
    methods: {
        toggle: function(id) {
            this.currentPostId = id;
            this.currentPost = this.posts[this.currentPostId];
            this.visibleWindow = !this.visibleWindow;
        },
        close: function() {
            this.visibleWindow = false;
        } 
    },
    
    created: function() {
        this.postsCount = this.posts.length - 1;
        this.currentPost = this.posts[this.currentPostId];
    }
}
</script>

<style scoped>
    /*Blog styles*/

    .cm-card-border-width {
        border: 5px solid !important;
    }

    .cm-card-none-radius-top-corner {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
    }

    .cm-show-more-btn-height {
        min-height: 3rem;
    }

    .cm-show-more-btn-width {
        width: 100%;
    }

    .cm-card-bottom {
        border-bottom: none !important;
    }

    .cm-card {
        border: none !important;
    }

    .cm-card-body {
        margin-top: -30px;
        margin-right: 1rem;
        margin-bottom: auto;
        margin-left: 1rem;
        background-color: #fff;
    }

    .cm-card-body-border-width {
        border: 2px solid;
    }

    .cm-card-title-size {
        font-size: 14px;
        font-weight: normal;
    }

    .cm-card-text-size {
        font-size: 22px;
        font-weight: normal;
    }

    .cm-modal-visible {
        display: block !important;
    }

    .cm-fade:not(.show) {
        opacity: 1 !important;
    }

    .cm-modal-nested {
        margin-top: 5rem !important;
    }

    .cm-model-content {
        border-radius: 0px !important;
        border: none !important;
    }

    .cm-modal-header {
        border-bottom: none !important;
    }

    .cm-modal-body {
        padding: 0px !important;
    }

    .cm-modal-body .img-content {
        width: 100%;
        min-height: 20em;
        border: 5px solid #343a40;
    }

    /*Media queries styles of blog*/

    @media screen and (min-width: 992px) and (max-width: 1101px) {
        .cm-card-text-size {
            font-size: 18px;
            font-weight: normal;
        }

        .cm-card-btn-size {
            font-size: 15px !important;
            font-weight: normal;
        }
    }

    /*Media queries styles of modal window*/

    @media screen and (min-width: 320px) and (max-width: 575px) {
        .cm-modal-body .img-content {
            min-height: 15em;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
        .cm-modal-body .img-content {
            min-height: 16em !important;
        }

        .cm-model-content {
            min-height: 312px;
        }
    }
    @media screen and (min-width: 720px) and (max-width: 991px) {
        .cm-modal-nested {
            max-width: 600px !important;
        }
    }
</style>