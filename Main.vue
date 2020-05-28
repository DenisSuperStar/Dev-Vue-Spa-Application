<template>
    <div>
        <div>
          <div class="container-fluid mt-3">
            <div class="row">
              <div class="col-12">
                  <div class="carousel">
                    <div class="carousel-inner">
                      <!-- Slides, begin -->
                      <template v-for="(slide, index) in posts">
                        <div class="carousel-item cm-carousel-item-visible" :key="index">
                          <img :src="selectedSlide.img" class="d-block w-100 rounded" :alt="selectedSlide.name">
                          <div class="carousel-caption cm-carousel-caption">
                              <h5 class="cm-carousel-caption-header text-capitalize">{{selectedSlide.name}}</h5>
                              <p class="cm-carousel-caption-text text-capitalize">quick view {{selectedSlide.name}}'s comment</p>
                              <router-link class="btn btn-dark cm-btn-visible text-capitalize" :to="{name: 'post', params: {id: selectedSlideId + 1}}">go to {{selectedSlide.name}}'s page</router-link>
                          </div>
                        </div>
                      </template>
                      <!-- Slides, end -->
                    </div>
                    <!-- Prev  Control, begin -->
                    <a class="carousel-control-prev" @click="selectedSlideId--, controlPrev()"> <!-- @click="selectedSlideId--: unending decrement -->
                      <slot>
                          <div class="cm-prev cm-carousel-control-prev-inner">
                              <font-awesome-icon icon="angle-left" />
                          </div>
                      </slot>
                    </a>
                    <!-- Prev Control, end -->
                    <!-- Next Control, begin -->
                    <a class="carousel-control-next" @click="selectedSlideId++, controlNext()"> <!-- @click="selectedSlideId++: unending increment -->
                      <slot>
                          <div class="cm-next cm-carousel-control-next-inner">
                              <font-awesome-icon icon="angle-right" />
                          </div>
                      </slot>
                    </a>
                    <!-- Next Control, end -->
                  </div>
                  <!-- Slider Controls, begin -->
                  <div class="text-center">
                    <template v-for="(control, index) in controlsDotCount">
                      <span class="cm-dot"
                          :class="{'cm-active-point': selectedSlideId === index}" 
                          @click="currentIndicator(index)"
                          :key="index" 
                          >
                      </span>
                    </template>
                    <!-- Management scrolling buttons, begin -->
                    <div class="text-center">
                      <button class="cm-start-carousel btn-danger cm-border-switch-controls" v-if="visibleControl" @click="startScroll">
                          <!-- <i class="fa fa-play"></i> -->
                          <slot><font-awesome-icon icon="play" /></slot>
                      </button>
                      <button class="cm-stop-carousel btn-danger cm-border-switch-controls" v-if="!visibleControl" @click="stopScroll">
                          <!-- <i class="fa fa-pause"></i> -->
                          <slot><font-awesome-icon icon="pause" /></slot>
                      </button>
                    </div>
                    <!-- end -->
                  </div>
                  <!-- Slider Controls, end -->
              </div>
            </div>
          </div>
          <!-- Slideshow, begin -->
          <div class="carousel-inner cm-mb-show cm-slideshow-control_margin-bottom" style="width: auto;">
            <div class="cm-slideshow-wrapper cm-delay" :style="{transform: 'translateX(' + (offset * (-1)) + '%)'}">
              <template v-for="(post, index) in posts">
                  <div class="cm-slideshow-item" :key="index">
                      <div class="card">
                          <img :src="post.img" class="card-img-top rounded">
                          <h2 class="cm-slideshow-content-title">{{post.title}}</h2>
                          <router-link :to="{name: 'post', params: {id: index + 1}}" class="btn btn-secondary cm-btn-show-width">Go {{post.title}}</router-link>
                      </div>
                  </div>
              </template>
            </div>
            <!-- Slideshow controls, begin -->
            <button class="cm-slideshow-control cm-slideshow-control_left rounded"  v-if="count >= 1"  @click="count--, back()">
                <slot><font-awesome-icon icon="chevron-left" /></slot> <!-- Add icon chevron-left -->
            </button>
            <button class="cm-slideshow-control cm-slideshow-control_right rounded" v-if="count < 11"  @click="count++, forward()">
                <slot><font-awesome-icon icon="chevron-right" /></slot> <!-- Add icon chevron right -->
            </button>
            <!-- end-->
          </div>
          <!-- Slideshow, end -->
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons' 
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleLeft);
library.add(faAngleRight);
library.add(faPlay);
library.add(faPause);
library.add(faChevronLeft);
library.add(faChevronRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

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
            selectedSlideId: 0,
            selectedSlide: null,
            controlsDotCount: 0,
            slideLastId: 0,
            slidesCount: 0,
            startTime: 0,
            visibleControl: true,

            count: 0,
            offset: 0
        };
    },
    template: '#main-page',
    methods: {
        currentIndicator: function(id) {
            this.selectedSlideId = id;
            this.selectedSlide = this.posts[this.selectedSlideId];

            return this.selectedSlideId;
        },

        startScroll: function() {
            this.visibleControl = !this.visibleControl;
            var self = this;
            this.startTime = setInterval(function() {
                self.selectedSlideId++;
                if (self.selectedSlideId > self.slideLastId - 1) {
                    clearInterval(self.startTime);
                }
                console.log(self.selectedSlideId);
                self.selectedSlide = self.posts[self.selectedSlideId];
            }, 2000);
        },

        stopScroll: function() {
            clearInterval(this.startTime);
            this.visibleControl = !this.visibleControl;
        },
        visibleScroll: function() {
            this.visibleControl = !this.visibleControl;
        },

        controlPrev: function() {
            if (this.selectedSlideId < 0) {
                this.selectedSlideId = this.slideLastId;
            }

            this.selectedSlide = this.posts[this.selectedSlideId];
        },
        controlNext: function() {
            if (this.selectedSlideId > this.slideLastId) {
                this.selectedSlideId = 0;
            }

            console.log(this.selectedSlideId);

            this.selectedSlide = this.posts[this.selectedSlideId];
            console.log(this.selectedSlide.img);
        },

        back: function() {
            this.offset = this.offset - 100;
            console.log(this.count);
            console.log(this.offset);
        },
        forward: function() {
            this.offset = this.offset + 100;
            console.log(this.count);
            console.log(this.offset);
        }
    },
    
    created: function() {
        this.selectedSlide = this.posts[0];
        this.controlsDotCount = this.posts.length;
        this.slidesCount = this.posts.length;
        this.slideLastId = this.slidesCount - 1;
    }
}
</script>

