<template>
    <div>
          <div class="cm-outline mt-3 ml-3 mr-3 rounded">
            <div class="jumbotron cm-inline">
              <p class="lead cm-lead cm-lead-text-color text-capitalize">page not found.</p>
              <h1 class="cm-display-4 cm-display-title-color text-capitalize">404</h1>
              <p class="lead">
                <router-link to="/" class="btn cm-btn-show btn-lg text-capitalize">back to main</router-link>
              </p>
            </div>
          </div>
    </div>
</template>

<style scoped>
    /*Not Found styles*/

    .cm-outline {
        border: 4px solid #343a40;
    }

    .cm-inline {
        text-align: center;
        background-color: #343a40 !important;
        border-radius: 0 !important;
        border: 7px solid #fff;
        margin-bottom: 0 !important;
    }

    .cm-lead {
        font-size: 2rem !important;
    }

    .cm-lead-text-color {
        color: #fff;
    }

    .cm-display-4 {
        font-size: 7rem;
        font-weight: 600;
    }

    .cm-display-title-color {
        color: #fff;
    }

    .cm-btn-show {
        background-color: rgba(70, 130, 180, 0.3) !important;
        border: 1px solid #fff !important;
        color: #fff !important;
    }

    .cm-btn-show:hover {
        background-color: rgba(0, 0, 0, 0.8) !important;
    }

    /*Media queries styles of Not Found*/

    @media screen and (min-width: 320px) and (max-width: 359px) {
        .cm-display-4 {
            font-size: 4rem;
        }

        .cm-lead {
            font-size: 1.5rem !important;
        }

        .cm-btn-show {
            padding: 7px !important;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 394px) {
        .cm-lead {
            font-size: 1.85rem !important;
        }
    }
</style>