<style scoped>
    /*Carousel styles*/

    .cm-dot {
        height: 15px;
        width: 15px;
        margin: 10px 7px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .carousel img {
        width: 100%;
        min-height: 100px;
        border: 4px solid rgba(29, 29, 29, 0.8);
    }

    .cm-carousel-item-visible {
        display: block !important;
    }

    .cm-carousel-control-prev-inner, .cm-carousel-control-next-inner {
        color: #fff !important;
        background-color: rgba(70, 130, 180, 0.3);
        padding: 16px;
        border-radius: 5px;
        font-size: 30px;
        border: 2px solid #fff;
        transition: background-color 0.6s ease;
    }

    .cm-carousel-control-prev-inner:hover, .cm-carousel-control-next-inner:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .cm-carousel-control-prev-inner {
        position: absolute;
        left: 0;
        right: auto;
        margin-left: 1rem;
    }

    .cm-carousel-control-next-inner {
        position: absolute;
        left: auto;
        right: 0;
        margin-right: 1rem;
    }

    .cm-carousel-caption-title {
        font-size: 2rem !important;
    }

    .cm-active-point {
        border: 3px solid #808080;
        width: 18px;
        height: 18px;
    }

    .cm-btn-visible {
        width: 25%;
        border: 2px solid #fff !important;
    }

    /*Slideshow styles*/

    .cm-slideshow-wrapper {
        display: flex;
    }

    .cm-delay {
        transition: all 1.2s ease;
    }

    .cm-slideshow-item {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    .cm-slideshow-content-title {
        background: #f5f5f5;
        color: #343a40;
        font-weight: 600;
        font-size: 20px;
        padding: 10px 15px;
        margin: 0;
        height: 52px;
    }

    .cm-btn-show-width {
        width: 50%;
    }

    .cm-slideshow-control {
        position: absolute;
        top: 30%;
        bottom: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        color: #fff;
        text-align: center;
        opacity: 0.5;
        height: 50px;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, .5);
        border: 2px solid #fff;
        transition: all 0.5s ease;
    }

    .cm-slideshow-control:hover {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: .9;
    }

    .cm-slideshow-control_left {
        left: 0;
        margin-left: 1rem;
    }

    .cm-slideshow-control_right {
        right: 0;
        margin-right: 1rem;
    }

    .cm-slideshow-control::before {
        content: '';
        display: inline-block;
        height: 20px;
        background: transparent no-repeat center center;
        background-size: 100% 100%;
    }

    .cm-slideshow-control i {
        font-size: 1.5rem;
    }

    .cm-slideshow-item > div {
        line-height: 250px;
        font-size: 100px;
    }

    .cm-mb-show {
        margin-top: 1.5rem;
    }

    .cm-mt-foot {
        margin-top: 2.5rem;
    }

    /*Slideshow control styles of margin bottom*/

    .cm-slideshow-control_margin-bottom {
        margin-bottom: 1rem;
    }
    
    /*Media queries carousel styles*/

    @media screen and (min-width: 320px) and (max-width: 449px) {
        .media-mb, .cm-carousel-caption-text, .cm-carousel-caption-title {
            margin-bottom: 0 !important;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 350px) {
        .cm-carousel-control-prev-inner, .cm-carousel-control-next-inner {
            padding: 8px !important;
        }
    }
    @media screen and (max-width: 500px) {
        .cm-carousel-caption {
            padding-bottom: 0 !important;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 399px) {
        .cm-carousel-caption {
            position: absolute;
            top: auto !important;
            bottom: 8px !important;
        }
    }
    @media screen and (min-width: 400px) and (max-width: 449px) {
        .cm-carousel-caption {
            position: absolute;
            top: auto !important;
            bottom: 1rem !important;
        }
    }
    @media screen and (min-width: 450px) {
        .my-caption-mb, .cm-carousel-caption-header {
            margin-bottom: 0 !important;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 576px) {
        .cm-btn-visible {
            width: auto;
        }
    }
    @media screen and (min-width: 428px) and (max-width: 576px) {
        .cm-carousel-caption h5 {
            font-size: 1.85rem;
        }

        .cm-carousel-caption p {
            font-size: 1.25rem;
        }
    }
    @media screen and (min-width: 577px) {
        .cm-carousel-caption {
            position: absolute;
            top: auto !important;
            bottom: 1rem !important;
        }

        .cm-carousel-caption .cm-btn-visible {
            width: 24rem;
        }

        .cm-carousel-caption-text {
            margin-bottom: 1rem !important;
        }
    }
    @media screen and (min-width: 577px) and (max-width: 719px) {
        .cm-carousel-caption h5 {
            font-size: 2rem;
        }

        .cm-carousel-caption p {
            font-size: 1.25rem;
        }
    }
    @media screen and (min-width: 720px) {
        .cm-carousel-caption p {
            font-size: 1.85rem;
        }

        .cm-carousel-caption .cm-btn-visible {
            min-height: 2rem;
            font-size: 1.35rem;
        }
    }
    @media screen and (min-width: 720px) and (max-width: 959px) {
        .cm-carousel-caption h5 {
            font-size: 2.85rem;
        }
    }
    @media screen and (min-width: 960px) {
        .cm-carousel-caption h5 {
            font-size: 3.25rem;
        }
    }

    /*Media queries styles css*/
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